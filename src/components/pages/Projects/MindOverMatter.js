import React, { forwardRef } from 'react';
import "../../../App.css"
import ProjectEntry from "../ProjectEntry"

// Import images
import BannerImg from "../../../images/Projects/MindOverMatter/TitleScreen.gif"
import MainMenu from "../../../images/Projects/MindOverMatter/MainMenu.png"

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
            <h2>Development Process</h2>
            <h3>Project Info</h3>
            <img src={MainMenu} alt="" />
            <div className="projectInfo">
                <p>
                    <span className="tag">Genre</span>2D Puzzle Platformer <br /><span className="endLine" />

                    <span className="tag">Roles</span>Technical Lead<br /><span />
                                                      Graphics Lead<br /><span />
                                                      Engine Architecture Lead<br /><span />
                                                      Technical Producer<br /><span className="endLine" />

                    <span className="tag">Contributions</span>Game Engine Architecture<br /><span />
                                                              Graphics Environment (OpenGL)<br /><span />
                                                              Level Editor<br /><span className="endLine" />

                    <span className="tag">Technologies</span>C++ Custom Engine<br /><span />
                                                             ImGui (Level Editor)<br /><span />
                                                             OpenGL
                </p><span className="endLine" />
            </div>
            <div className="projectInfo">
                <h3>Awards</h3>
                <p>
                </p>
            </div>
            <p>
                MindOverMatter is a 2D-puzzle platformer built from scratch on a custom 2D game engine. You play as a protagonist possessing the 
                ability to freely toggle between 3 states - Solid, Liquid, and Gas. Each state allows you to maneuver through different environmental 
                obstacles while providing you with unique skills and abilities. Being the technical lead for the project, I handled the majority of the engine, 
                gameplay, graphics and scripting codes while also managing the delegation of programming tasks. I was also the co-producer and acted as the 
                bridge between the technical team and designers. The project was developed over the course of 2 semesters and was an arduous process overall. 
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
        btnText="View Full Info"/>
    );
})

export default MindOverMatter;