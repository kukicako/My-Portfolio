import React from 'react';
import about from "../images/about.png"
import html from '../images/html5.png'
import react from '../images/react.png'
import redux from '../images/redux.png'
import postgres from '../images/postgres.png'
import css3 from '../images/css3.png'
import sass from '../images/sass.png'
import less from '../images/less.png'
import node from '../images/node.png'
import js from '../images/js.png'
import chart from '../images/chart.svg'
import sq from '../images/sqlite.png'
import python from '../images/python.png'

function About(){
    return(
        <div className="about">
            <div className="about-contain">
                <div className="image-contain">
                    <div className="about-image">
                        <img src={about} alt="selfie" className="mee"/>
                    </div>
                </div>

                <div className="about-text-contain">
                    <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

            </div>
            <div className="about-tech">
                <div className="tech-title">
                    <p>Languages/Tech</p>

                </div>
                <div className="about-pic-contain">
                    <div className="about-pic-section">
                        <div className="tech">
                            <img src={html} alt="html5" className="about-img"></img>
                        </div>
                        <div className="tech">
                            <img src={react} alt="react" className="about-img"></img>
                        </div>
                        <div className="tech">
                            <img src={redux} alt="redux" className="about-img"></img>

                        </div>
                        <div className="tech">
                            <img src={postgres} alt="postgres" className="about-img"></img>

                        </div>
                        <div className="tech">
                            <img src={css3} alt="css3" className="about-img"></img>
                        </div>
                        <div className="tech">
                            <img src={sass} alt="sass" className="about-img"></img>
                        </div>
                        <div className="tech">
                            <img src={less} alt="less" className="about-img"></img>

                        </div>
                        <div className="tech">
                            <img src={node} alt="node" className="about-img"></img>

                        </div>
                        <div className="tech">
                            <img src={js} alt="javascript" className="about-img"></img>

                        </div>
                        <div className="tech">
                            <img src={chart} alt="chartJS" className="about-img"></img>

                        </div>
                        <div className="tech">
                             <img src={sq} alt="sqlite3" className="about-img"></img>

                        </div>
                        <div className="tech">
                            <img src={python} alt="python" className="about-img"></img>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default About