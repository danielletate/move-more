import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './SidebarButton.css';

const SidebarButton = (props) => {
  const location = useLocation();

  // Sets active state if the route from the sidebar button is equal to the current pathname
  const isActive = location.pathname === props.to;

  // Changes class of button if "isActive" state is true
  const btnClass = isActive ? 'btn-body active' : 'btn-body';
  return (
    <Link to={props.to}>
      <div className={btnClass}>
        {/* Style icon */}
        <IconContext.Provider
          value={{ size: '24px', className: 'button-icon' }}
        >
          {props.icon}
          <p className="btn-title">{props.title}</p>
        </IconContext.Provider>
      </div>
    </Link>
  );
};

export default SidebarButton;
