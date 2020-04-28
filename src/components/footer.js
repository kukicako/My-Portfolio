import React from 'react';
import facebook from '../images/facebook.png'
import git from '../images/git.png'
import twitter from '../images/twitter.png'
import gmail from '../images/gmail.png'


function footer(){
    return(
        <div className="footer">
            <div className="copyright">
                <p>© 2020 Muamer Kukic. All Rights Reserved.</p>

            </div>
            <div className="footer-links">
                <p className="footer-contact">Contact:</p>
                <div className="footer-images">
                    <a href="https://www.facebook.com/kukicako"><img className="facebook" src={facebook} alt="facebook"></img></a>
                </div>

                <div className="footer-images">
                    <a href="https://twitter.com/MuamerKukic"><img className="facebook" src={twitter} alt="twitter"></img></a>
                </div>

                <div  className="footer-images">
                    <a href="https://github.com/kukicako"><img className="facebook" src={git} alt="github"></img> </a>
                </div>

                <div id="contact-me" className="footer-images">
                <a href = "mailto:kukicako1@gmail.com?subject = Feedbackbody = Message"><img className="facebook" src={gmail} alt="gmail"></img></a>
                </div>
            </div>
            
        </div>
    )
}

export default footer