import React, { forwardRef } from 'react';
import "../../../App.css"
import ProjectEntry from "../ProjectEntry"

// Import images
import BannerImg from "../../../images/Projects/Trapped/Trapped.png"

// Forward ref is used to propagate the element up to the parent.
// Currently used to scroll from navbar to this element.
const Trapped = forwardRef((props, ref) => 
{
     // Project title
     const projectTitle = "Trapped";

     // Will be passed into ProjectEntry via the render callback
     const renderObj = (
         <React.Fragment>
             <h1>{projectTitle}</h1>
             <h2>Development Process</h2>
             <p className="placeholderText">
                 I'm still in the midst of revamping my website, stay tuned!
             </p>
         </React.Fragment>
     );
 
     // Delegate rendering to ProjectEntry component
     return (
         <ProjectEntry ref={ref} contentCallback={() => renderObj} 
         bannerImg={BannerImg} fadeScreen={true} 
         projectPrimaryTitle={projectTitle}
         btnText="View Full Info"/>
     );
})

export default Trapped;