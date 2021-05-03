import React, { forwardRef } from 'react';
import "../../../App.css"
import ProjectEntry from "../ProjectEntry"

// Import images
import BannerImg from "../../../images/Projects/Trapped/Trapped.png"
// import InfoScreen from "../../../images/Projects/Trapped/Trapped.png"

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
             <h2>Development</h2>
            <h3>Project Info</h3>
            <img src={BannerImg} alt="" />
            <div className="projectInfo">
                <p>
                    <span className="tag">Themes</span>Exploration<br /><span />
                                                       Sexuality<br /><span className="endLine" />

                    <span className="tag">Contributions</span>All (solo project)<br /><span className="endLine" />

                    <span className="tag">Technologies</span>Unity Engine<br /><span />
                                                             C#<br /><span />
                                                             Shaders
                </p><span className="endLine" />
            </div>
             <p className="placeholderText">
                 Full information will be provided soon, stay tuned!
             </p>
         </React.Fragment>
     );
 
     // Delegate rendering to ProjectEntry component
     return (
         <ProjectEntry ref={ref} contentCallback={() => renderObj} 
         bannerImg={BannerImg} fadeScreen={true} 
         projectPrimaryTitle={projectTitle}
         btnText="View Full Info"
         playLink="https://weixianglim.github.io/Trapped/"
         />
     );
})

export default Trapped;