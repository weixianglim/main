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
import EnvironmentBreakdown from "../../../images/Projects/MindOverMatter/Environment.gif"
import Tilemaps from "../../../images/Projects/MindOverMatter/Tilemaps.gif"
import Animations from "../../../images/Projects/MindOverMatter/Animations.gif"
import CharacterRecover from "../../../images/Projects/MindOverMatter/Character_Recover.png"
import WaterMechanics from "../../../images/Projects/MindOverMatter/WaterMechanics.gif"
import AllPutTogether from "../../../images/Projects/MindOverMatter/AllPutTogether.gif"

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
                    <span className="tag">Genre</span>2D Puzzle Platformer<br /><span className="endLine" />

                    <span className="tag">Style</span>2D Pixel Art<br /><span className="endLine" />

                    <span className="tag">Technologies</span>C++ Custom Engine<br /><span />
                                                             ImGui (Level Editor)<br /><span />
                                                             OpenGL<br /><span className="endLine" />

                    <span className="tag">My Roles</span>Technical Lead<br /><span />
                                                         Graphics Lead<br /><span />
                                                         Engine Architecture Lead<br /><span />
                                                         Technical Producer<br /><span className="endLine" />

                    <span className="tag">Contributions</span>Game Engine Architecture<br /><span />
                                                              Graphics Environment (OpenGL)<br /><span />
                                                              Serialization<br /><span />
                                                              Gameplay Programming<br /><span />
                                                              Tilemapping<br /><span />
                                                              Level Editor
                </p><span className="endLine" />
            </div>
            <div className="teamInfo">
                <h3>The Team</h3>
                <p>
                <span className="tag">Technical Lead</span>Wei Xiang Lim<br /><span className="endLine" />
                <span className="tag">Producer</span>Chow Jun Hao<br /><span className="endLine" />
                <span className="tag">Design Lead</span>Keith Wong Khai Fun<br /><span className="endLine" />
                <span className="tag">Environment Lead</span>Aloysius Ho Chun Keen<br /><span className="endLine" />
                <span className="tag">Animation Lead</span>Cornelius Lum Jing Yong<br /><span className="endLine" />
                <span className="tag">Physics Champion</span>Kevin Heng Zhirong<br /><span className="endLine" />
                <span className="tag">Editor Champion</span>Andy Chan Kin Sum<br /><span className="endLine" />
                <span className="tag">AI Champion</span>Yee Yi Lin<br /><span className="endLine" />
                <span className="tag">Camera Champion</span>Lee Jian Yan<br /><span className="endLine" />
                </p>
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
                Mind Over Matter was developed by a team of 5 programmers, 2 artists, and 2 designers over the course of 2 semesters. It is a 2D-puzzle platformer built from scratch on a custom 2D game engine. 
                You play as a protagonist possessing the ability to freely toggle between 3 states - Solid, Liquid, and Gas. Each state allows you to maneuver through different 
                environmental obstacles while providing you with unique skills and abilities.
            </p>
            <h3>Challenges</h3>
            <p>
                The biggest challenge we faced was optimization. The maps we were building were big - and I mean, really big!
                They span across large areas and even required multiple layers to cater for parallax-scrolling.
            </p>
            <img src={EnvironmentBreakdown} alt="" />
            <p><br />
                With that in mind, I decided to head in the direction of <b>tilemaps</b>. This eliminated the need for our artists to manually draw each level since a single 
                spritesheet can be sliced via OpenGL and used to paint multiple levels. It also ensures that no redundant resources were loaded; a few select texture buffers are enough to 
                fully cater for multiple environments. Tilemaps also provided the added advantage of spatial optimization. As the maps are tiled, we can choose to only render
                tiles within a certain radial range of the player character. So even if our maps are way larger than the viewport, all unnecessary tiles were not processed by the 
                GPU with this new tilemapping system. After this implementation, our framerate drastically improved from 20+/30 FPS up to 100+ FPS.
            </p>
            <img src={Tilemaps} alt="" />
            <h3>Catering for character animations</h3>
            <p>
                The process of messing around with the texture coordinates in the tilemap system led me to create another crucial system in our engine - the animation handler.
                Once again, I proposed to the team that spritesheets can be used for all our character animations. I expanded on the base spritesheet slicer we had for the tilemaps
                and added in multiple functionalities to eventually create a full state-based animation system that was used in the final product for every animation in the game, ranging
                from character states, character movements, user interfaces, environmental props and much more.
            </p>
            <img src={CharacterRecover} alt="" />
            <img src={Animations} alt="" />
            <h3>Gameplay - Character States</h3>
            <p>
                The main game idea revolves around the 3 states that the player can be in (solid/liquid/gas). The gameplay has to cater for this aspect. The liquid state in particular was
                extremely tough. Initially, we had the idea of liquid physics and allowing the liquid to be fully dynamic and fit into any shape of the environment, including small crevices.
                The latter was actually achieved. In the early prototype of the game, I created a base water mechanic using particles and managed to create a seamless body of water as a playable
                character that could dynamically react with the environment. Here's a quick demo on what it looked like: 
            </p>
            <img src={WaterMechanics} alt="" />
            <p>
                This mechanic was later on scrapped as we decided to approach a simpler gameplay style for the water state, removing the need for a dynamic water body. A spritesheet was used 
                in the final product and while I'm sad that the dynamic water mechanic did not end up making the cut, the process of creating it was still extremely fun!
            </p>
            <h3>Everything Put Together</h3>
            <p>
                Wonder how the end product looks like with all the systems put together? Here's a little sneak preview:
            </p>
            <img src={AllPutTogether} alt="" />
            <p>
                Of couse there's way more to discuss when it comes to developing Mind Over Matter, but what's the fun in spoiling everything? If you're interested, feel free to download
                the game by following the link below!
            </p><br />
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