import React, { forwardRef } from 'react';
import "../../../App.css"
import ProjectEntry from "../ProjectEntry"
import ReactPlayer from 'react-player/lazy'

// Import icons
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

// Import images
import BannerImg from "../../../images/Projects/FishieeProtecc/FishieeProtecc.png"
// import InfoScreen from "../../../images/Projects/MindOverMatter/SS1.png"

// Forward ref is used to propagate the element up to the parent.
// Currently used to scroll from navbar to this element.
const FishieeProtecc = forwardRef((props, ref) => 
{
    // Project title
    const projectTitle = "Fishiee Protecc";

    // Will be passed into ProjectEntry via the render callback
    const renderObj = (
        <React.Fragment>
            <h1>{projectTitle}</h1>
            <h2>Development</h2>
            <h3>Project Info</h3>
            <img src={BannerImg} alt="" />
            <div className="projectInfo">
                <p>
                    <span className="tag">Themes</span>High-Octane<br /><span />
                                                       Protection<br /><span className="endLine" />

                    <span className="tag">Roles</span>Technical Lead<br /><span />
                                                      Graphics Lead<br /><span />
                                                      Engine Architecture Lead<br /><span />
                                                      Technical Producer<br /><span className="endLine" />

                    <span className="tag">Contributions</span>Game Engine Architecture<br /><span />
                                                              Graphics Environment (OpenGL)<br /><span />
                                                              Gameplay Programming<br /><span className="endLine" />

                    <span className="tag">Technologies</span>C++ Custom Engine<br /><span />
                                                             OpenGL
                </p><span className="endLine" />
            </div>
            <div className="awardsInfo">
                <h3>Awards <FontAwesomeIcon icon={faMedal}/></h3>
                <p>
                    <FontAwesomeIcon icon={faAward}/><span className="awardEntry">Gumi Asia's Best Freshman Game (Finalist), Digipen Game Awards</span><br />
                </p>
            </div>
            <div className="trailer">
                <h3>Video Trailer</h3>
                <div className="player-wrapper">
                    <ReactPlayer className="react-player" width="100%" height="100%" url="https://www.youtube.com/watch?v=lXyaZxPpPMk&ab_channel=wxlim" />
                </div>
            </div>
            
            <h3>Overview</h3>
            <p>
                FishieProtecc is a fast-paced game which will strain the players reaction speeds and planning abilities. It is my freshman project in DigiPen and was 
                nominated for Gumi Asia's Best Freshman Game award. I was the technical lead for this project and handled most of the engine, graphics, scripting and 
                gameplay codes. We were given a framework to deal with the graphics and windows creation of the game, but I decided to take the challenge of using OpenGL 
                and freeglut instead. This was a project consisting of a small team of 4 programmers without dedicated artists or designers. Despite that, I am extremely 
                proud of the overall look and game design of the end product.
            </p>
        </React.Fragment>
    );

    // Delegate rendering to ProjectEntry component
    return (
        <ProjectEntry ref={ref} contentCallback={() => renderObj} 
        bannerImg={BannerImg} fadeScreen={true} 
        projectPrimaryTitle={projectTitle}
        btnText="View Full Info"
        playLink="https://games.digipen.edu/games/fishieprotecc"
        />
    );
})

export default FishieeProtecc;