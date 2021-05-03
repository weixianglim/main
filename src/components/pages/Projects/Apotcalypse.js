import React, { forwardRef } from 'react';
import "../../../App.css"
import ProjectEntry from "../ProjectEntry"
import ReactPlayer from 'react-player/lazy'

// Import icons
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

// Import images
import BannerImg from "../../../images/Projects/Apotcalypse/Apotcalypse.png"
// import InfoScreen from "../../../images/Projects/MindOverMatter/SS1.png"

// Forward ref is used to propagate the element up to the parent.
// Currently used to scroll from navbar to this element.
const Apotcalypse = forwardRef((props, ref) => 
{
    // Project title
    const projectTitle = "Apotcalypse";

    // Will be passed into ProjectEntry via the render callback
    const renderObj = (
        <React.Fragment>
            <h1>{projectTitle}</h1>
            <h2>Development</h2>
            <h3>Project Info</h3>
            <img src={BannerImg} alt="" />
            <div className="projectInfo">
                <p>
                    <span className="tag">Genre</span>Colony Simulator<br /><span className="endLine" />

                    <span className="tag">Roles</span>Technical Lead<br /><span />
                                                      Graphics Lead<br /><span />
                                                      Engine Architecture Lead<br /><span />
                                                      Technical Producer<br /><span className="endLine" />

                    <span className="tag">Contributions</span>Game Engine Architecture<br /><span />
                                                              Graphics Environment (OpenGL)<br /><span />
                                                              Gameplay Programming<br /><span />
                                                              Serialization<br /><span />
                                                              Events and Systems<br /><span />
                                                              Assets Pipeline<br /><span />
                                                              Lighting and Shaders<br /><span />
                                                              Physics (PhysX)<br /><span />
                                                              Level Editor<br /><span className="endLine" />

                    <span className="tag">Technologies</span>C++ Custom Engine<br /><span />
                                                             ImGui (Level Editor)<br /><span />
                                                             PhysX<br /><span />
                                                             RapidJSON<br /><span />
                                                             Assimp<br /><span />
                                                             Tracy<br /><span />
                                                             OpenGL
                </p><span className="endLine" />
            </div>
            {/* <div className="awardsInfo">
                <h3>Awards <FontAwesomeIcon icon={faMedal}/></h3>
                <p>
                    <FontAwesomeIcon icon={faAward}/><span className="awardEntry">Best 2D Visual Design (Winner), Digipen Game Awards</span><br />
                    <FontAwesomeIcon icon={faAward}/><span className="awardEntry">Best 2D Graphics Technology (Finalist), Digipen Game Awards</span><br />
                    <FontAwesomeIcon icon={faAward}/><span className="awardEntry">Best Sophomore Game (Finalist), Digipen Game Awards</span><br />
                    <FontAwesomeIcon icon={faAward}/><span className="awardEntry">Best User Interface (Finalist), Digipen Game Awards</span><br />
                </p>
            </div> */}
            {/* <div className="trailer">
                <h3>Video Trailer</h3>
                <div className="player-wrapper">
                    <ReactPlayer className="react-player" width="100%" height="100%" url="https://www.youtube.com/watch?v=a8kgGU3oxTc" />
                </div>
            </div> */}
            
            <h3>Overview</h3>
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
        btnText="View Full Info"/>
    );
})

export default Apotcalypse;