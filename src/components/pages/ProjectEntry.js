import React, { forwardRef, useEffect } from 'react';
import "../../App.css"
import Banner from "../Banner"
import "./ProjectEntry.css"
import { Button } from "../Button"

// Forward ref is used to propagate the element up to the parent.
// Currently used to scroll from navbar to this element.
const ProjectEntry = forwardRef((props, ref) => 
{
    // Called once on page load to always start at top of page
    useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

    // Obtain props variables
    const { bannerImg, projectPrimaryTitle, projectSecondaryTitle, projectSubtitle, contentCallback } = props;

    // Render project entry elements
    return (
        <div ref={ref}>
            {/* Project banner */}
            <Banner 
            bannerPrimaryTitle={projectPrimaryTitle}
            bannerSecondaryTitle={projectSecondaryTitle} 
            bannerSubTitle={projectSubtitle}
            imgSrc={bannerImg}
            />
            {/* Project content */}
            <div className="projectEntry">
                <div className="projectEntryContainer">
                    {contentCallback()}
                    <Button buttonStyle="btn--outline--dark" linkTo="/projects">
                        View More Projects
                    </Button>
                </div>
            </div>
        </div>
    );
})

export default ProjectEntry;