import React from 'react';
import code from '../images/code.jpg'

function Nav(){
    return(
        <div className="nav">
            <div className="nav-title">
                <h1>Muamer Kukic</h1>
                <p className="title-text">-Web Developer</p>
            </div>
            <div className="nav-links">
                <a href="https://github.com/kukicako" className="portfolio" >Github</a>
                <a className="portfolio">Portfolio</a>
                <a className="portfolio">About Me</a>
                <a className="portfolio">Hire Me</a>
                <img className="nav-image" src={code} alt="coder"></img>

                
                

            </div>
            
        </div>
    )
}

export default Nav