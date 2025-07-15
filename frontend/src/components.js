import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Phone, 
  Shield, 
  Users, 
  Zap, 
  Globe, 
  CheckCircle, 
  ChevronRight,
  Menu,
  X,
  Star,
  Building,
  Clock,
  Target,
  Lock,
  ArrowRight
} from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black">Bland</span>
            <span className="text-sm text-gray-600 ml-1">®</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-700 hover:text-black transition-colors">How It Works</a>
            <a href="#resources" className="text-gray-700 hover:text-black transition-colors">Resources</a>
            <a href="#enterprise" className="text-gray-700 hover:text-black transition-colors">Enterprise</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-black transition-colors">Sign In</button>
            <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Sign Up
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
              Talk to sales
            </button>
          </div>
          
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="relative bg-white pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-600 mb-4"
          >
            Meet Bland.
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight"
          >
            Your platform for making<br />
            ultra-realistic AI Phone Calls
          </motion.h1>
        </div>
        
        <div className="relative flex justify-center mb-16">
          {/* Colorful Abstract Shapes */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-4xl h-64 relative">
              <div className="absolute left-0 top-0 w-80 h-32 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 rounded-lg transform -rotate-12"></div>
              <div className="absolute right-0 top-8 w-80 h-32 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg transform rotate-12"></div>
              <div className="absolute left-20 bottom-0 w-80 h-32 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-lg transform rotate-6"></div>
              <div className="absolute right-20 bottom-8 w-80 h-32 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-lg transform -rotate-6"></div>
            </div>
          </div>
          
          {/* iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-10"
          >
            <div className="relative w-80 h-auto">
              <img
                src="https://images.unsplash.com/photo-1629494893504-d41e26a02631?w=400&h=800&fit=crop"
                alt="iPhone mockup"
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
              <div className="absolute top-16 left-8 right-8 bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                    <div className="w-4 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">B</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Call Bland AI</p>
                      <p className="text-xs text-gray-600">9:41 AM</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-800">Make your customers happy!</p>
                </div>
                <p className="text-xs text-gray-600 mb-4">
                  You are now receiving a call from Bland AI.
                </p>
                <button className="w-full bg-black text-white py-3 rounded-lg font-medium">
                  Let's Talk
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Company Logos Ticker */}
        <div className="mb-16">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex items-center space-x-12 whitespace-nowrap"
            >
              {/* Repeat logos multiple times for continuous scroll */}
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center space-x-12">
                  <div className="text-2xl font-bold text-gray-400">Better</div>
                  <div className="text-2xl font-bold text-gray-400">Twilio</div>
                  <div className="text-2xl font-bold text-gray-400">Medallion</div>
                  <div className="text-2xl font-bold text-gray-400">SendGrid</div>
                  <div className="text-2xl font-bold text-gray-400">Cavaliers</div>
                  <div className="text-2xl font-bold text-gray-400">Masterworks</div>
                  <div className="text-2xl font-bold text-gray-400">Clipboard Health</div>
                  <div className="text-2xl font-bold text-gray-400">Nuitee</div>
                  <div className="text-2xl font-bold text-gray-400">Drata</div>
                  <div className="text-2xl font-bold text-gray-400">Y Combinator</div>
                  <div className="text-2xl font-bold text-gray-400">Emergence</div>
                  <div className="text-2xl font-bold text-gray-400">Scale</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// What is Bland Section
const WhatIsBlandSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg text-gray-400 mb-4">What is Bland.</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            AI phone agents that sound human,<br />
            speak any language, and work 24/7.
          </h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Bland makes it simple to integrate the latest conversational AI technology into your business. 
            Build the perfect employee to handle sales, scheduling, and all your customer support needs. 
            Bland's AI phone agents sound human, can speak any language, and work 24/7.
          </p>
          <p className="text-2xl font-bold mb-8">All for $0.09 a minute.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Sign up today
            </button>
            <button className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
              Talk to sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// How Bland is Built Section
const HowBlandIsBuiltSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Write custom prompts",
      description: "Provide your agent with sample dialogue and relevant details to personalize interactions with your customers."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Scale usage anytime",
      description: "Auto-scaling infrastructure allows you to handle thousands of calls, any time."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Seamlessly exchange data",
      description: "Dynamic integrations built with our API send your data wherever it needs to go."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Set strict guardrails",
      description: "Ensure calls stay on-brand, accurate, and within defined boundaries."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-lg text-gray-600 mb-4">How Bland is built.</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Self-hosted, end-to-end<br />
              infrastructure.
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Bland provides fully self-hosted, end-to-end infrastructure. That means faster response times, 
              99.99% uptime, and guaranteed security for your--and your customer's--data. And your marginal call costs? Zero.
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
              Talk to sales
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-black text-white p-6 rounded-lg"
              >
                <div className="text-red-500 mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// How Bland Works Section
const HowBlandWorksSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg text-gray-600 mb-4">How Bland works.</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Book an appointment. Update a CRM.<br />
            Send a text. All in one workflow.
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Pathways are the brain of your business. We integrate into your existing systems, whether it's a scheduler, 
            ERP, or CRM, so your agents don't just talk, they take action. You map out the conversation and define the 
            decisions your AI makes. Bland does the rest.
          </p>
        </div>
        
        <div className="flex justify-center mb-16">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1685839061205-a3ea35b7b804?w=600&h=400&fit=crop"
              alt="Workflow diagram"
              className="w-full max-w-2xl h-auto rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 text-center">
                <h4 className="text-2xl font-bold text-black mb-4">Conversational Pathways</h4>
                <p className="text-gray-700">The programming language for hallucination-proof AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pathways Section
const PathwaysSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg text-gray-400 mb-4">Build with Conversational Pathways.</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Meet Pathways — the programming<br />
            language for hallucination-proof AI.
          </h3>
        </div>
        
        <div className="flex justify-center">
          <div className="relative bg-gray-900 rounded-lg p-8 max-w-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-400">Default</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Play className="w-5 h-5 text-white" />
                <span className="text-white">Start</span>
              </div>
              
              <div className="ml-8 space-y-2">
                <div className="text-gray-300">if (customer.interest === "high") {</div>
                <div className="ml-4 text-gray-300">schedule_meeting();</div>
                <div className="text-gray-300">} else {</div>
                <div className="ml-4 text-gray-300">send_followup_email();</div>
                <div className="text-gray-300">}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Bland in Action Section
const BlandInActionSection = () => {
  const agents = [
    {
      name: "Katie",
      industry: "Logistics",
      image: "https://images.unsplash.com/photo-1657128344786-360c3f8e57e5?w=400&h=400&fit=crop",
      videoId: "_0waF4Oy6YU"
    },
    {
      name: "Jen",
      industry: "Finance",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      videoId: "Bv0LVtTJdyM"
    },
    {
      name: "Karen",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?w=400&h=400&fit=crop",
      videoId: "c3-ASiHV6No"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg text-gray-600 mb-4">Bland in action.</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Every day, Bland handles millions of calls.<br />
            Take a listen.
          </h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${agent.videoId}`}
                  title={agent.name}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-black">{agent.name}</h4>
                    <p className="text-gray-600">{agent.industry}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Enterprise Section
const EnterpriseSection = () => {
  const tabs = [
    { id: 'experience', label: 'Customer Experience', icon: <Users className="w-6 h-6" /> },
    { id: 'infrastructure', label: 'Dedicated Infrastructure', icon: <Building className="w-6 h-6" /> },
    { id: 'procedures', label: 'Operating Procedure', icon: <Target className="w-6 h-6" /> }
  ];

  const [activeTab, setActiveTab] = useState('experience');

  const tabContent = {
    experience: {
      title: "Your OS for customer experience.",
      description: "For Enterprises, Bland goes beyond phone calls. You'll gain access to campaign analytics, model fine tuning, warm transfers, SMS, and even the ability to hook up any external tool to take actions at the right moment in any conversation."
    },
    infrastructure: {
      title: "Dedicated infrastructure for infinite scale.",
      description: "Customer's call at critical moments-when they need help or when they're ready to take action. With dedicated infrastructure, your enterprise will be prepared to scale and handle any number of concurrent calls with up to five 9's of uptime."
    },
    procedures: {
      title: "Your Operating Procedures, implemented with our help.",
      description: "Our team will work directly with your call center, operations, and engineering teams to craft an agent that not only achieves the end business outcome but sounds incredibly realistic, using best in class prompt engineering to ensure the conversation sounds natural and is effective."
    }
  };

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg text-gray-400 mb-4">Bland works with enterprises.</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">
            Bland is built to meet the evolving demands<br />
            of modern enterprises.
          </h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Bland offers scalable solutions, real-time analytics, and 99.99% uptime to help you 
            deliver exceptional customer experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1683402949937-a95f649d3667?w=600&h=400&fit=crop"
              alt="Enterprise building"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <div className="flex flex-col space-y-4 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-3 p-4 rounded-lg text-left transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {tab.icon}
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>
            
            <div className="space-y-4">
              <h4 className="text-2xl font-bold">{tabContent[activeTab].title}</h4>
              <p className="text-gray-300">{tabContent[activeTab].description}</p>
              <button className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
                Talk to sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Security Section
const SecuritySection = () => {
  const securityFeatures = [
    { icon: <Building className="w-8 h-8" />, title: "Data in-House", description: "We store and manage your information in-house, reducing external risks and maintaining full control over your data." },
    { icon: <Shield className="w-8 h-8" />, title: "SOC2 Type II Compliant", description: "We follow strict security protocols and regularly monitor our systems to ensure your data remains protected." },
    { icon: <Globe className="w-8 h-8" />, title: "GDPR Compliant", description: "We follow EU privacy standards, guaranteeing transparency and secure handling of personal information." },
    { icon: <Lock className="w-8 h-8" />, title: "HIPAA Compliant", description: "Prioritize the security and privacy of sensitive customer data, ensuring full protection throughout your experience." },
    { icon: <Target className="w-8 h-8" />, title: "Regular Pen Tests", description: "We simulate cyberattacks to identify weaknesses, ensuring your systems stay secure against emerging threats." },
    { icon: <CheckCircle className="w-8 h-8" />, title: "Constant Unit Tests", description: "We ensure continuous security by identifying and addressing vulnerabilities in real time." },
    { icon: <Users className="w-8 h-8" />, title: "Expert Implementation", description: "We ensure your security measures are seamlessly integrated, protecting your systems from day one." },
    { icon: <Shield className="w-8 h-8" />, title: "Robust Guardrails", description: "Ensure your data and operations are secure, with built-in protections against risks and vulnerabilities." }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg text-gray-600 mb-4">Bland Security.</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Own your customer experience<br />
            end-to-end.
          </h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Bland provides end-to-end infrastructure so your customer experience is never reliant on big model providers. 
            That means faster response times, 99.99% uptime and fewer dependencies on external factors. 
            All while driving your marginal call costs to zero.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-red-600 mb-4 flex justify-center">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-black mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// News Section
const NewsSection = () => {
  const newsItems = [
    {
      title: "Why Bland is Unaffected by the IOS 26 Call Screening Feature",
      date: "Jun 16, 2025",
      readTime: "4 minute read",
      image: "https://images.unsplash.com/photo-1596477602103-a64a83304ecf?w=400&h=200&fit=crop"
    },
    {
      title: "AI Contact Centers in Logistics",
      date: "Jun 2, 2025",
      readTime: "5 minute read",
      image: "https://images.unsplash.com/photo-1596477602103-a64a83304ecf?w=400&h=200&fit=crop"
    },
    {
      title: "Conversational AI in Financial Services",
      date: "May 30, 2025",
      readTime: "6 minute read",
      image: "https://images.unsplash.com/photo-1596477602103-a64a83304ecf?w=400&h=200&fit=crop"
    },
    {
      title: "AI Call Center Automation in Healthcare",
      date: "May 26, 2025",
      readTime: "4 minute read",
      image: "https://images.unsplash.com/photo-1596477602103-a64a83304ecf?w=400&h=200&fit=crop"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-lg text-gray-600 mb-4">Bland News</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Insights, stories, & trends<br />
            shaping AI Phone Calls
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold text-black mb-3 line-clamp-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.date} — {item.readTime}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-8">You are now receiving a call from Bland AI.</p>
          <p className="text-red-500 mb-8">Oops! Something went wrong while submitting the form.</p>
          <button className="bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
            Start for Free
          </button>
        </div>
      </div>
    </footer>
  );
};

// Main HomePage Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <WhatIsBlandSection />
      <HowBlandIsBuiltSection />
      <HowBlandWorksSection />
      <PathwaysSection />
      <BlandInActionSection />
      <EnterpriseSection />
      <SecuritySection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default HomePage;