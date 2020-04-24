import React from 'react';
import tree from '../images/tree.png'
// import tree2 from '../images/tree2.png'
import citrics from '../images/citrics.png'
import pathways from '../images/pathways.png'
import swole from '../images/swole.png'
import soup from '../images/soup.png'
import mouse from '../images/mouse.png'
function Homepage(){
    return(
        <div className="homepage">
            <div className="opening">
                <div className="opening-image">
                    <div className="image-container">
                        {/* <img className="tree2" src={tree2} alt="tree"></img> */}
                        <img className="tree" src={tree} alt="tree"></img>
                    </div>
                </div>
                <div className="opening-text">
                    <p>Software Engineer with a passion for JavaScript, React, CSS, Less, and Node.</p>
                </div>
                <div className="opening-button">
                    <button className="but-on">My Projects</button>
                </div>
            </div>

            <div className="projects-container">
                <div className="project1">
                   <a className="link" href="https://v1.citrics.io/"> <img className="citrics" src={citrics } alt="website1"></img></a>
                </div>
                <div className="project2">
                    <img className="pathways" src={pathways} alt="Pathways To Destiny"></img>
                </div>
                <div className="project3">
                    <p className="teacher">CSGO-Teacher</p>
                    
                </div>

            </div>
            
            <div className="projects-container">
                <div className="project4">
                    <img className="swole" src={swole} alt="swole" />
                </div>
                <div className="project5">
                     <img className="soup" src={soup} alt="ill serve soup" />
                </div>
                <div className="project6">
                    <div className="planner">
                        <img className="mouse" src={mouse} alt="mouse"></img> 
                        <p className="plan">One Click</p>
                        <p className="plan1">Planning</p>   
                    </div>
                    
                </div>

            </div>

            <div className="conclusion">
                <p className="conclusion-title">What Do I Bring?</p>
                <p className="conclusion-text"> a little bit of this</p>
                <p className="conclusion-text"> and a little bit of that</p>
                <p className="conclusion-text"> and a little bit of that</p>
                <p className="conclusion-text"> and a little bit of that</p>
                
                
            </div>

        </div>
    )
}

export default Homepage