import React, { forwardRef } from 'react';
import "../../App.css"
import "./ProjectEntry.css"
import { Button } from "../Button"

// Import icons
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

// Project entry content is created as a separate
// component to set elemRef scroll target.
const ProjectEntryContent = forwardRef((props, ref) => 
{
    // Obtain props variables
    const { contentCallback, playBtnTxt, playLink } = props;

    // Render project entry elements
    return (
        <div ref={ref} className="projectEntry">
            <div className="projectEntryContainer">
                {contentCallback()}
                <div className="projectEntryEndButtons">
                    {playLink &&
                    <Button buttonStyle="btn--outline--dark" linkTo={playLink} isExternal={true}>
                        <FontAwesomeIcon icon={faPlayCircle} />{" "}
                        {playBtnTxt ? playBtnTxt : "Check It Out"}
                    </Button>}
                    <Button buttonStyle="btn--outline--dark" linkTo="/projects">
                        View More Projects
                    </Button>
                </div>
            </div>
        </div>
    );
})

export default ProjectEntryContent;