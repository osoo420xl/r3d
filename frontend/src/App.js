import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';
import AgentBuilder from './components/AgentBuilder';
import ScriptBuilder from './components/ScriptBuilder';
import CallLogs from './components/CallLogs';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import Tutorial from './components/Tutorial';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const savedUser = localStorage.getItem('blandUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('blandUser', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('blandUser');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={!user ? <LoginPage onLogin={login} /> : <Navigate to="/dashboard" />} />
          <Route path="/signup" element={!user ? <SignupPage onSignup={login} /> : <Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={user ? <Dashboard user={user} onLogout={logout} /> : <Navigate to="/login" />} />
          <Route path="/agent-builder" element={user ? <AgentBuilder user={user} onLogout={logout} /> : <Navigate to="/login" />} />
          <Route path="/script-builder" element={user ? <ScriptBuilder user={user} onLogout={logout} /> : <Navigate to="/login" />} />
          <Route path="/call-logs" element={user ? <CallLogs user={user} onLogout={logout} /> : <Navigate to="/login" />} />
          <Route path="/analytics" element={user ? <Analytics user={user} onLogout={logout} /> : <Navigate to="/login" />} />
          <Route path="/settings" element={user ? <Settings user={user} onLogout={logout} /> : <Navigate to="/login" />} />
          <Route path="/tutorial" element={user ? <Tutorial user={user} onLogout={logout} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;