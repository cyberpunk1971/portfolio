import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidedrawer.css';

export default function Sidedrawer(props) {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
      <li className="Contact_li" onClick={props.clicked}>
              <FontAwesomeIcon icon="envelope"  /></li>
        <li><Link to="/" className="side-drawer-link">HOME</Link></li>
        <li><Link to="/About" className="side-drawer-link">ABOUT</Link></li>
        <li className="side-drawer-link"><a href="https://github.com/cyberpunk1971" target="_blank" rel="noopener noreferrer">Github</a></li>
      </ul>
    </nav>
  )
}
