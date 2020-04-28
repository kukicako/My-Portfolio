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
                    <p className="about-text">I am a Full Stack Web Developer located in Las Vegas, Nevada. I am passionate and detail oriented especially in the creation of new projects or ideas. On top of that I am focused on making an impact through the development of creative technologies. I bring Strong collaborative skills, a proven history of website and application development, strong analytical skills with focus on accurate and prompt results, and a high personal level of integrity with a dynamic balance of people skills.</p>
                    <p className="about-text">Outside of coding I enjoy a wide array of activities such as: Listening to podcasts, following and playing basketball, playing video games, listening to music, and biking. I am a huge Lakers fan and basketball nerd so feel free to messsage me on social media and trash talk my favorite teams. </p>
                </div>

            </div>
            <div  id="homepage-anchor"></div>
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