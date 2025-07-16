import React, { useState } from 'react';
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
  FileText,
  MessageSquare,
  Phone,
  TrendingUp,
  LogOut,
  BarChart3,
  Users,
  Sparkles,
  Lightbulb,
  Target,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Search
} from 'lucide-react';

// Sidebar Component (reused)
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

const ScriptBuilder = ({ user, onLogout }) => {
  const [scripts, setScripts] = useState([
    {
      id: 1,
      name: 'B2B Sales Qualification',
      description: 'Comprehensive lead qualification script for enterprise sales',
      type: 'Sales',
      status: 'active',
      usedBy: 3,
      successRate: 78,
      lastModified: '2 hours ago',
      content: `Hi, this is Sarah calling from [Company Name]. I'm reaching out because you expressed interest in our AI calling solution through our website. Do you have a quick minute to chat about how we can help automate your sales calls and improve your team's productivity?

[WAIT FOR RESPONSE]

Great! I'd love to learn more about your current sales process. How many outbound calls does your team typically make per week?

[LISTEN FOR OBJECTIONS]

If "not interested": I understand you might not be looking for a solution right now. Can I ask what your biggest challenge is with your current sales process? Many of our clients were in a similar situation before they discovered how much time AI can save.

If "too busy": I completely understand - that's exactly why our AI solution could be valuable. It handles the time-consuming prospecting calls so your team can focus on closing deals. Would you be open to a quick 15-minute demo next week?

If "already have solution": That's great that you have something in place! I'm curious - are you completely satisfied with your current results? Our clients typically see a 40% improvement in conversion rates when they switch to our AI system.

[BOOK MEETING]

Perfect! I have some time available on Tuesday at 2 PM or Wednesday at 10 AM. Which works better for you?

[CONFIRM DETAILS]

Excellent! I'll send you a calendar invite with all the details. Is there anything specific you'd like me to focus on during our demo?

Thank you for your time today, and I look forward to speaking with you soon!`
    },
    {
      id: 2,
      name: 'Customer Support Triage',
      description: 'Handle basic support inquiries and route complex issues',
      type: 'Support',
      status: 'active',
      usedBy: 2,
      successRate: 85,
      lastModified: '1 day ago',
      content: `Hello! Thanks for calling [Company Name] support. I'm here to help you with any questions about our service.

[WAIT FOR ISSUE]

I understand you're having trouble with [ISSUE]. Let me help you resolve this right away.

[TROUBLESHOOTING STEPS]

If technical issue: Let me walk you through some troubleshooting steps. First, can you tell me what device you're using and what exactly is happening?

If billing question: I can help you with billing questions. Let me pull up your account information. Can you please provide your account email address?

If feature request: That's great feedback! I'll make sure to pass that along to our development team. Can you tell me more about what you're trying to accomplish?

If complex issue: This sounds like something our technical team should handle directly. Let me transfer you to one of our specialists who can give you the detailed help you need.

[RESOLUTION]

Is there anything else I can help you with today? I want to make sure you're completely satisfied with our service.

[FOLLOW-UP]

Great! I'm going to send you a follow-up email with a summary of what we discussed and any next steps. Have a wonderful day!`
    },
    {
      id: 3,
      name: 'Warm Lead Follow-up',
      description: 'Nurture warm leads and move them through the sales funnel',
      type: 'Follow-up',
      status: 'active',
      usedBy: 2,
      successRate: 92,
      lastModified: '3 days ago',
      content: `Hi there! This is Emma calling from [Company Name]. I'm following up on our previous conversation about our AI calling solution. I hope you've had a chance to think about how it could help your business!

[WAIT FOR RESPONSE]

That's wonderful! I'm excited to continue our conversation. Based on what you mentioned last time about [SPECIFIC PAIN POINT], I think our solution could really help streamline your sales process and save your team valuable time.

[ADDRESS CONCERNS]

If still interested: Fantastic! I'd love to schedule a demo to show you exactly how it works. I can show you some real examples of how companies like yours have improved their results. What does your calendar look like this week?

If need more time: I completely understand - this is an important decision for your business. Can I send you some additional information that might help? What specific questions do you have?

If budget concerns: I appreciate you being upfront about the budget. Let me ask you this - what would it be worth to your business if you could increase your sales team's productivity by 40%? That's what our average client sees.

[NEXT STEPS]

Perfect! I'll get that set up for you right away. You're going to love what we can do for your business. I'll send you the meeting details within the next hour.

[CLOSING]

Thanks so much for your time today. I'm really looking forward to showing you how this can transform your sales process!`
    },
    {
      id: 4,
      name: 'Appointment Reminder',
      description: 'Remind customers about upcoming appointments',
      type: 'Reminder',
      status: 'draft',
      usedBy: 1,
      successRate: 95,
      lastModified: '5 days ago',
      content: `Hello! This is a friendly reminder from [Company Name]. You have an appointment scheduled with [AGENT NAME] tomorrow at [TIME].

[WAIT FOR RESPONSE]

Great! I just wanted to confirm that you'll be able to make it to your appointment tomorrow at [TIME]. We have you scheduled for [APPOINTMENT TYPE].

[CONFIRMATION]

If confirmed: Perfect! We'll see you tomorrow at [TIME]. The meeting will be [VIRTUAL/IN-PERSON] and should take about [DURATION]. 

If needs to reschedule: No problem at all! What day and time would work better for you? I can check our calendar and find a time that works.

If questions: I'd be happy to answer any questions you have about tomorrow's meeting. What can I help clarify?

[DETAILS]

Just as a reminder, [AGENT NAME] will be covering [TOPICS] and will have some great insights to share with you about [RELEVANT TOPIC].

[CLOSING]

Thanks for confirming! We're looking forward to speaking with you tomorrow. Have a great rest of your day!`
    }
  ]);

  const [showEditor, setShowEditor] = useState(false);
  const [editingScript, setEditingScript] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleNewScript = () => {
    setEditingScript(null);
    setShowEditor(true);
  };

  const handleEditScript = (script) => {
    setEditingScript(script);
    setShowEditor(true);
  };

  const filteredScripts = scripts.filter(script =>
    script.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    script.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar user={user} onLogout={onLogout} currentPage="/script-builder" />
      
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Script Builder</h1>
              <p className="text-gray-600">Create and manage conversation flows for your AI agents</p>
            </div>
            
            <button
              onClick={handleNewScript}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>New Script</span>
            </button>
          </div>
        </header>
        
        <main className="p-6">
          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search scripts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Scripts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScripts.map((script) => (
              <motion.div
                key={script.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{script.name}</h3>
                    <p className="text-sm text-gray-600">{script.description}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      script.status === 'active' ? 'bg-green-100 text-green-700' :
                      script.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {script.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-900">{script.usedBy}</p>
                    <p className="text-xs text-gray-600">Agents</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-green-600">{script.successRate}%</p>
                    <p className="text-xs text-gray-600">Success</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-blue-600">{script.type}</p>
                    <p className="text-xs text-gray-600">Type</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{script.lastModified}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleEditScript(script)}
                      className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                    <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredScripts.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No scripts found</h3>
              <p className="text-gray-600 mb-4">
                {searchQuery ? 'Try adjusting your search terms' : 'Create your first script to get started'}
              </p>
              <button
                onClick={handleNewScript}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
              >
                <Plus className="w-5 h-5" />
                <span>Create Your First Script</span>
              </button>
            </div>
          )}
        </main>
      </div>
      
      {/* Script Editor Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {editingScript ? 'Edit Script' : 'Create New Script'}
                </h2>
                <button
                  onClick={() => setShowEditor(false)}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Script Name
                  </label>
                  <input
                    type="text"
                    defaultValue={editingScript?.name || ''}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Sales Qualification"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Script Type
                  </label>
                  <select
                    defaultValue={editingScript?.type || 'Sales'}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Survey">Survey</option>
                    <option value="Follow-up">Follow-up</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <input
                  type="text"
                  defaultValue={editingScript?.description || ''}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief description of this script's purpose"
                />
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Script Content
                </label>
                <textarea
                  defaultValue={editingScript?.content || ''}
                  rows="15"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                  placeholder="Enter your script here..."
                />
              </div>
              
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-900">Script Tips</span>
                </div>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Use [WAIT FOR RESPONSE] to pause and listen</li>
                  <li>• Include [LISTEN FOR OBJECTIONS] to handle common objections</li>
                  <li>• Use conditional statements like "If X then Y"</li>
                  <li>• Keep opening statements concise and engaging</li>
                  <li>• Always have a clear call-to-action</li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200 flex items-center justify-between">
              <button
                onClick={() => setShowEditor(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Cancel
              </button>
              
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                  Save as Draft
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                  <Save className="w-4 h-4" />
                  <span>Save & Activate</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScriptBuilder;