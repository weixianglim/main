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
            <div className="banner-container">
                {/* Display background image or video, if any. */}
                { imgSrc && <img src={sourceLoaded || Black} alt=""/> }
                { videoSrc && <video src={videoSrc} autoPlay loop muted /> }

                {/* Display fade screen if desired */}
                { fadeScreen && <div className="fadeScreen"></div>}

                {/* Seconday main title is optional */}
                { bannerPrimaryTitle && <h1>{bannerPrimaryTitle}</h1> }
                { bannerSecondaryTitle && <h2>{bannerSecondaryTitle}</h2> }
                { bannerSubTitle && <p>{bannerSubTitle}</p> }

                {/* Banner button, will scroll to element on click */}
                {btnText &&
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
