import React from 'react';

// The Figma design integrates the header directly into the dashboard page layout.
// This Navbar is kept as a minimal mobile toggle or placeholder if needed later.
const Navbar = () => {
  return (
    <header className="mobile-navbar">
      <div className="mobile-navbar-logo">
        <span>ADOPT AI</span>
      </div>
      {/* Hamburger menu would go here for mobile */}
    </header>
  );
};

export default Navbar;
