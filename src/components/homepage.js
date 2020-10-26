import React from 'react';
// import tree from '../images/tree.png'
// import tree2 from '../images/tree2.png'
import citrics from '../images/citrics.png'
import pathways from '../images/pathways.png'
import swole from '../images/swole.png'
import soup from '../images/soup.png'
import mouse from '../images/mouse.png'
import down from '../images/down.png'
import kanye from '../images/kanye.jpg'

function Homepage(){
    return(
        <div className="homepage">
            <div className="opening">
                <div className="opening-text">
                    <p>Software Engineer with a passion for JavaScript, React, CSS, Less, and Node.</p>
                </div>
                <a href="#homepage-anchor" className="opening-button">
                    <p className="showcase">Showcase</p>
                    <img src={down} alt="down arrow" className="down-arrow"></img>
                </a>
            </div>
            <div id="homepage-anchor" />
            <div className="projects-container">
                <div className="project1">
                   <a className="link" href="https://gyazo.com/602c913629aa51734ad41ac6f82e66eb"> <img className="citrics" src={citrics } alt="website1"></img></a>
                </div>
                <div className="project6">
                    <a className="link" href="https://kanye-motivate.now.sh/"><img className="kanye" src={kanye} alt="Kanye West"></img></a>
                </div>
                <div className="project3">
                   <a  className="link" href="https://counter-tony.now.sh/"> <p className="teacher">CSGO-Teacher</p></a>
                    
                </div>

            </div>

            
            <div className="projects-container">
                <div className="project2">
                    <a className="link" href="https://pathways-fe-omega.now.sh/game"><img className="pathways" src={pathways} alt="Pathways To Destiny"></img></a>
                </div>
                <div className="project4">
                    <a className="link" href="https://snake-zeta.vercel.app/"><img className="swole" src={swole} alt="swole" /></a>
                </div>
                <div className="project5">
                     <a  classname="link" href="https://serve-soup.netlify.app/"><img className="soup" src={soup} alt="ill serve soup" /></a>
                </div>
                

            </div>

            <div className="conclusion">
                <p className="conclusion-title">What Do I Bring?</p>
                <p className="conclusion-text"> Front-End/Back-End/Data Management</p>
                <p className="conclusion-text"> Aiding in integrations, customization and implementation of third-party software</p>
                <p className="conclusion-text"> Develop and implement frontend web code and design standards for writing clean, semantic code</p>
                <p className="conclusion-text"> Experience working within a cross-functional team of Front-End and Back-End engineers, Data Scientists and UI/UX</p>
            
                
            </div>

        </div>
    )
}

export default Homepage