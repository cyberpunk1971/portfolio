import React from 'react';
import './ToggleButton.css';
export default function ToggleButton(props) {
  return (
    <button className="toggle-btn" onClick={props.click}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </button>
  )
}
