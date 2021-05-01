import React from 'react';
import "./Button.css"
import { useLocation } from "react-router-dom"
import NavLink from "./NavLink"

// Button styles and sizes
const STYLES = ['btn--primary', 'btn--outline', 'btn--outline--dark'];
const SIZES = ['btn--medium', 'btn--large'];

// Relevant prop variables are included under {}
export const Button = ({children, type, onClick, buttonStyle, buttonSize, linkTo, isExternal, elemRef}) => 
{
    // If the provided style/size is not in the arr, use first elem by default
    const curButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const curButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    // Default route of button will be current page
    const curLocation = useLocation();
    const curLinkTo = linkTo ? linkTo : curLocation.pathname;

    // External link
    if (isExternal)
        return (
            <a href={`${curLinkTo}`} className="btn-mobile" target="_blank">
                <button
                className={`btn ${curButtonStyle} ${curButtonSize}`}
                onClick={onClick}
                type={type}>
                    {children}
                </button>
            </a>
        );

    // Router link
    return (
        <NavLink linkTo={`${curLinkTo}`} classTag="btn-mobile" elemRef={elemRef}>
            <button
            className={`btn ${curButtonStyle} ${curButtonSize}`}
            onClick={onClick}
            type={type}>
                {children}
            </button>
        </NavLink>
    );
}