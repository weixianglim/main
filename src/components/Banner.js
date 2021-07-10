import React, { Suspense, useEffect, useState } from 'react'
import "../App.css"
import "./Banner.css"
import { Button } from "./Button"
import Loading from "./Loading"
import Black from "../images/black.png"

const Banner = (props) => 
{
    const { videoSrc, imgSrc, bannerPrimaryTitle, bannerSecondaryTitle, bannerSubTitle, scrollTarget, btnText, fadeScreen } = props;

    // Lazy load banner image
    const [sourceLoaded, setSourceLoaded] = useState(null);
    useEffect(() => {
        const img = new Image()
        img.src = imgSrc
        img.onload = () => setSourceLoaded(imgSrc)
    }, [imgSrc]);

    return (
        <Suspense fallback={<Loading />}>
            <div className={sourceLoaded ? "banner-container" : "banner-container-black"}>
                {/* Display background image or video, if any. */}
                { (sourceLoaded && <img src={sourceLoaded} alt=""/>) || <Loading /> }
                { (sourceLoaded && <video src={videoSrc} autoPlay loop muted />) || <Loading /> }

                {/* Display fade screen if desired */}
                { fadeScreen && <div className="fadeScreen"></div>}

                {/* Seconday main title is optional */}
                { sourceLoaded && bannerPrimaryTitle && <h1>{bannerPrimaryTitle}</h1> }
                { sourceLoaded && bannerSecondaryTitle && <h2>{bannerSecondaryTitle}</h2> }
                { sourceLoaded && bannerSubTitle && <p>{bannerSubTitle}</p> }

                {/* Banner button, will scroll to element on click */}
                {sourceLoaded && btnText &&
                <div className="banner-btns">
                    <Button className="btn" buttonStyle="btn--outline" buttonSize="btn--large" elemRef={scrollTarget}>
                        {btnText}
                    </Button>
                </div>}
            </div>
        </Suspense>
    );
}

export default Banner
