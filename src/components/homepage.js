import React from 'react';
import tree from '../images/tree.png'
import tree2 from '../images/tree2.png'

function Homepage(){
    return(
        <div className="homepage">
            <div className="opening">
                <div className="opening-image">
                    <div className="image-container">
                        <img className="tree2" src={tree2} alt="tree"></img>
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
                <div className="project">

                </div>
                <div className="project">

                </div>
                <div className="project">

                </div>

            </div>
            
            <div className="projects-container">
                <div className="project">
                    
                </div>
                <div className="project">

                </div>
                <div className="project">

                </div>

            </div>

        </div>
    )
}

export default Homepage