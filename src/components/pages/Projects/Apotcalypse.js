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
import CircularPot from "../../../images/Projects/Apotcalypse/CircularPot.gif"
import FruletsHappy from "../../../images/Projects/Apotcalypse/FruletsHappy.gif"
import CircularQuadrant from "../../../images/Projects/Apotcalypse/CircularQuadrant.png"
import CutsceneIntro from "../../../images/Projects/Apotcalypse/CutsceneIntro.gif"
import NewEnvironment from "../../../images/Projects/Apotcalypse/NewEnvironment.gif"
import FruletModel from "../../../images/Projects/Apotcalypse/FruletModel.png"
import MainMenu from "../../../images/Projects/Apotcalypse/MainMenu.png"
import MushroomGlow from "../../../images/Projects/Apotcalypse/MushroomGlow.gif"

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
            <img src={FruletsHappy} alt="" />
            <div className="projectInfo">
                <p>
                    <span className="tag">Genre</span>Colony Simulator<br /><span className="endLine" />

                    <span className="tag">Technologies</span>C++ Custom Engine<br /><span />
                                                             ImGui (Level Editor)<br /><span />
                                                             PhysX<br /><span />
                                                             RapidJSON<br /><span />
                                                             Assimp<br /><span />
                                                             Tracy<br /><span />
                                                             OpenGL<br /><span className="endLine" />

                    <span className="tag">My Roles</span>Technical Lead<br /><span />
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
                                                              Level Editor
                </p><span className="endLine" />
            </div>

            <div className="teamInfo">
                <h3>The Team</h3>
                <p>
                <span className="tag">Producer</span>Chow Jun Hao<br /><span className="endLine" />
                <span className="tag">Design Lead</span>Darren Ang Jun Kai<br /><span className="endLine" />
                <span className="tag">Tech Lead</span>Lim Wei Xiang<br /><span className="endLine" />
                <span className="tag">Graphics Champion</span>Eric Aw Yuh Liang<br /><span className="endLine" />
                <span className="tag">Tools Champion</span>Joel Ong Jia Quan<br /><span className="endLine" />
                <span className="tag">A.I. Champion</span>Zenson Lim Zhan Shin<br /><span className="endLine" />
                <span className="tag">Physics Champion</span>Kevin Heng Zhirong<br /><span className="endLine" />
                <span className="tag">Gameplay Champion</span>Andy Chan Kin Sum<br /><span className="endLine" />
                <span className="tag">Music Champion</span>Yee Yi Lin<br /><span className="endLine" />
                </p>
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
            <div className="trailer">
                <h3>Video Trailer</h3>
                <div className="player-wrapper">
                    <ReactPlayer className="react-player" width="100%" height="100%" url="https://www.youtube.com/watch?v=-qMEVvWeruA" />
                </div>
            </div>
            
            <h3>Overview</h3>
            <img src={MainMenu} alt="" />
             <p>
                 Apotcalypse was developed by a team of 9 members across 2 semesters. It is a colony simulator built on a custom 3D game engine whereby the player has to manage the game's crucial resource - Frulets.
                 These Frulets are indispensable and are necessary to impede the "Apotcalypse".
                 The main game loop revolves around managing the aforementioned Frulets, using them to craft various buildings and assigning them to work in different areas of the map. The main goal is to clear the
                 infection levels of the different floors, mainly via the buildings available. Once all 4 floors of infections are cleared, the Apotcalypse will be prevented. 
            </p>
            
            <h3>Challenges</h3>
            <img src={CutsceneIntro} alt="" />
            <p>
                We faced many challenges during the initial stage of the project. For starters, the game idea itself was obscure; everyone on the team was very new to the genre and there were many misconceptions of the game idea
                when it was pitched initially. We were also unsure of how the game will pan out in a 3D enrivonment as most existing games like "Oxygen Not Included" within the genre were 2D. Because of this, we ended up 
                making several revamps and iterations throughout the course of this project which naturally ate up quite a large chunk of development time. 
                Thankfully, the team gelled together really well during the whole ordeal and held many meetings to iterate the whole game idea from the bottom up. 
                Thanks to the iteration process, we realised that
                the initial game concept does not work well in a 3D environment which ultimately directed the team in the proper direction. The final product ended up being
                something that I'm very sastisfied with and Apotcalypse has become a project that I hold really close to heart!
            </p>
            <h3>Iterations</h3>
            <p>
                The initial game concept was actually drastically different from the end product. We had a circular pot as our environment, and each floor was divided into 4 quadrants. Players were required to spin the pot around it's
                center to get to the areas at the back.
            </p>
            <img src={CircularPot} alt="" />
            <img src={CircularQuadrant} alt="" />
            <p>
                After several initial playtests and internal testing, it became apparent to us very quickly that the environment and game concept does not work well in 3D. The game revolves around resources and requires players to be
                very reactive when an event happens in the game loop. Infection meter rising? Build a cleaner room quickly. Frulets are dying? Craft a hospital room immediately. The circular pot acted as a huge hindrance to this core 
                mechanic - the entire environment is not fully visible to the player at any one time! When an event is happening at the back of the pot, the player might not be aware of it. Even if they were 
                made aware, the process of rotating the pot to the back and getting to the correct floor is way too slow and were at many times too detrimental to come back from. Environmental maneuvering became a huge part of the gameplay
                and was not an intended style of playing. With that, the team decided to scrap the current concept and revamped the environment.
            </p>
            <h3>The New Design</h3>
            <p>
                The environment was redesigned to allow players to have have a complete view of the map. The aspect of environment maneuver (rotating the pot) was completely scrapped and players no longer have to manipulate the map
                to access their Frulets. Additionally, raycasting is now utilised as the primary way for players to engage with the Frulet resources - simply drag and drop them into the desired slots. The players are still able to
                zoom into the individual rooms to engage with the Frulets, but the bulk of the game can be played via drag and drop. With this new revamp, the gameplay felt alot less taxing and we
                eliminated the unintended parts of the gameplay we had before.
            </p>
            <img src={NewEnvironment} alt="" />
            <h3>Art and Graphics</h3>
            <p>
                Apotcalypse was developed by a team without artists. Because of this, we have decided to head in the direction of a simplistic and cute art style with minimalistic models. We have also scattered animations and polish
                on every Frulet action, including building, death, working (for the various buildings), etc.
            </p>
            <img src={FruletModel} alt="" />
            <p>
                On the engine side, we ended up utilising many post-processing effects like Bloom, glow and shadows, as well as particle effects to make up for the aesthetics. These graphical effects were also integrated into the
                gameplay, being used as infection, spores and hover indicators. 
                While the models and textures are minimalistic, the post-processing pipeline allowed the assets to still look aesthetically pleasing. 
            </p>
            <img src={MushroomGlow} alt="" />
            <h3>Closing Thoughts</h3>
            <p>
                Developing Apotcalypse was a grueling but extremely rewarding process. Being my first 3D game developed in a custom engine, I have learnt alot of from this project ranging from technical skills to the importance
                of team communication. The end result of all our hard work is something I'm extremely proud of. I'd love to get into more of the development process. However, the best way to enjoy the game is to play
                it yourself. If you're interested, feel free to download the game via the link below!
            </p><br />
        </React.Fragment>
    );

    // Delegate rendering to ProjectEntry component
    return (
        <ProjectEntry ref={ref} contentCallback={() => renderObj} 
        bannerImg={BannerImg} fadeScreen={true} 
        projectPrimaryTitle={projectTitle}
        playLink="https://games.digipen.edu/games/apotcalypse"
        btnText="View Full Info"/>
    );
})

export default Apotcalypse;