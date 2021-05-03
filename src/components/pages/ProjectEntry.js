import React, { forwardRef, useEffect, useRef } from 'react';
import "../../App.css"
import Banner from "../Banner"
import "./ProjectEntry.css"
import ProjectEntryContent from "./ProjectEntryContent"

// Forward ref is used to propagate the element up to the parent.
// Currently used to scroll from navbar to this element.
const ProjectEntry = forwardRef((props, ref) => 
{
    // Called once on page load to always start at top of page
    useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

    // Obtain props variables
    const { bannerImg, projectPrimaryTitle, projectSecondaryTitle, projectSubtitle, contentCallback, fadeScreen, btnText } = props;

    // Obtain reference for scroll target
    const projectEntryElem = useRef();

    // Render project entry elements
    return (
        <div ref={ref}>
            {/* Project banner */}
            <Banner 
            bannerPrimaryTitle={projectPrimaryTitle}
            bannerSecondaryTitle={projectSecondaryTitle} 
            bannerSubTitle={projectSubtitle}
            imgSrc={bannerImg}
            fadeScreen={fadeScreen}
            btnText={btnText}
            scrollTarget={projectEntryElem}
            />
            {/* Project content */}
            <ProjectEntryContent 
            ref={projectEntryElem} 
            contentCallback={contentCallback} />
        </div>
    );
})

export default ProjectEntry;