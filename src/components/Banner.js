import React from 'react'
import "../App.css"
import "./Banner.css"
import { Button } from "./Button"

const Banner = (props) => 
{
    const { videoSrc, imgSrc, bannerPrimaryTitle, bannerSecondaryTitle, bannerSubTitle, scrollTarget, btnText } = props;

    return (
        <div className="banner-container">

            {/* Display background image or video, if any. */}
            { imgSrc && <img src={imgSrc} alt=""/> }
            { videoSrc && <video src={videoSrc} autoPlay loop muted /> }

            {/* Seconday main title is optional */}
            {bannerPrimaryTitle && <h1>{bannerPrimaryTitle}</h1>}
            {bannerSecondaryTitle && <h2>{bannerSecondaryTitle}</h2>}
            {bannerSubTitle && <p>{bannerSubTitle}</p>}

            {/* Banner button, will scroll to element on click */}
            {btnText &&
            <div className="banner-btns">
                <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large" elemRef={scrollTarget}>
                    {btnText}
                </Button>
            </div>}
            
        </div>
    );
}

export default Banner
