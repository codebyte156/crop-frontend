import React, { useState } from 'react';
import './index.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="nav-bar">
      <div className="app-name">
        <NavLink exact activeClassName="active" className="app-link" to="/crops">
          AppName
        </NavLink>
      </div>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink exact activeClassName="active" to="/crops/contact">
          Contact Us
        </NavLink>
        <NavLink exact activeClassName="active" to="/crop">
          Crop
        </NavLink>
        <NavLink exact activeClassName="active" className="fertilizer-link" to="/fertilizer">
          Fertilizer
        </NavLink>
        <NavLink exact activeClassName="active" className="disease-link" to="/disease">
          Disease
        </NavLink>

        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>

      <FontAwesomeIcon 
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className='hamburger-icon' />
    </div>
  );
};

export default Sidebar;
