import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  Phone, 
  Shield, 
  Users, 
  Zap, 
  Globe, 
  CheckCircle, 
  Menu,
  X,
  Building,
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
            <a href="#features" className="text-gray-700 hover:text-black transition-colors">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-black transition-colors">Pricing</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-black transition-colors">
              Sign In
            </Link>
            <Link to="/signup" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Get Started Free
            </Link>
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
            Meet Bland AI - Free Forever
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight"
          >
            Build Your Own AI<br />
            Cold Calling Agent
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Create intelligent AI agents that make calls, handle objections, and book meetings. 
            100% free using open-source tools - no subscriptions, no limits.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link 
              to="/signup" 
              className="bg-black text-white px-8 py-4 rounded-md font-medium hover:bg-gray-800 transition-colors text-lg"
            >
              Start Building Free
            </Link>
            <Link 
              to="/tutorial" 
              className="text-black border-2 border-black px-8 py-4 rounded-md font-medium hover:bg-black hover:text-white transition-colors text-lg"
            >
              Watch Tutorial
            </Link>
          </motion.div>
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
          
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative z-10"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-black mb-2">AI Agent Dashboard</h3>
                <p className="text-gray-600">Monitor calls, analyze performance, and optimize your agents</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg">
                  <div className="text-3xl font-bold">127</div>
                  <div className="text-sm">Calls Made</div>
                </div>
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg">
                  <div className="text-3xl font-bold">85%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg">
                  <div className="text-3xl font-bold">34</div>
                  <div className="text-sm">Meetings Booked</div>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">Agent Active</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span className="text-sm text-gray-600">Currently Calling</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Free Forever",
      description: "Use OpenAI GPT-3.5, Whisper STT, and open-source TTS - no monthly fees or usage limits"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Visual Agent Builder",
      description: "Drag-and-drop interface to create conversation flows, handle objections, and set goals"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Language Support",
      description: "Built-in support for 50+ languages with native-sounding voices"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Local Processing",
      description: "Your data stays on your machine - no cloud dependencies for sensitive information"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description: "Track call performance, conversion rates, and optimize your scripts in real-time"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "CRM Integration",
      description: "Connect to Google Sheets, Notion, Airtable, or any webhook-enabled system"
    }
  ];

  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Everything You Need</h2>
          <p className="text-xl text-gray-600">Build professional AI calling agents without any costs</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  const steps = [
    {
      step: "1",
      title: "Create Your Agent",
      description: "Use our visual builder to design your AI agent's personality, goals, and conversation flow"
    },
    {
      step: "2",
      title: "Configure Voice & Language",
      description: "Choose from 50+ languages and voices, or clone your own voice using free tools"
    },
    {
      step: "3",
      title: "Set Up Integrations",
      description: "Connect to your CRM, calendar, or any system via webhooks and APIs"
    },
    {
      step: "4",
      title: "Launch & Monitor",
      description: "Start making calls and monitor performance in real-time through the dashboard"
    }
  ];

  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Get started in minutes, not hours</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Section
const PricingSection = () => {
  return (
    <section id="pricing" className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-300">Everything is free forever</p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 border-4 border-blue-500">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">Free Forever</h3>
              <div className="text-6xl font-bold mb-4">$0</div>
              <p className="text-gray-300 mb-8">No hidden costs, no subscriptions</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Unlimited AI agents</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Unlimited calls (your VoIP)</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Real-time analytics</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>CRM integrations</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Voice cloning</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Community support</span>
                </div>
              </div>
              
              <Link 
                to="/signup" 
                className="bg-blue-600 text-white px-8 py-4 rounded-md font-medium hover:bg-blue-700 transition-colors w-full block text-center"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300">
            <strong>Note:</strong> You'll need your own VoIP service (Twilio, etc.) for actual calling. 
            We provide everything else for free.
          </p>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Build Your AI Agent?</h2>
        <p className="text-xl mb-8">Join thousands of users who are already automating their calls</p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            to="/signup" 
            className="bg-white text-blue-600 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            Start Building Free
          </Link>
          <Link 
            to="/tutorial" 
            className="text-white border-2 border-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors text-lg"
          >
            Watch Tutorial
          </Link>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">Bland</span>
              <span className="text-sm text-gray-400 ml-1">®</span>
            </div>
            <p className="text-gray-400">
              Build AI calling agents with free, open-source tools. No subscriptions, no limits.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <div className="space-y-2">
              <a href="#features" className="text-gray-400 hover:text-white transition-colors block">Features</a>
              <a href="#pricing" className="text-gray-400 hover:text-white transition-colors block">Pricing</a>
              <Link to="/tutorial" className="text-gray-400 hover:text-white transition-colors block">Tutorial</Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">Documentation</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">Community</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">GitHub</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors block">Privacy</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Bland AI. Made with open-source tools. Free forever.
          </p>
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
      <FeaturesSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default HomePage;