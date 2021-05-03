import React, { forwardRef } from 'react';
import "../../../App.css"
import ProjectEntry from "../ProjectEntry"
import ReactPlayer from 'react-player/lazy'

// Import icons
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

// Import images
import BannerImg from "../../../images/Projects/MindOverMatter/TitleScreen.gif"
import InfoScreen from "../../../images/Projects/MindOverMatter/SS1.png"

// Forward ref is used to propagate the element up to the parent.
// Currently used to scroll from navbar to this element.
const MindOverMatter = forwardRef((props, ref) => 
{
    // Project title
    const projectTitle = "Mind Over Matter";

    // Will be passed into ProjectEntry via the render callback
    const renderObj = (
        <React.Fragment>
            <h1>{projectTitle}</h1>
            <h2>Development</h2>
            <h3>Project Info</h3>
            <img src={InfoScreen} alt="" />
            <div className="projectInfo">
                <p>
                    <span className="tag">Genre</span>2D Puzzle Platformer <br /><span className="endLine" />

                    <span className="tag">Roles</span>Technical Lead<br /><span />
                                                      Graphics Lead<br /><span />
                                                      Engine Architecture Lead<br /><span />
                                                      Technical Producer<br /><span className="endLine" />

                    <span className="tag">Contributions</span>Game Engine Architecture<br /><span />
                                                              Graphics Environment (OpenGL)<br /><span />
                                                              Serialization<br /><span />
                                                              Gameplay Programming<br /><span />
                                                              Tilemapping<br /><span />
                                                              Level Editor<br /><span className="endLine" />

                    <span className="tag">Technologies</span>C++ Custom Engine<br /><span />
                                                             ImGui (Level Editor)<br /><span />
                                                             OpenGL
                </p><span className="endLine" />
            </div>
            <div className="awardsInfo">
                <h3>Awards <FontAwesomeIcon icon={faMedal}/></h3>
                <p>
                    <FontAwesomeIcon icon={faAward}/><span className="awardEntry">Best 2D Visual Design (Winner), Digipen Game Awards</span><br />
                    <FontAwesomeIcon icon={faAward}/><span className="awardEntry">Best 2D Graphics Technology (Finalist), Digipen Game Awards</span><br />
                    <FontAwesomeIcon icon={faAward}/><span className="awardEntry">Best Sophomore Game (Finalist), Digipen Game Awards</span><br />
                    <FontAwesomeIcon icon={faAward}/><span className="awardEntry">Best User Interface (Finalist), Digipen Game Awards</span><br />
                </p>
            </div>
            <div className="trailer">
                <h3>Video Trailer</h3>
                <div className="player-wrapper">
                    <ReactPlayer className="react-player" width="100%" height="100%" url="https://www.youtube.com/watch?v=a8kgGU3oxTc" />
                </div>
            </div>
            
            <h3>Overview</h3>
            <p>
                Mind Over Matter was developed by a team of 9 members over the course of 2 semesters.
                Being the technical lead for the project, I handled the majority of the engine, 
                gameplay, graphics and scripting codes while also managing the delegation of programming tasks. I was also the co-producer and acted as the 
                bridge between the technical team and designers.
                I was particularly proud of the tilemap system and the amount of polish we've put into the game towards the Gold/Shipping phase. In the end, all 
                the hardwork was well worth the effort as MindOverMatter was nominated for (and won!) multiple awards.
            </p>
        </React.Fragment>
    );

    // Delegate rendering to ProjectEntry component
    return (
        <ProjectEntry ref={ref} contentCallback={() => renderObj} 
        bannerImg={BannerImg} fadeScreen={true} 
        projectPrimaryTitle={projectTitle}
        btnText="View Full Info"
        playLink="https://games.digipen.edu/games/mind-over-matter"
        />
    );
})

export default MindOverMatter;