import React, { forwardRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from "./Button"
import "./Footer.css"
import NavLink from "./NavLink"

// Importing icons..
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-regular';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

// Forward ref is used to propagate the element up to the parent.
// Currently used to scroll from navbar to this element.
const Footer = forwardRef((props, ref) => 
{
    // Get current address with React Router
    const currLocation = useLocation();

    return (
        <div ref={ref} className="footer-container">

            {/* Email segment */}
            <section className="footer-email">
                <p className="footer-email-heading">
                    I'd love to be in touch with<br/>
                    fellow passionate developers!
                </p>
                <p className="footer-email-text">
                    If you'd like to work together on an app / game, or simply
                    wish to have a quick chat, feel free to drop a message below.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="name" name="name" placeholder="Name" className="footer-input" /><br/>
                        <input type="email" name="email" placeholder="Email address" className="footer-input" /><br/>
                        <textarea type="message" name="message" placeholder="" className="footer-input-message" /><br/>
                        <Button buttonStyle="btn--outline">Send</Button>
                    </form>
                </div>
            </section>

            {/* Contact info segment */}
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <a className="social-icon-link" href="https://www.linkedin.com/in/weixiang-lim/" target="_blank" rel="noreferrer">
                            {/* <i className="fab fa-linkedin"></i> */}
                            <FontAwesomeIcon icon={faLinkedin}/>
                        </a>
                        <p>/in/weixiang-lim</p>
                    </div>
                    <div className="footer-link-items-nohover">
                        <div className="social-icon-link" aria-label="gmail">
                            {/* <i className="far fa-envelope"></i> */}
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                        <p>wxlimweixiang@gmail.com</p>
                    </div>
                    <div className="footer-link-items-nohover">
                        <div className="social-icon-link" aria-label="phone">
                            {/* <i className="fas fa-phone-alt"></i> */}
                            <FontAwesomeIcon icon={faPhone}/>
                        </div>
                        <p>9677 5978</p>
                    </div>
                </div>
            </div>

            {/* Sign-off segment */}
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <NavLink classTag="social-logo" linkTo={currLocation.pathname} elemRef={props.navElem}>
                            WX 
                            {/* {" "}<i class="fab fa-react"></i> */}
                        </NavLink>
                    </div>
                    <small className="website-signoff">Website made by Wei Xiang with React™</small><br/><br/>
                    <small className="website-signoff-small">
                        © All media, including videos, logos, and images are used for 
                        non-commercial identification only, and belong to their respective owners.</small>
                </div>
            </section>

        </div>
    );
})

export default Footer
