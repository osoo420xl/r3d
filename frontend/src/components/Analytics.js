import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Settings, 
  Download,
  Calendar,
  Filter,
  Phone,
  Target,
  Clock,
  Users,
  Bot,
  LogOut,
  BarChart3,
  FileText,
  Activity,
  CheckCircle,
  AlertCircle,
  ArrowUp,
  ArrowDown
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

const Analytics = ({ user, onLogout }) => {
  const [timeRange, setTimeRange] = useState('7days');

  const metrics = [
    {
      title: 'Total Calls',
      value: '1,247',
      change: '+12%',
      trend: 'up',
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: 'Success Rate',
      value: '82%',
      change: '+5%',
      trend: 'up',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Avg Call Duration',
      value: '4:32',
      change: '-8%',
      trend: 'down',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Active Agents',
      value: '3',
      change: '0%',
      trend: 'neutral',
      icon: <Bot className="w-6 h-6" />
    }
  ];

  const agentPerformance = [
    {
      name: 'Sales Bot',
      calls: 523,
      success: 78,
      avgDuration: '4:45',
      trend: 'up'
    },
    {
      name: 'Support Bot',
      calls: 412,
      success: 85,
      avgDuration: '6:12',
      trend: 'up'
    },
    {
      name: 'Follow-up Bot',
      calls: 312,
      success: 92,
      avgDuration: '3:21',
      trend: 'down'
    }
  ];

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar user={user} onLogout={onLogout} currentPage="/analytics" />
      
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
              <p className="text-gray-600">Track performance and optimize your AI agents</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="24hours">Last 24 Hours</option>
                <option value="7days">Last 7 Days</option>
                <option value="30days">Last 30 Days</option>
                <option value="90days">Last 90 Days</option>
              </select>
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </header>
        
        <main className="p-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-600">
                    {metric.icon}
                  </div>
                  <div className={`flex items-center space-x-1 text-sm ${
                    metric.trend === 'up' ? 'text-green-600' :
                    metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                  }`}>
                    {metric.trend === 'up' && <ArrowUp className="w-4 h-4" />}
                    {metric.trend === 'down' && <ArrowDown className="w-4 h-4" />}
                    <span>{metric.change}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-sm text-gray-600">{metric.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Call Volume Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Call Volume</h3>
              <div className="h-64 flex items-end justify-between space-x-2">
                {[65, 78, 52, 89, 95, 73, 82].map((height, index) => (
                  <div
                    key={index}
                    className="bg-blue-500 rounded-t-lg flex-1 transition-all duration-300 hover:bg-blue-600"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            {/* Success Rate Chart */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Success Rate Trend</h3>
              <div className="h-64 flex items-end justify-between space-x-2">
                {[72, 75, 68, 81, 79, 85, 82].map((height, index) => (
                  <div
                    key={index}
                    className="bg-green-500 rounded-t-lg flex-1 transition-all duration-300 hover:bg-green-600"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>

          {/* Agent Performance */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Agent Performance</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Agent
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Calls
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Success Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avg Duration
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Trend
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {agentPerformance.map((agent, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <Bot className="w-4 h-4 text-blue-600" />
                          </div>
                          <div className="text-sm font-medium text-gray-900">{agent.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {agent.calls.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{agent.success}%</div>
                        <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="bg-green-600 h-2 rounded-full"
                            style={{ width: `${agent.success}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {agent.avgDuration}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className={`flex items-center ${
                          agent.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {agent.trend === 'up' ? 
                            <ArrowUp className="w-4 h-4" /> : 
                            <ArrowDown className="w-4 h-4" />
                          }
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Outcome Distribution */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Call Outcomes</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Meeting Scheduled</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">45%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Interested</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">23%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Callback Requested</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">18%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Not Interested</span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">14%</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Peak Hours</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">9:00 AM - 11:00 AM</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">2:00 PM - 4:00 PM</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">72%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">10:00 AM - 12:00 PM</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">68%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">3:00 PM - 5:00 PM</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">65%</span>
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

export default Analytics;