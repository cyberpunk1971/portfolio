import React from 'react';

import './Portfolio.css';

export default function Portfolio() {
  return (
    <React.Fragment>
    
      <div className="frame">

        <div className="container">
          <div className="image">
            <a target="_blank" rel="noopener noreferrer" href="https://cyberpunk1971.github.io/Big-Eatz/">
              <img src={process.env.PUBLIC_URL + "./images/image5.png"} alt="big eats website" width="600" height="400" /></a>
            <div className="description">Patient Monitor. A web application built with the MERN stack of technologies.</div>
          </div>
        </div>

        <div className="container">
          <div className="image">
            <a target="_blank" rel="noopener noreferrer" href="https://cyberpunk1971.github.io/Big-Eatz/">
              <img src={process.env.PUBLIC_URL + "./images/image1.png"} alt="big eats website" width="600" height="400" /></a>
            <div className="description">A recipe search application using HTML, jQuery, and the Edemame API</div>
          </div>
        </div>

        <div className="container">
          <div className="image">
            <a target="_blank" rel="noopener noreferrer" href="https://cyberpunk1971.github.io/limpiadores-perea/">
              <img src={process.env.PUBLIC_URL + "./images/image4.png"} alt="limpiadores perea sitio web" width="600" height="400" /></a>
            <div className="description">The website for Limpiadores Perea</div>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}
