import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Play, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  Bot,
  Phone,
  Settings,
  Zap,
  Target,
  FileText,
  Users,
  TrendingUp,
  Lightbulb,
  Sparkles,
  Clock,
  Volume2,
  Globe,
  X
} from 'lucide-react';

const Tutorial = ({ user, onLogout }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  const tutorialSteps = [
    {
      id: 1,
      title: "Welcome to Bland AI",
      description: "Learn how to build your first AI calling agent in minutes",
      icon: <Bot className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bot className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Welcome to Bland AI, {user.name}!
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              You're about to learn how to create AI agents that can make phone calls, 
              handle objections, and book meetings automatically.
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-900">What you'll learn:</span>
            </div>
            <ul className="space-y-2 text-sm text-green-800">
              <li>• How to create your first AI agent</li>
              <li>• Setting up voice and personality</li>
              <li>• Writing effective scripts</li>
              <li>• Integrating with your CRM</li>
              <li>• Monitoring and optimizing performance</li>
            </ul>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500">
              This tutorial takes about 10 minutes to complete
            </p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Understanding AI Agents",
      description: "Learn what AI agents are and how they work",
      icon: <Sparkles className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What are AI Agents?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Traditional Calling</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Requires human agents</li>
                <li>• Limited to business hours</li>
                <li>• Expensive at scale</li>
                <li>• Inconsistent quality</li>
                <li>• Gets tired and stressed</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">AI Calling Agents</h4>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• Work 24/7 without breaks</li>
                <li>• Consistent performance</li>
                <li>• Scales to thousands of calls</li>
                <li>• Never gets tired or emotional</li>
                <li>• Learns and improves over time</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-3">How It Works</h4>
            <div className="flex items-center space-x-4 overflow-x-auto">
              <div className="flex-shrink-0 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-gray-600">Make Call</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="flex-shrink-0 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-2">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-gray-600">Listen</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="flex-shrink-0 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-gray-600">Process</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="flex-shrink-0 text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mb-2">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm text-gray-600">Respond</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Create Your First Agent",
      description: "Step-by-step guide to building an AI agent",
      icon: <Bot className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Bot className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Let's Build Your First Agent
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We'll create a simple sales agent that qualifies leads and books meetings.
            </p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Agent Configuration</h4>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Agent Name
                  </label>
                  <input
                    type="text"
                    value="Sales Bot"
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Voice
                  </label>
                  <input
                    type="text"
                    value="Sarah (Professional)"
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Goal
                </label>
                <input
                  type="text"
                  value="Schedule Meeting"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Opening Script
                </label>
                <textarea
                  value="Hi, this is Sarah from Bland AI. I'm calling to see if you'd be interested in learning how AI can help automate your sales calls. Do you have a quick minute to chat?"
                  readOnly
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                />
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/agent-builder"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Bot className="w-5 h-5" />
              <span>Create This Agent</span>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Voice & Personality",
      description: "Configure how your agent sounds and behaves",
      icon: <Volume2 className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Volume2 className="w-10 h-10 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Voice & Personality Matter
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              The right voice and personality can dramatically improve your success rates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Voice Options</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Sarah</p>
                    <p className="text-sm text-gray-600">Professional, Clear</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">John</p>
                    <p className="text-sm text-gray-600">Friendly, Warm</p>
                  </div>
                  <button className="text-gray-600 hover:text-gray-700">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Emma</p>
                    <p className="text-sm text-gray-600">Energetic, Confident</p>
                  </div>
                  <button className="text-gray-600 hover:text-gray-700">
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Personality Types</h4>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-gray-900">Professional</p>
                  <p className="text-sm text-gray-600">Best for B2B sales and formal contexts</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">Friendly</p>
                  <p className="text-sm text-gray-600">Great for customer service and support</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">Enthusiastic</p>
                  <p className="text-sm text-gray-600">Perfect for B2C sales and promotions</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <div className="flex items-center space-x-2 mb-3">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h4 className="font-semibold text-purple-900">Pro Tip: Voice Cloning</h4>
            </div>
            <p className="text-sm text-purple-800">
              For maximum authenticity, clone your own voice or your best salesperson's voice. 
              Just upload a 5-minute audio sample and our AI will create a perfect clone.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Monitoring & Analytics",
      description: "Track performance and optimize your agents",
      icon: <TrendingUp className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Monitor & Optimize Performance
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Track key metrics and continuously improve your AI agents.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">1,247</div>
              <div className="text-sm text-gray-600">Total Calls</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">82%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">4.2m</div>
              <div className="text-sm text-gray-600">Avg Call Time</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">34</div>
              <div className="text-sm text-gray-600">Meetings Booked</div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Key Metrics to Track</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Answer rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Conversation duration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Goal completion rate</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Objection handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Transfer rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">Callback requests</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/analytics"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <TrendingUp className="w-5 h-5" />
              <span>View Analytics Dashboard</span>
            </Link>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Congratulations!",
      description: "You're ready to start building AI agents",
      icon: <CheckCircle className="w-8 h-8" />,
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🎉 Congratulations!
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              You've completed the tutorial and are ready to build your first AI calling agent.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">What's Next?</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                to="/agent-builder"
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Create Your Agent</p>
                  <p className="text-sm text-gray-600">Build your first AI agent</p>
                </div>
              </Link>
              
              <Link
                to="/script-builder"
                className="flex items-center space-x-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Write Scripts</p>
                  <p className="text-sm text-gray-600">Create conversation flows</p>
                </div>
              </Link>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              <span className="font-medium text-yellow-900">Remember:</span>
            </div>
            <ul className="text-sm text-yellow-800 space-y-1">
              <li>• Start with simple scripts and gradually add complexity</li>
              <li>• Test your agents thoroughly before going live</li>
              <li>• Monitor performance and continuously optimize</li>
              <li>• Have a human backup plan for complex situations</li>
            </ul>
          </div>
          
          <div className="text-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>Go to Dashboard</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      setCompletedSteps([...completedSteps, currentStep]);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    setCompletedSteps([...Array(tutorialSteps.length).keys()]);
    setCurrentStep(tutorialSteps.length - 1);
  };

  const currentTutorial = tutorialSteps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/dashboard" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Getting Started Tutorial</h1>
          <p className="text-gray-600">Learn how to build AI calling agents step by step</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600">
              Step {currentStep + 1} of {tutorialSteps.length}
            </span>
            <button
              onClick={handleSkip}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Skip Tutorial
            </button>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / tutorialSteps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Tutorial Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="text-blue-600">{currentTutorial.icon}</div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{currentTutorial.title}</h2>
            <p className="text-gray-600">{currentTutorial.description}</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {currentTutorial.content}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-2">
            {tutorialSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentStep ? 'bg-blue-600' :
                  completedSteps.includes(index) ? 'bg-green-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          {currentStep < tutorialSteps.length - 1 ? (
            <button
              onClick={handleNext}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>Next</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <Link
              to="/dashboard"
              className="flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <span>Complete Tutorial</span>
              <CheckCircle className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;