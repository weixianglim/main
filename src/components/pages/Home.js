import React, { forwardRef, useRef } from 'react';
import "../../App.css"
import Banner from "../Banner"
import About from "./About"

// Importing assets manually cause webpack..
import HomePageVideo from "../../videos/MoonSea.mov"

// Forward ref is used to propagate the element up to the parent.
// Currently used to scroll from navbar to this element.
const Home = forwardRef((props, ref) => 
{ 
    // Reference elements for target scrolling
    const aboutRef = useRef();

    return (
        <div ref={ref}>
            <Banner scrollTarget={aboutRef} btnText="About Me"
            bannerPrimaryTitle="Hi, my name is" 
            bannerSecondaryTitle="Wei Xiang" 
            bannerSubTitle="I make games and applications."
            videoSrc={HomePageVideo}
            />
            <About ref={aboutRef} homeRef={ref} elemRef={aboutRef}/>
        </div>
    );
})

export default Home;