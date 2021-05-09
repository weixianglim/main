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
import IllanPlanet from "../../../images/Projects/Illan/IllanPlanet.jfif"
import IllanVillage from "../../../images/Projects/Illan/IllanVillage.jfif"
import IllanAwoke from "../../../images/Projects/Illan/IllanAwoke.jpg"
import IllanTitle from "../../../images/Projects/Illan/IllanTitle.png"
import IllanAbilities1 from "../../../images/Projects/Illan/IllanAbilities1.jpg"
import IllanAbilities2 from "../../../images/Projects/Illan/IllanAbilities2.jpg"
import IllanRed from "../../../images/Projects/Illan/IllanRed.png"
import IllanColored from "../../../images/Projects/Illan/IllanColored.png"
import IllanTeam from "../../../images/Projects/Illan/IllanTeam.jpg"
import IllanSleep from "../../../images/Projects/Illan/IllanSleep.png"

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
            <img src={IllanSleep} alt="" />
            <div className="projectInfo">
                <p>
                    <span className="tag">Themes</span>3D Exploration<br /><span />
                                                       Puzzle Solving<br /><span className="endLine" />

                    <span className="tag">Technologies</span>Unity<br /><span />
                                                             C#<br /><span />
                                                             PS4<br /><span className="endLine" />

                    <span className="tag">My Roles</span>Technical Lead<br /><span />
                                                      Technical Producer<br /><span />
                                                      Gameplay Programmer<br /><span className="endLine" />

                    <span className="tag">Contributions</span>Controls Integration<br /><span />
                                                              Puzzle Algorithms<br /><span />
                                                              Shaders and VFX<br /><span />
                                                              Flight Mechanics<br /><span />
                                                              Gameplay Programming
                </p><span className="endLine" />
            </div>
            <div className="awardsInfo">
                <h3>Achievements <FontAwesomeIcon icon={faMedal}/></h3>
                <p>
                    <FontAwesomeIcon icon={faAward}/><span className="awardEntry">Microsoft Imagine Cup</span><br />
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
                Illan: Shades of Memories is a 3D exploration game made in Unity Engine. It is my Final Year Project in Nanyang Polytechnic. 
                Having taken over the previous team for the project, I was tasked as 
                the technical lead. The team consists of 2 programmers and 3 artists and the project was developed over the course of 3 months. 
                Illan: Shades of Memories was eventually green-lit on steam and was also featured on a section of Straits Times.
            </p>
            <img src={IllanTitle} alt="" />
            <h3>The World</h3>
            <p>
                Illan wakes up and finds himself in a world dyed in black and white. He realised later on that he possesses the power to restore colors to the world. 
                As Illan progresses and solves various puzzles throughout his journey, parts of the map will get lit up and colored. Eventually, Illan will regain his 
                memories and also restore his world back to its original state. 
            </p>
            <img src={IllanAwoke} alt="" />
            <h3>Illan Abilities</h3>
            <p>
                Illan possesses a total of 5 abilities and are all centered around a color. True Sight (white) allows him to see things that are not visible, Incite (red) allows
                him to interact with the environmental props by triggering or destroying them, Telekinesis (blue) allows him to move or lift objects, Flight (yellow) allows him to glide 
                longer distances and finally Equilibrium (green) allows him to swap places with an object. Initially, he only has 1 ability (true sight) but unlocks more as he 
                restores more colors to the world. As the abilities are tied to world coloration, Illan will eventually possess all 5 abilities once players reach the 
                final level. 
            </p>
            <img src={IllanAbilities1} alt="" />
            <img src={IllanAbilities2} alt="" />
            <h3>The Environment</h3>
            <img src={IllanPlanet} alt="" />
            <p>
                The environment of Illan varies from area to area, but he mainly lives in a fantasy world with vast plains, mountains and villages. Many of Illan's puzzles were tied to 
                the in-game environment. The village area for example features puzzles involving elevation, portals and lifting objects. Players when faced with these puzzles usually do not 
                have all 5 of Illan's abilities available. They have to utilize whichever skill they have at the time to solve these mechanics. Many of these puzzles were also used 
                as tutorials upon unlocking a new color. 
            </p>
            <img src={IllanVillage} alt="" />
            <h3>Graphics</h3>
            <p>
                Bloom was used to bring out the desired emphasis on the colors in each stage / area of the map. Additionally, fog and water shaders were also used extensively to emulate a fantasy world.
                Some of the puzzles also utilized glow shaders to guide players in a specific direction. Coupled with the art assets and lightings, the world of Illan was illuminated yet possesses a dark 
                eerie undertone all around.    
            </p>
            <img src={IllanColored} alt="" />
            <img src={IllanRed} alt="" />
            <h3>Closing Thoughts</h3>
            <p>
                Developing Illan was one of the best experiences I've had during my time in NYP. I had an amazing team behind me and together we created an unforgettable experience. I have also 
                picked up many valuable experiences along the way, ranging from technical skills with Unity to communicating well within a team with the artists. I could not be prouder of what the team has accomplished with 
                Illan: Shades of Memories. 
            </p>
            <img src={IllanTeam} alt="" />
            <br />
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