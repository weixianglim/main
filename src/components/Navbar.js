import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from "./Button"
import "./Navbar.css"
import NavLink from "./NavLink"

// Importing icons..
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// Importing assets...
import ResumePdf from "../WeiXiangLim_Resume.pdf"

const Navbar = (props) => 
{
    // Mobile navigation menu state variables 
    const [navMenuActive, setNavMenuActive] = useState(false);
    const toggleNavMenu = () => setNavMenuActive(!navMenuActive);
    const closeNavMenu = () => setNavMenuActive(false);

    // Resume button display
    const [buttonActive, setButtonActive] = useState(true);
    const buttonOnWndResize = () => setButtonActive(window.innerWidth > 960);
    window.addEventListener("resize", buttonOnWndResize);

    // Get current address with React Router
    const currLocation = useLocation();

    // called once on page load, used to handle displaying of button on page refresh
    useEffect(() => buttonOnWndResize(), []); 

    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="navbar-container">

                    {/* Home route and icon */}
                    <NavLink classTag="navbar-logo" linkTo="/home" elemRef={props.navElem} closeMenu={closeNavMenu}>
                        WX
                    </NavLink>

                    {/* Menu toggling button for mobile */}
                    <div className="nav-menu-icon" onClick={toggleNavMenu}>
                        {/* <i className={navMenuActive ? "fas fa-times" : "fas fa-bars"}/> */}
                        <FontAwesomeIcon icon={navMenuActive ? faTimes : faBars}/>
                    </div>

                    {/* List of navigation routes */}
                    <ul className={navMenuActive ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink classTag="nav-links" linkTo="/home" elemRef={props.navElem} closeMenu={closeNavMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink classTag="nav-links" linkTo="/projects" elemRef={props.navElem} closeMenu={closeNavMenu}>
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink classTag="nav-links" linkTo={currLocation.pathname} elemRef={props.footerElem} closeMenu={closeNavMenu}>
                                Contact
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <a href="/WeiXiangLim_Resume.pdf" className="nav-links-mobile" onClick={closeNavMenu} target="_blank">
                                Resume
                            </a>
                        </li>
                    </ul>

                    {/* Button only active in non-mobile mode */}
                    {buttonActive && <Button buttonStyle="btn--outline" linkTo={ResumePdf} isExternal={true}>Resume</Button>}

                </div> {/* End navbar-container */}
            </nav> {/* End navbar */}
        </React.Fragment>
    );
}

export default Navbar
