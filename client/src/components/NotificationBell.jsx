import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Bell, Check, Filter, AlertTriangle, Crosshair, TrendingDown, RefreshCw } from 'lucide-react';
import io from 'socket.io-client';
import toast from 'react-hot-toast';
import { fetchNotifications, addNotification, markAllNotificationsRead, markNotificationRead } from '../features/notification/notificationSlice';
import './notification.css'; // We'll add styles to index.css or a new file later

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const dropdownRef = useRef(null);
  
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.notification);
  const { user } = useSelector((state) => state.auth);

  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    if (user) {
      dispatch(fetchNotifications());
      
      const socketUrl = import.meta.env.VITE_SOCKET_URL || (import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace('/api', '') : 'http://localhost:5000');
      const socket = io(socketUrl);
      
      socket.emit('join', user._id);
      
      socket.on('newNotification', (notification) => {
        dispatch(addNotification(notification));
        toast(notification.title, {
          icon: '🔔',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        });
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [user, dispatch]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMarkAllRead = () => {
    dispatch(markAllNotificationsRead());
  };

  const handleMarkRead = (id) => {
    dispatch(markNotificationRead(id));
  };

  const getIcon = (type) => {
    switch (type) {
      case 'critical': return <AlertTriangle size={18} className="text-red" />;
      case 'optimization': return <Crosshair size={18} className="text-green" />;
      case 'fatigue': return <TrendingDown size={18} className="text-yellow" />;
      case 'system': return <RefreshCw size={18} className="text-gray" />;
      default: return <Bell size={18} />;
    }
  };

  const getCategoryCounts = () => {
    return {
      all: notifications.length,
      critical: notifications.filter(n => n.type === 'critical').length,
      optimization: notifications.filter(n => n.type === 'optimization').length,
      system: notifications.filter(n => n.type === 'system').length,
    };
  };

  const counts = getCategoryCounts();

  const filteredNotifications = filter === 'All' 
    ? notifications 
    : notifications.filter(n => n.type.toLowerCase() === filter.toLowerCase() || (filter === 'Optimizations' && n.type === 'optimization'));

  // Mock initial data if none exists just to show the UI
  const displayNotifications = filteredNotifications.length > 0 ? filteredNotifications : [
    {
      _id: '1',
      title: 'Budget Overrun Detected',
      message: 'Campaign Q3 Retargeting EMEA is projecting to exceed its daily cap by 24% within the next 4 hours due to an unexpected surge in CPC.',
      type: 'critical',
      read: false,
      createdAt: new Date().toISOString(),
      action1: 'Adjust Budget Cap',
      action2: 'Pause Campaign'
    },
    {
      _id: '2',
      title: 'New Audience Segment Identified',
      message: 'Our model has identified a highly engaged cluster within Lookalike Audience V2 showing a 35% higher predicted conversion rate. Separating this segment could improve ROAS.',
      type: 'optimization',
      read: false,
      createdAt: new Date(Date.now() - 15 * 60000).toISOString(),
      metadata: { roasShift: '+1.2x', size: '~45,000' },
      action1: 'Apply Optimization',
      action2: 'View Details'
    },
    {
      _id: '3',
      title: 'Creative Fatigue Warning',
      message: 'Ad variant Hero_Video_V4 is experiencing a 15% drop in CTR over the last 48 hours. Consider rotating creatives.',
      type: 'fatigue',
      read: true,
      createdAt: new Date(Date.now() - 2 * 3600000).toISOString(),
      link: 'Go to Creative Library'
    },
    {
      _id: '4',
      title: 'Data Sync Complete',
      message: 'Weekly CRM data sync finished successfully. 12,450 new user records processed and appended to Audience Models.',
      type: 'system',
      read: true,
      createdAt: new Date(Date.now() - 24 * 3600000).toISOString()
    }
  ];

  return (
    <div className="notification-bell-wrapper" ref={dropdownRef}>
      <button 
        className="navbar-icon-btn notification-btn" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bell size={20} />
        {unreadCount > 0 && <span className="notification-dot">{unreadCount}</span>}
      </button>

      {isOpen && (
        <div className="notification-overlay">
          <div className="notif-header">
            <div>
              <h2 className="notif-title">Notifications Center</h2>
              <p className="notif-subtitle">Monitor system alerts, review AI-driven optimization suggestions, and track critical budget overruns across all active campaigns.</p>
            </div>
            <div className="notif-actions">
              <button className="mark-read-btn" onClick={handleMarkAllRead}>
                <Check size={14} /> Mark all as read
              </button>
              <button className="filter-btn">
                <Filter size={14} /> Filter
              </button>
            </div>
          </div>

          <div className="notif-filters">
            <button className={`filter-chip ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter('All')}>
              All Updates ({counts.all})
            </button>
            <button className={`filter-chip ${filter === 'Critical' ? 'active' : ''}`} onClick={() => setFilter('Critical')}>
              Critical ({counts.critical})
            </button>
            <button className={`filter-chip ${filter === 'Optimizations' ? 'active' : ''}`} onClick={() => setFilter('Optimizations')}>
              <span className="dot green-dot"></span> Optimizations ({counts.optimization})
            </button>
            <button className={`filter-chip ${filter === 'System' ? 'active' : ''}`} onClick={() => setFilter('System')}>
              System ({counts.system})
            </button>
          </div>

          <div className="notif-list">
            {displayNotifications.map((notif) => (
              <div key={notif._id} className={`notif-card ${notif.type} ${!notif.read ? 'unread' : ''}`} onClick={() => handleMarkRead(notif._id)}>
                <div className="notif-icon-wrapper">
                  {getIcon(notif.type)}
                </div>
                <div className="notif-content">
                  <div className="notif-top">
                    <h3 className="notif-card-title">
                      {notif.title}
                      {notif.type === 'optimization' && <span className="badge-ai">AI INSIGHT</span>}
                    </h3>
                    <span className="notif-time">
                      {new Date(notif.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                  <p className="notif-message">{notif.message}</p>
                  
                  {notif.metadata && (
                    <div className="notif-metrics">
                      <div className="metric">
                        <span className="metric-label">Predicted ROAS Shift</span>
                        <span className="metric-value text-green">{notif.metadata.roasShift}</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Audience Size</span>
                        <span className="metric-value">{notif.metadata.size}</span>
                      </div>
                    </div>
                  )}

                  {notif.action1 && (
                    <div className="notif-card-actions">
                      <button className={`btn-${notif.type === 'critical' ? 'danger' : 'primary'}`}>{notif.action1}</button>
                      <button className="btn-secondary">{notif.action2}</button>
                    </div>
                  )}

                  {notif.link && (
                    <a href="#" className="notif-link">{notif.link} &rarr;</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
