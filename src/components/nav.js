import React from 'react';
// import code from '../images/code.jpg'

import {Link} from 'react-router-dom';
function Nav(){
    return(
        <div className="nav">
            <Link to="/" className="nav-title">
                <h1>Muamer Kukic</h1>
                <p className="title-text">-Web Developer</p>
            </Link>
            <div className="nav-links">
                <a href="https://github.com/kukicako" className="portfolio" >Github</a>
                <a href="#homepage-anchor" className="portfolio">Portfolio</a>
                <Link to="/about" className="portfolio">About Me</Link>
                <a href="#contact-me"className="portfolio">Contact</a>
                {/* <img className="nav-image" src={code} alt="coder"></img> */}

                
                

            </div>
            
        </div>
    )
}

export default Nav