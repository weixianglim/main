import React from "react"
import "./Navbar.css"
import { Link } from 'react-router-dom'

// NavLink component navbar pages, mainly created as a separate component to handle scrolling
const NavLink = (props) =>
{
    const { linkTo, elemRef, closeMenu, classTag, children } = props;

    // Scrolls to the desired React component and closes navigation menu on mobile.
    return (
        <Link className={classTag} to={linkTo} onClick={() => { 
            elemRef && elemRef.current.scrollIntoView({behavior: "smooth", block: "start"}); 
            closeMenu && closeMenu(); 
        }}>
            {children}
        </Link>
    );
}

export default NavLink