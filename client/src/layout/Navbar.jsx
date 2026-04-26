import React from 'react';
import { Search, User } from 'lucide-react';
import NotificationBell from '../components/NotificationBell.jsx';

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <header className="desktop-navbar">
        <div className="navbar-search-container">
          <Search size={18} className="navbar-search-icon" />
          <input 
            type="text" 
            placeholder="Query intelligence..." 
            className="navbar-search-input"
          />
        </div>
        
        <div className="navbar-actions">
          <NotificationBell />
          <button className="navbar-icon-btn profile-btn">
            <User size={20} />
          </button>
        </div>
      </header>

      {/* Mobile Navbar */}
      <header className="mobile-navbar">
        <div className="mobile-navbar-logo">
          <span>ADOPT AI</span>
        </div>
        {/* Hamburger menu would go here for mobile */}
      </header>
    </>
  );
};

export default Navbar;
