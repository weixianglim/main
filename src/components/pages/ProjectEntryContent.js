import React, { forwardRef } from 'react';
import "../../App.css"
import "./ProjectEntry.css"
import { Button } from "../Button"

// Project entry content is created as a separate
// component to set elemRef scroll target.
const ProjectEntryContent = forwardRef((props, ref) => 
{
    // Obtain props variables
    const { contentCallback } = props;

    // Render project entry elements
    return (
        <div ref={ref} className="projectEntry">
            <div className="projectEntryContainer">
                {contentCallback()}
                <Button buttonStyle="btn--outline--dark" linkTo="/projects">
                    View More Projects
                </Button>
            </div>
        </div>
    );
})

export default ProjectEntryContent;