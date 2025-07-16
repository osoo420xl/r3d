import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import VoicePreview from './VoicePreview';
import { 
  Plus, 
  Bot, 
  Settings, 
  Play, 
  Pause, 
  Trash2, 
  Edit,
  Copy,
  Download,
  Upload,
  Save,
  X,
  Volume2,
  Mic,
  Globe,
  Zap,
  Target,
  MessageSquare,
  Phone,
  Clock,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Eye,
  BarChart3,
  FileText,
  LogOut,
  Users,
  ArrowRight,
  Lightbulb,
  Sparkles,
  Activity
} from 'lucide-react';

// Sidebar Component (reused from Dashboard)
const Sidebar = ({ user, onLogout, currentPage }) => {
  const menuItems = [
    { icon: <BarChart3 className="w-5 h-5" />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Bot className="w-5 h-5" />, label: 'AI Agents', path: '/agent-builder' },
    { icon: <FileText className="w-5 h-5" />, label: 'Scripts', path: '/script-builder' },
    { icon: <Phone className="w-5 h-5" />, label: 'Call Logs', path: '/call-logs' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Analytics', path: '/analytics' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Bland®</h1>
        <p className="text-gray-400 text-sm">AI Calling Platform</p>
      </div>
      
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              currentPage === item.path ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      
      <div className="mt-8 pt-8 border-t border-gray-800">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">{user.name.charAt(0).toUpperCase()}</span>
          </div>
          <div>
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-gray-400">{user.plan} plan</p>
          </div>
        </div>
        
        <button
          onClick={onLogout}
          className="flex items-center space-x-3 w-full p-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

// Agent Card Component
const AgentCard = ({ agent, onEdit, onDelete, onClone, onToggle }) => {
  const statusColor = agent.status === 'active' ? 'bg-green-500' : 
                     agent.status === 'paused' ? 'bg-yellow-500' : 'bg-gray-400';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
            <p className="text-sm text-gray-600">{agent.description}</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${statusColor}`}></div>
          <span className="text-sm text-gray-600 capitalize">{agent.status}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900">{agent.callsToday}</p>
          <p className="text-sm text-gray-600">Calls Today</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">{agent.successRate}%</p>
          <p className="text-sm text-gray-600">Success Rate</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">{agent.avgCallTime}m</p>
          <p className="text-sm text-gray-600">Avg Call Time</p>
        </div>
      </div>
      
      <div className="mb-4">
        <VoicePreview 
          text={agent.script || "Hi, this is " + agent.name + " calling from your company. I'm reaching out to discuss how we can help improve your business operations. Do you have a few minutes to chat?"}
          voice={agent.voice}
          className="mb-2"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{agent.language}</span>
          <Volume2 className="w-4 h-4 text-gray-400 ml-2" />
          <span className="text-sm text-gray-600">{agent.voice}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onToggle(agent.id)}
            className={`p-2 rounded-lg ${
              agent.status === 'active' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'
            }`}
          >
            {agent.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          
          <button
            onClick={() => onEdit(agent)}
            className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
          >
            <Edit className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => onClone(agent)}
            className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Copy className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => onDelete(agent.id)}
            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Agent Builder Modal
const AgentBuilderModal = ({ isOpen, onClose, agent, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    language: 'English',
    voice: 'Sarah',
    personality: 'Professional',
    goal: 'Schedule Meeting',
    script: '',
    maxCallTime: 300,
    retryAttempts: 3,
    transferNumber: '',
    webhook: ''
  });

  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    if (agent) {
      setFormData({
        name: agent.name || '',
        description: agent.description || '',
        language: agent.language || 'English',
        voice: agent.voice || 'Sarah',
        personality: agent.personality || 'Professional',
        goal: agent.goal || 'Schedule Meeting',
        script: agent.script || '',
        maxCallTime: agent.maxCallTime || 300,
        retryAttempts: agent.retryAttempts || 3,
        transferNumber: agent.transferNumber || '',
        webhook: agent.webhook || ''
      });
    } else {
      // Reset form for new agent
      setFormData({
        name: '',
        description: '',
        language: 'English',
        voice: 'Sarah',
        personality: 'Professional',
        goal: 'Schedule Meeting',
        script: `Hi, this is Sarah calling from [Company Name]. I'm reaching out because you expressed interest in our AI calling solution. 

Do you have a quick minute to chat about how we can help automate your sales calls and improve your team's productivity?

[WAIT FOR RESPONSE]

Great! I'd love to learn more about your current sales process. How many outbound calls does your team typically make per week?

[LISTEN FOR OBJECTIONS]

If "not interested": I understand you might not be looking for a solution right now. Can I ask what your biggest challenge is with your current sales process?

If "too busy": I completely understand - that's exactly why our AI solution could be valuable. It handles the time-consuming prospecting calls so your team can focus on closing deals. Would you be open to a quick 15-minute demo next week?

[BOOK MEETING]

Perfect! I have some time available on Tuesday at 2 PM or Wednesday at 10 AM. Which works better for you?

[CONFIRM DETAILS]

Excellent! I'll send you a calendar invite with all the details. Is there anything specific you'd like me to focus on during our demo?

Thank you for your time today, and I look forward to speaking with you soon!`,
        maxCallTime: 300,
        retryAttempts: 3,
        transferNumber: '',
        webhook: ''
      });
    }
  }, [agent, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: agent?.id || Date.now(),
      status: 'inactive',
      callsToday: agent?.callsToday || 0,
      successRate: agent?.successRate || 0,
      avgCallTime: agent?.avgCallTime || 0,
      createdAt: new Date().toISOString()
    });
    onClose();
  };

  const steps = [
    { id: 1, title: 'Basic Info', icon: <Bot className="w-5 h-5" /> },
    { id: 2, title: 'Voice & Language', icon: <Volume2 className="w-5 h-5" /> },
    { id: 3, title: 'Personality', icon: <Sparkles className="w-5 h-5" /> },
    { id: 4, title: 'Goals & Script', icon: <Target className="w-5 h-5" /> },
    { id: 5, title: 'Integrations', icon: <Zap className="w-5 h-5" /> }
  ];

  const voiceOptions = [
    'Sarah',
    'John', 
    'Emma',
    'David',
    'Lisa'
  ];

  const personalityOptions = [
    'Professional',
    'Friendly',
    'Enthusiastic',
    'Calm',
    'Assertive',
    'Empathetic'
  ];

  const goalOptions = [
    'Schedule Meeting',
    'Generate Lead',
    'Qualify Prospect',
    'Customer Support',
    'Follow-up Call',
    'Survey Response'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {agent ? 'Edit Agent' : 'Create New Agent'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Step Indicator */}
          <div className="flex items-center space-x-4 mt-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center space-x-2 ${
                  currentStep >= step.id ? 'text-blue-600' : 'text-gray-400'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep >= step.id ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}>
                  {step.icon}
                </div>
                <span className="text-sm font-medium">{step.title}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Agent Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., Sales Bot, Support Agent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="3"
                  placeholder="Brief description of what this agent does"
                />
              </div>
            </div>
          )}

          {/* Step 2: Voice & Language */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language
                </label>
                <select
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Italian">Italian</option>
                  <option value="Portuguese">Portuguese</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Voice
                </label>
                <select
                  value={formData.voice}
                  onChange={(e) => setFormData({ ...formData, voice: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {voiceOptions.map((voice) => (
                    <option key={voice} value={voice}>
                      {voice}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <VoicePreview 
                  text="Hi, this is a sample of how I sound. I'm your AI calling agent ready to help with your business needs."
                  voice={formData.voice}
                />
              </div>
            </div>
          )}

          {/* Step 3: Personality */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Personality Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {personalityOptions.map((personality) => (
                    <button
                      key={personality}
                      type="button"
                      onClick={() => setFormData({ ...formData, personality })}
                      className={`p-3 border rounded-lg text-left transition-colors ${
                        formData.personality === personality
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <span className="font-medium">{personality}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Call Duration (seconds)
                </label>
                <input
                  type="number"
                  value={formData.maxCallTime}
                  onChange={(e) => setFormData({ ...formData, maxCallTime: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="60"
                  max="1800"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Retry Attempts
                </label>
                <input
                  type="number"
                  value={formData.retryAttempts}
                  onChange={(e) => setFormData({ ...formData, retryAttempts: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  min="1"
                  max="10"
                />
              </div>
            </div>
          )}

          {/* Step 4: Goals & Script */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Goal
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {goalOptions.map((goal) => (
                    <option key={goal} value={goal}>
                      {goal}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Opening Script
                </label>
                <textarea
                  value={formData.script}
                  onChange={(e) => setFormData({ ...formData, script: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="8"
                  placeholder="Enter your agent's conversation script..."
                />
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <VoicePreview 
                  text={formData.script}
                  voice={formData.voice}
                />
              </div>
            </div>
          )}

          {/* Step 5: Integrations */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Transfer Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.transferNumber}
                  onChange={(e) => setFormData({ ...formData, transferNumber: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Webhook URL (Optional)
                </label>
                <input
                  type="url"
                  value={formData.webhook}
                  onChange={(e) => setFormData({ ...formData, webhook: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://your-website.com/webhook"
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <span className="text-sm text-gray-500">
              Step {currentStep} of {steps.length}
            </span>
            
            {currentStep < steps.length ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
              >
                <Save className="w-4 h-4" />
                <span>Save Agent</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

// Main Agent Builder Component
const AgentBuilder = ({ user, onLogout }) => {
  const [agents, setAgents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAgent, setEditingAgent] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load realistic sample agents
    const sampleAgents = [
      {
        id: 1,
        name: 'Sarah - Sales Expert',
        description: 'Handles B2B lead qualification and appointment setting with a professional approach',
        language: 'English',
        voice: 'Sarah',
        personality: 'Professional',
        goal: 'Schedule Meeting',
        status: 'active',
        callsToday: 47,
        successRate: 78,
        avgCallTime: 4.2,
        script: `Hi, this is Sarah calling from [Company Name]. I'm reaching out because you expressed interest in our AI calling solution. Do you have a quick minute to chat about how we can help automate your sales calls and improve your team's productivity?

[WAIT FOR RESPONSE]

Great! I'd love to learn more about your current sales process. How many outbound calls does your team typically make per week?

[LISTEN FOR OBJECTIONS]

If "not interested": I understand you might not be looking for a solution right now. Can I ask what your biggest challenge is with your current sales process?

If "too busy": I completely understand - that's exactly why our AI solution could be valuable. It handles the time-consuming prospecting calls so your team can focus on closing deals. Would you be open to a quick 15-minute demo next week?

[BOOK MEETING]

Perfect! I have some time available on Tuesday at 2 PM or Wednesday at 10 AM. Which works better for you?`,
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        name: 'John - Customer Support',
        description: 'Provides friendly customer support and handles basic troubleshooting inquiries',
        language: 'English',
        voice: 'John',
        personality: 'Friendly',
        goal: 'Customer Support',
        status: 'active',
        callsToday: 32,
        successRate: 85,
        avgCallTime: 6.1,
        script: `Hello! Thanks for calling [Company Name] support. I'm John, and I'm here to help you with any questions about our service.

[WAIT FOR ISSUE]

I understand you're having trouble with [ISSUE]. Let me help you resolve this right away.

[TROUBLESHOOTING STEPS]

If technical issue: Let me walk you through some troubleshooting steps. First, can you tell me what device you're using?

If billing question: I can help you with billing questions. Let me pull up your account information.

If feature request: That's great feedback! I'll make sure to pass that along to our development team.

[RESOLUTION]

Is there anything else I can help you with today? I want to make sure you're completely satisfied with our service.`,
        createdAt: new Date().toISOString()
      },
      {
        id: 3,
        name: 'Emma - Follow-up Specialist',
        description: 'Handles warm follow-up calls and nurtures leads with an enthusiastic approach',
        language: 'English',
        voice: 'Emma',
        personality: 'Enthusiastic',
        goal: 'Follow-up Call',
        status: 'paused',
        callsToday: 28,
        successRate: 92,
        avgCallTime: 3.8,
        script: `Hi there! This is Emma calling from [Company Name]. I'm following up on our previous conversation about our AI calling solution. I hope you've had a chance to think about how it could help your business!

[WAIT FOR RESPONSE]

That's wonderful! I'm excited to continue our conversation. Based on what you mentioned last time, I think our solution could really help streamline your sales process.

[ADDRESS CONCERNS]

If still interested: Fantastic! I'd love to schedule a demo to show you exactly how it works. What does your calendar look like this week?

If need more time: I completely understand - this is an important decision. Can I send you some additional information that might help? What specific questions do you have?

[NEXT STEPS]

Perfect! I'll get that set up for you right away. You're going to love what we can do for your business!`,
        createdAt: new Date().toISOString()
      }
    ];
    setAgents(sampleAgents);
  }, []);

  const handleSaveAgent = (agentData) => {
    if (editingAgent) {
      setAgents(agents.map(agent => 
        agent.id === editingAgent.id ? { ...agent, ...agentData } : agent
      ));
    } else {
      setAgents([...agents, agentData]);
    }
    setEditingAgent(null);
  };

  const handleEditAgent = (agent) => {
    setEditingAgent(agent);
    setIsModalOpen(true);
  };

  const handleDeleteAgent = (id) => {
    if (window.confirm('Are you sure you want to delete this agent?')) {
      setAgents(agents.filter(agent => agent.id !== id));
    }
  };

  const handleCloneAgent = (agent) => {
    const clonedAgent = {
      ...agent,
      id: Date.now(),
      name: `${agent.name} (Copy)`,
      status: 'inactive',
      callsToday: 0,
      successRate: 0,
      avgCallTime: 0
    };
    setAgents([...agents, clonedAgent]);
  };

  const handleToggleAgent = (id) => {
    setAgents(agents.map(agent => 
      agent.id === id 
        ? { ...agent, status: agent.status === 'active' ? 'paused' : 'active' }
        : agent
    ));
  };

  const filteredAgents = agents.filter(agent =>
    agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    agent.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar user={user} onLogout={onLogout} currentPage="/agent-builder" />
      
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI Agents</h1>
              <p className="text-gray-600">Create and manage your AI calling agents</p>
            </div>
            
            <button
              onClick={() => {
                setEditingAgent(null);
                setIsModalOpen(true);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>New Agent</span>
            </button>
          </div>
        </header>
        
        <main className="p-6">
          {/* Search and Filters */}
          <div className="mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search agents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Bot className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>All Statuses</option>
                <option>Active</option>
                <option>Paused</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          {/* Agents Grid */}
          {filteredAgents.length === 0 ? (
            <div className="text-center py-12">
              <Bot className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No agents found</h3>
              <p className="text-gray-600 mb-4">
                {searchQuery ? 'Try adjusting your search terms' : 'Create your first AI agent to get started'}
              </p>
              <button
                onClick={() => {
                  setEditingAgent(null);
                  setIsModalOpen(true);
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
              >
                <Plus className="w-5 h-5" />
                <span>Create Your First Agent</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAgents.map((agent) => (
                <AgentCard
                  key={agent.id}
                  agent={agent}
                  onEdit={handleEditAgent}
                  onDelete={handleDeleteAgent}
                  onClone={handleCloneAgent}
                  onToggle={handleToggleAgent}
                />
              ))}
            </div>
          )}
        </main>
      </div>
      
      {/* Agent Builder Modal */}
      <AgentBuilderModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingAgent(null);
        }}
        agent={editingAgent}
        onSave={handleSaveAgent}
      />
    </div>
  );
};

export default AgentBuilder;