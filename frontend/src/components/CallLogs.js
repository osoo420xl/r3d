import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Settings, 
  Play, 
  Pause, 
  Download,
  Filter,
  Search,
  Calendar,
  Clock,
  User,
  CheckCircle,
  XCircle,
  AlertCircle,
  TrendingUp,
  LogOut,
  BarChart3,
  FileText,
  Bot,
  Volume2,
  MapPin,
  PhoneCall,
  Users,
  Target,
  Activity
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

const CallLogs = ({ user, onLogout }) => {
  const [calls] = useState([
    {
      id: 1,
      contact: 'John Smith',
      phone: '+1 (555) 123-4567',
      agent: 'Sales Bot',
      status: 'completed',
      outcome: 'meeting_scheduled',
      duration: '4:32',
      date: '2025-01-15',
      time: '14:30',
      location: 'New York, NY',
      notes: 'Interested in enterprise plan, scheduled demo for next week'
    },
    {
      id: 2,
      contact: 'Sarah Johnson',
      phone: '+1 (555) 987-6543',
      agent: 'Sales Bot',
      status: 'completed',
      outcome: 'not_interested',
      duration: '2:15',
      date: '2025-01-15',
      time: '14:15',
      location: 'Los Angeles, CA',
      notes: 'Currently happy with existing solution'
    },
    {
      id: 3,
      contact: 'Mike Wilson',
      phone: '+1 (555) 555-0123',
      agent: 'Support Bot',
      status: 'completed',
      outcome: 'resolved',
      duration: '6:45',
      date: '2025-01-15',
      time: '13:45',
      location: 'Chicago, IL',
      notes: 'Billing question resolved, upgraded to premium plan'
    },
    {
      id: 4,
      contact: 'Lisa Davis',
      phone: '+1 (555) 111-2222',
      agent: 'Sales Bot',
      status: 'no_answer',
      outcome: 'no_answer',
      duration: '0:30',
      date: '2025-01-15',
      time: '13:30',
      location: 'Miami, FL',
      notes: 'Will retry tomorrow'
    },
    {
      id: 5,
      contact: 'Robert Brown',
      phone: '+1 (555) 333-4444',
      agent: 'Follow-up Bot',
      status: 'completed',
      outcome: 'callback_requested',
      duration: '3:20',
      date: '2025-01-15',
      time: '13:00',
      location: 'Seattle, WA',
      notes: 'Requested callback from human agent'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'no_answer':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getOutcomeIcon = (outcome) => {
    switch (outcome) {
      case 'meeting_scheduled':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'not_interested':
        return <XCircle className="w-4 h-4 text-red-600" />;
      case 'callback_requested':
        return <PhoneCall className="w-4 h-4 text-blue-600" />;
      case 'resolved':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'no_answer':
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-600" />;
    }
  };

  const filteredCalls = calls.filter(call => {
    const matchesSearch = call.contact.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         call.phone.includes(searchQuery) ||
                         call.agent.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = filter === 'all' || call.status === filter;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar user={user} onLogout={onLogout} currentPage="/call-logs" />
      
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Call Logs</h1>
              <p className="text-gray-600">View and manage all your AI agent calls</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          {/* Filters */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search calls..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Calls</option>
                <option value="completed">Completed</option>
                <option value="no_answer">No Answer</option>
                <option value="failed">Failed</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <input
                type="date"
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Calls</p>
                  <p className="text-2xl font-bold text-gray-900">{calls.length}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completed</p>
                  <p className="text-2xl font-bold text-green-600">
                    {calls.filter(c => c.status === 'completed').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Success Rate</p>
                  <p className="text-2xl font-bold text-purple-600">78%</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Avg Duration</p>
                  <p className="text-2xl font-bold text-orange-600">3:24</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Call Logs Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Agent
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Outcome
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCalls.map((call) => (
                    <motion.tr
                      key={call.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{call.contact}</div>
                          <div className="text-sm text-gray-500">{call.phone}</div>
                          <div className="text-xs text-gray-400 flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {call.location}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <Bot className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-sm font-medium text-gray-900">{call.agent}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(call.status)}`}>
                          {call.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {getOutcomeIcon(call.outcome)}
                          <span className="ml-2 text-sm text-gray-900">
                            {call.outcome.replace('_', ' ')}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {call.duration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div>{call.date}</div>
                        <div className="text-gray-500">{call.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-700">
                            <Play className="w-4 h-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-700">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-700">
              Showing {filteredCalls.length} of {calls.length} calls
            </div>
            <div className="flex items-center space-x-2">
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 text-sm bg-blue-600 text-white rounded-lg">
                1
              </button>
              <button className="px-3 py-1 text-sm border border-gray-300 rounded-lg hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CallLogs;