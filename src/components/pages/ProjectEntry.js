import React, { useState, forwardRef, useRef, useEffect } from 'react';
import "../../App.css"
import Banner from "../Banner"

// Import images
import ProjectImg from "../../images/Projects/MindOverMatter/MindOverMatter.png"

// Forward ref is used to propagate the element up to the parent.
// Currently used to scroll from navbar to this element.
const ProjectEntry = forwardRef((props, ref) => 
{
    // Called once on page load to always start at top of page
    useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);
    
    return (
        <div ref={ref}>
            <Banner 
            bannerPrimaryTitle="Project Title" 
            bannerSubTitle="Project Subtitle"
            imgSrc={ProjectImg}
            />
        </div>
    );
})

export default ProjectEntry;