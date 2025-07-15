import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Phone, 
  Users, 
  TrendingUp, 
  Clock, 
  Play, 
  Pause, 
  Settings,
  LogOut,
  BarChart3,
  FileText,
  Bell,
  Search,
  Filter,
  Bot,
  Calendar,
  Target,
  Activity,
  Zap,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

// Navigation Sidebar
const Sidebar = ({ user, onLogout, currentPage }) => {
  const navigate = useNavigate();
  
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

// Header Component
const Header = ({ user }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  
  const notifications = [
    { id: 1, type: 'success', message: 'Agent "Sales Bot" completed 12 calls', time: '2 minutes ago' },
    { id: 2, type: 'warning', message: 'Script "Follow-up" needs review', time: '1 hour ago' },
    { id: 3, type: 'info', message: 'New voice clone available', time: '3 hours ago' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user.name}!</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search agents, calls, scripts..."
              className="w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-gray-400 hover:text-gray-600 relative"
            >
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div key={notif.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                      <div className="flex items-start space-x-3">
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          notif.type === 'success' ? 'bg-green-500' :
                          notif.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                        }`}></div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{notif.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

// Stats Card Component
const StatsCard = ({ title, value, change, icon, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change && (
            <p className={`text-sm ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change > 0 ? '+' : ''}{change}% from last week
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

// Quick Actions Component
const QuickActions = () => {
  const actions = [
    { 
      icon: <Plus className="w-5 h-5" />, 
      label: 'Create Agent', 
      desc: 'Build a new AI calling agent',
      path: '/agent-builder',
      color: 'bg-blue-600'
    },
    { 
      icon: <FileText className="w-5 h-5" />, 
      label: 'New Script', 
      desc: 'Create conversation flow',
      path: '/script-builder',
      color: 'bg-green-600'
    },
    { 
      icon: <Play className="w-5 h-5" />, 
      label: 'Start Campaign', 
      desc: 'Launch calling campaign',
      path: '/call-logs',
      color: 'bg-purple-600'
    },
    { 
      icon: <BarChart3 className="w-5 h-5" />, 
      label: 'View Analytics', 
      desc: 'Check performance metrics',
      path: '/analytics',
      color: 'bg-orange-600'
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <Link
            key={index}
            to={action.path}
            className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className={`p-2 rounded-lg ${action.color} text-white`}>
              {action.icon}
            </div>
            <div>
              <p className="font-medium text-gray-900">{action.label}</p>
              <p className="text-sm text-gray-600">{action.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

// Recent Activity Component
const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'call',
      icon: <Phone className="w-4 h-4" />,
      message: 'Sales Bot completed call to John Doe',
      time: '2 minutes ago',
      status: 'success'
    },
    {
      id: 2,
      type: 'agent',
      icon: <Bot className="w-4 h-4" />,
      message: 'New agent "Support Bot" created',
      time: '1 hour ago',
      status: 'info'
    },
    {
      id: 3,
      type: 'script',
      icon: <FileText className="w-4 h-4" />,
      message: 'Script "Follow-up Flow" updated',
      time: '3 hours ago',
      status: 'warning'
    },
    {
      id: 4,
      type: 'call',
      icon: <Phone className="w-4 h-4" />,
      message: 'Campaign "Q1 Outreach" paused',
      time: '5 hours ago',
      status: 'error'
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-3">
            <div className={`p-2 rounded-full ${
              activity.status === 'success' ? 'bg-green-100 text-green-600' :
              activity.status === 'warning' ? 'bg-yellow-100 text-yellow-600' :
              activity.status === 'error' ? 'bg-red-100 text-red-600' :
              'bg-blue-100 text-blue-600'
            }`}>
              {activity.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">{activity.message}</p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Active Agents Component
const ActiveAgents = () => {
  const agents = [
    {
      id: 1,
      name: 'Sales Bot',
      status: 'active',
      calls: 23,
      success: 78,
      lastCall: '2 min ago'
    },
    {
      id: 2,
      name: 'Support Bot',
      status: 'paused',
      calls: 12,
      success: 85,
      lastCall: '1 hour ago'
    },
    {
      id: 3,
      name: 'Follow-up Bot',
      status: 'active',
      calls: 45,
      success: 92,
      lastCall: '5 min ago'
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Active Agents</h3>
        <Link 
          to="/agent-builder"
          className="text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          Manage All
        </Link>
      </div>
      
      <div className="space-y-4">
        {agents.map((agent) => (
          <div key={agent.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${
                agent.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
              }`}></div>
              <div>
                <p className="font-medium text-gray-900">{agent.name}</p>
                <p className="text-sm text-gray-600">{agent.calls} calls today</p>
              </div>
            </div>
            
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{agent.success}% success</p>
              <p className="text-xs text-gray-500">{agent.lastCall}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = ({ user, onLogout }) => {
  const [stats, setStats] = useState({
    totalCalls: 0,
    successRate: 0,
    activeAgents: 0,
    avgCallTime: 0
  });

  useEffect(() => {
    // Simulate loading stats
    const timer = setTimeout(() => {
      setStats({
        totalCalls: 1247,
        successRate: 82,
        activeAgents: 3,
        avgCallTime: 4.2
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar user={user} onLogout={onLogout} currentPage="/dashboard" />
      
      <div className="flex-1">
        <Header user={user} />
        
        <main className="p-6">
          {/* Welcome Message for New Users */}
          {user.isNewUser && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-900">Welcome to Bland AI!</h3>
                  <p className="text-blue-700">
                    Ready to build your first AI calling agent? 
                    <Link to="/tutorial" className="font-medium underline ml-1">
                      Start with our tutorial
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <StatsCard
              title="Total Calls"
              value={stats.totalCalls.toLocaleString()}
              change={12}
              icon={<Phone className="w-6 h-6 text-white" />}
              color="bg-blue-500"
            />
            <StatsCard
              title="Success Rate"
              value={`${stats.successRate}%`}
              change={5}
              icon={<Target className="w-6 h-6 text-white" />}
              color="bg-green-500"
            />
            <StatsCard
              title="Active Agents"
              value={stats.activeAgents}
              change={0}
              icon={<Bot className="w-6 h-6 text-white" />}
              color="bg-purple-500"
            />
            <StatsCard
              title="Avg Call Time"
              value={`${stats.avgCallTime}m`}
              change={-3}
              icon={<Clock className="w-6 h-6 text-white" />}
              color="bg-orange-500"
            />
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <QuickActions />
              <RecentActivity />
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <ActiveAgents />
              
              {/* System Status */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">OpenAI API</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Connected</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Whisper STT</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Ready</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">TTS Engine</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Ready</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">VoIP Service</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-yellow-600">Setup Required</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;