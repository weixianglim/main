import React, { forwardRef } from 'react';
import "../../../App.css"
import ProjectEntry from "../ProjectEntry"
import ReactPlayer from 'react-player/lazy'

// Import icons
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

// Import images
import BannerImg from "../../../images/Projects/Illan/Illan.png"

// Forward ref is used to propagate the element up to the parent.
// Currently used to scroll from navbar to this element.
const Illan = forwardRef((props, ref) => 
{
    // Project title
    const projectTitle = "Illan: Shades of Memories";

    // Will be passed into ProjectEntry via the render callback
    const renderObj = (
        <React.Fragment>
            <h1>{projectTitle}</h1>
            <h2>Development</h2>
            <h3>Project Info</h3>
            <img src={BannerImg} alt="" />
            <div className="projectInfo">
                <p>
                    <span className="tag">Themes</span>3D Exploration<br /><span />
                                                       Puzzle Solving<br /><span className="endLine" />

                    <span className="tag">Roles</span>Technical Lead<br /><span />
                                                      Technical Producer<br /><span />
                                                      Gameplay Programmer<br /><span className="endLine" />

                    <span className="tag">Contributions</span>Controls Integration<br /><span />
                                                              Puzzle Algorithms<br /><span />
                                                              Shaders and VFX<br /><span />
                                                              Flight Mechanics<br /><span />
                                                              Gameplay Programming<br /><span className="endLine" />

                    <span className="tag">Technologies</span>Unity<br /><span />
                                                             C#<br /><span />
                                                             PS4
                </p><span className="endLine" />
            </div>
            <div className="awardsInfo">
                <h3>Achievements <FontAwesomeIcon icon={faMedal}/></h3>
                <p>
                    <FontAwesomeIcon icon={faAward}/><span className="awardEntry">Green-lit on Steam</span><br />
                    <FontAwesomeIcon icon={faAward}/><span className="awardEntry">Featured on Straits Times</span><br />
                </p>
            </div>
            <div className="trailer">
                <h3>Video Trailer</h3>
                <div className="player-wrapper">
                    <ReactPlayer className="react-player" width="100%" height="100%" url="https://www.youtube.com/watch?v=3TCEEUV7VGg" />
                </div>
            </div>
            
            <h3>Overview</h3>
            <p>
                Illan: Shades of Memories is a 3D exploration game made in Unity Engine and is developed with the PS4 in mind as it's primary 
                intended target platform. It is my Final Year Project in NYP. Having taken over the previous team for the project, I was tasked as 
                the technical lead. We revamped most of the gameplay mechanics and Illan: Shades of Memories was eventually green-lit on steam.
            </p>
        </React.Fragment>
    );

    // Delegate rendering to ProjectEntry component
    return (
        <ProjectEntry ref={ref} contentCallback={() => renderObj} 
        bannerImg={BannerImg} fadeScreen={true} 
        projectPrimaryTitle={projectTitle}
        btnText="View Full Info"
        playLink="https://steamcommunity.com/sharedfiles/filedetails/?id=507636802"
        />
    );
})

export default Illan;