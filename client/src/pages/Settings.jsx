import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Bell, Lock } from 'lucide-react';
import { useSelector } from 'react-redux';
import SEO from '../components/SEO';
import './settings.css';

const Settings = () => {
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="settings-page">
      <SEO 
        title="Settings" 
        description="Manage your AdOpt AI account preferences and configurations."
        url="/settings"
      />
      <div className="page-header">
        <div>
          <h1 className="page-title flex items-center gap-2">
            <SettingsIcon size={24} style={{ marginRight: '8px' }} />
            Account Settings
          </h1>
          <p className="page-subtitle">Manage your account preferences, notifications, and security.</p>
        </div>
      </div>

      <div className="settings-grid">
        <div className="settings-sidebar">
          <button 
            className={`settings-nav-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <User size={18} /> Profile
          </button>
          <button 
            className={`settings-nav-btn ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            <Bell size={18} /> Notifications
          </button>
          <button 
            className={`settings-nav-btn ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <Lock size={18} /> Security
          </button>
        </div>

        <div className="settings-content-card">
          <h2 className="settings-section-title">Profile Information</h2>
          
          <div className="settings-form">
            <div className="settings-form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                className="settings-input"
                defaultValue={user?.name || "Demo User"}
              />
            </div>
            
            <div className="settings-form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                className="settings-input"
                defaultValue={user?.email || "user@adopt-ai.com"}
                disabled
              />
            </div>

            <div className="settings-actions">
              <button className="btn-primary" style={{ width: 'auto', marginTop: 0 }}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
