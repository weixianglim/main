import React, { forwardRef } from 'react';
import "../../../App.css"
import ProjectEntry from "../ProjectEntry"
import ReactPlayer from 'react-player/lazy'
import { Link } from 'react-router-dom'

// Import icons
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';
import { faMedal } from '@fortawesome/free-solid-svg-icons';

// Import images
import BannerImg from "../../../images/Projects/FishieeProtecc/FishieeProtecc.png"
import NetsPossess from "../../../images/Projects/FishieeProtecc/NetsPossess.gif"
import NetsPiranha from "../../../images/Projects/FishieeProtecc/NetsPiranha.gif"
import DronesPossess from "../../../images/Projects/FishieeProtecc/DronesPossess.gif"
import DronesEel from "../../../images/Projects/FishieeProtecc/DronesEel.gif"
import FishMovement from "../../../images/Projects/FishieeProtecc/FishMovement.gif"
import HecticGameplay from "../../../images/Projects/FishieeProtecc/HecticGameplay.gif"

// Forward ref is used to propagate the element up to the parent.
// Currently used to scroll from navbar to this element.
const FishieeProtecc = forwardRef((props, ref) => 
{
    // Project title
    const projectTitle = "Fishie Protecc";

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

                    <span className="tag">Technologies</span>C++ Custom Engine<br /><span />
                                                             OpenGL<br /><span className="endLine" />

                    <span className="tag">My Roles</span>Technical Lead<br /><span />
                                                      Graphics Lead<br /><span />
                                                      Engine Architecture Lead<br /><span />
                                                      Technical Producer<br /><span className="endLine" />

                    <span className="tag">Contributions</span>Game Engine Architecture<br /><span />
                                                              Graphics Environment (OpenGL)<br /><span />
                                                              Gameplay Programming
                </p><span className="endLine" />
            </div>

            <div className="teamInfo">
                <h3>The Team</h3>
                <p>
                <span className="tag">Technical Lead</span>Wei Xiang Lim<br /><span className="endLine" />
                <span className="tag">Producer</span>Darren Low Seng Tat<br /><span className="endLine" />
                <span className="tag">Design Lead</span>Kevin Heng Zhirong<br /><span className="endLine" />
                <span className="tag">Product Manager</span>Mohamad Shahril<br /><span className="endLine" />
                </p>
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
                    <ReactPlayer className="react-player" width="100%" height="100%" url="https://www.youtube.com/watch?v=lXyaZxPpPMk" />
                </div>
            </div>
            
            <h3>Overview</h3>
            <p>
                Fishie Protecc is a fast-paced game which will strain the players reaction speeds and planning abilities. It was developed by a team of 4 programmers 
                in one semester during my freshman year. Like the name of the game suggests, the aim of Fishie Protecc is to protect the fishes from environmental hazards.
                The player, a ghost fish, has the ability to possess any other fish within the vicinity to get them out of harm's way. As the game progresses, special fishes will 
                also be available which the player can possess and destroy or hinder hazards with. 
                Fishie Protecc was nominated for Gumi Asia's Best Freshman Game award. 
            </p>
            <img src={HecticGameplay} alt="" />
            <h3>Reasons Behind Game Concept</h3>
            <p>
                We were a small team of 4 programmers with no artists or game designers on board. Additionally, we had to develop the game in just a single semester. Given the time constraint and lack of resources, we 
                decided to create a game with one simple mechanic - possession! Contrary to popular belief, more mechanics does not necessarily equate to a better game. We were very confident that
                we will be able to develop a fun and engaging game without complex or bloated game mechanics. We also wanted a little twist and stray away from the usual game tropes. Instead of destroying 
                enemies, we wanted to explore the idea of protection. With all these in mind, the final game concept of protecting fishes via possession was born. 
            </p>
            <h3>Development</h3>
            <p>
                As the lead programmer, I had the opportunity to develop the framework and engine for the game. To help mitigate the workload of a small team, we were provided a framework 
                to aid with the graphics environment and windows creation for our project. However, after sitting down and discussing with the team, we decided to take on the challenge of using raw OpenGL and freeglut instead. Even though this 
                ended up being more time-consuming, it ended up paying off as we had more low-level control when it comes to manipulating texcoords for our spritesheets and debugging. Learning opengl in this project also ultimately 
                aided me in future projects like{" "}
                <Link to="/mindovermatter">Mind Over Matter</Link>{" "}and{" "}
                <Link to="/apotcalypse">Apotcalypse</Link>{" "}
                where I also took on the technical lead role. 
            </p>
            <h3>Techniques Employed</h3>
            <p>
                Several interesting techniques were used for our fish's behavior. In order to create a non-uniform fish movement, we used Perlin Noise as our random algorithm to deploy the fishes. With Perlin Noise, each 
                fish's movement cannot be easily interpreted / predicted by the player which adds to the hectic feel of the game we initially desired. We also tried a flocking behavior for the fish movement, but the clustered nature 
                of the fishes ended up hindering the gameplay as they are too easily caught by the nets. We eventually scrapped the flocking AI and kept only the Perlin noise algorithm.
            </p>
            <img src={FishMovement} alt="" />
            <h3>Hazards - Nets</h3>
            <p>
                We thought of many cool hazards for the game but ultimately settled on 2 main ones to prevent overbloating the gameplay. One of the main hazards were fishing nets, which drops from the ships patrolling above the 
                waters. These nets have the ability to capture a couple of fishes in one go. They have a "drop indicator" which will briefly appear to show their path of descent. One way to 
                tackle this form of hazard was to possess every fish within the indicator area and get them out of harm's way. 
            </p>
            <img src={NetsPossess} alt="" />
            <p>
                The second way to deal with nets is via the special fish - the piranha. It has the ability to chew through the nets and free any fishes caught. 
            </p>
            <img src={NetsPiranha} alt="" />
            <h3>Hazards - Drones</h3>
            <p>
                The other primary hazard was an electronic drone that behaves more intelligently than the nets. Once released, they will target a specific fish and chase it down. The drone has a "battery level" indicator, which 
                shows the available charge of the device. Once the battery reaches 0, the drone would cease chasing the target fish and return to its docking spot to recharge. There were 2 ways to beat this hazard. The first is to 
                simply possess the target the fish and lure the drone around the map until its battery runs out.
            </p>
            <img src={DronesPossess} alt="" />
            <p>
                The second way is to utilize one of the special fishes, the electric eel, to apply a shock to the device. Once a shock is 
                administered, the device would be immobilized for a short amount of time.
            </p>
            <img src={DronesEel} alt="" />
            <h3>Closing Thoughts</h3>
            <p>
                By using only 2 main mechanics, we were able to toggle the values (spawn amount, spawn interval, speed of descent, speed of chasing, etc.) and created 6 varying levels of difficulty and gameplay! Each of these 
                levels were drastically different from the rest, and we were quite surprised by the variance that 2 simple mechanics can provide. As someone that loves to employ fancy mechanics in games, Fishie Protecc has taught me that 
                sometimes, simple mechanics can actually make the game alot more fun! Fishie Protecc ended up being one of the most unique games amongst the freshmen cohort and was nominated for Gumi Asia's Best Freshman Game. 
            </p><br />
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