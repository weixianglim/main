import React, { forwardRef } from 'react';
import "../../../App.css"
import ProjectEntry from "../ProjectEntry"
import { Link } from 'react-router-dom'

// Import images
import BannerImg from "../../../images/Projects/Trapped/Trapped.png"
// import InfoScreen from "../../../images/Projects/Trapped/Trapped.png"
import Start from "../../../images/Projects/Trapped/Start.gif"
import BlueCutscene from "../../../images/Projects/Trapped/BlueCutscene.gif"
import BluePath from "../../../images/Projects/Trapped/BluePath.gif"
import BlueEnding from "../../../images/Projects/Trapped/BlueEnding.gif"
import PinkCutscene from "../../../images/Projects/Trapped/PinkCutscene.gif"
import PinkPath from "../../../images/Projects/Trapped/PinkPath.gif"
import PinkEnding from "../../../images/Projects/Trapped/PinkEnding.gif"

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
                    <span className="tag">Gameplay</span>Top Down<br /><span className="endLine" />
                    <span className="tag">Themes</span>Exploration<br /><span />
                                                       Choice<br /><span />
                                                       Sexuality<br /><span className="endLine" />

                    <span className="tag">Technologies</span>Unity Engine<br /><span />
                                                             C#<br /><span />
                                                             Post-Processing<br /><span className="endLine" />

                    <span className="tag">Contributions</span>All (solo project)
                </p><span className="endLine" />
            </div>
            <h3>Overview</h3>
             <p>
                Trapped follows the life of a closeted protagonist as he tries to maneuver and escape through a dark maze. The game was developed as a solo project for one of my modules
                taken in spring. In this final project, a central theme was chosen and a creative piece will be designed around this central theme in any desired medium.
                The theme for this project is "Sexuality", and I've decided to use a game as a medium for this creative project. A game has a very unique trait that the other mediums do not 
                provide - player interaction. I took advantage of this by employing "choice" as a central pillar of the game.  
             </p>
             <img src={Start} alt="" />
             <h3>Challenges</h3>
             <p>
                 The biggest challenge I faced during development was time constraint. The available development time for this project was very short. I had only approximately 2 weeks to create the 
                 entire game from scratch. On top of that, this is a solo effort with no artists to provide assets for the game. I was also swamped with many other mods during this period and was 
                 developing another game, {" "}
                 <Link to="/apotcalypse">Apotcalypse</Link>
                 , simultaneously. In light of these circumstances, I decided to use simple shapes (cubes, spheres, etc.) for the game's characters, 
                 props and environment. This eliminated the need for me to create art assets from the ground up. As the environment is dark, I can utilise Unity Engine's lighting and shader effects to make the 
                 game look very asthetically appealing.  
             </p>
             <h3>Game Idea</h3>
             <p>
                Trapped is a top-down game taking place in a dark environment. 
                Only a small window of “lit-up” view will be available to the player, everything outside this view window will be intentionally dark. As players maneuver through 
                the environment, they will encounter bright blue and pink glowing objects that they can pick up. Selecting the pink one destroys the blue one (and vice versa). Once 
                a glow object is picked, a path will be lit up to guide the player along that path. The game would have 2 different endings, the blue ending (led by the blue objects) and the pink ending (led by
                the pink objects). The goal of the game was to reach one of the 2 endings.
             </p>
             <img src={PinkPath} alt="" />
             <h3>Reason Behind The Concept</h3>
             <p>
                A “dark maze” was chosen to simulate a “dark closet” that the protagonist is trapped in. I want to present the idea of our protagonist “exploring his sexuality” and a maze caters for this perfectly. The blue (male) 
                and pink (female) objects are synonymous to the choices that he makes while exploring his sexuality – does he conform to the heteronormative society or stay true to himself? Additionally, texts will be splattered across 
                the screen each time the player picks up an object to simulate the public’s reactions to each choice. Picking up the blue object will invoke words like “disgusting”, “absolutely horrendous”, etc. while picking up the 
                pink object will invoke more pleasant phrases like “you two look good together”, “lovely couple”, etc. These feelings would hopefully put players into the shoes of an individual who is struggling with their sexuality and 
                facing public / social stigmatization along the way. The main goal of the game is to educate and expose players to the topic while gaining empathy in the process. 
             </p>
             <img src={BluePath} alt="" />
             <h3>The Pink Route</h3>
             <p>
                If players consistently choose the pink route, they will soon find themselves at a cutscene involving 2 blue characters on one side, and a pink character on the other. Shortly after, one of the blue characters separates 
                itself from the other and begins to move towards the pink one. An explosion will soon follow and all 3 entities will disappear from the scene afterwards. There are many real-life examples of gay couples 
                separating from their partners to be in a straight relationship after societal pressure. Naturally, these situations usually don't go very well. Separation rates are high in these scenarios because quite clearly, one
                party cannot commit to the relationship as much as the other can. As a result, families and relationships are often torn apart. This cutscene aims to highlight this issue. 
             </p>
             <img src={PinkCutscene} alt="" />
             <h3>The Pink Ending</h3>
             <p>
                As players continue to follow the pink route, they will arrive at the pink ending. This ending will happen inside of the maze, and the game would portray the protagonist surrounded by houses and cars before 
                the screen fades to black and white. Here, the protagonist gets to enjoy the luxury of material stuff like housing but his world fades to black and white in the end. He is also still stuck in the dark maze, implying 
                that he is still trapped in the closet.
             </p>
             <img src={PinkEnding} alt="" />
             <h3>The Blue Route</h3>
             <p>
                If players consistently choose the blue route, they will find themselves arriving at a room with very tranquil background music. Players would see both a straight and gay couple finding their partners. More importantly, the entities 
                remain in the game scene after the blue event. This is to intentionally draw contrast with the pink cutscene, indicating that both families are still intact.
             </p>
             <img src={BlueCutscene} alt="" />
             <h3>The Blue Ending</h3>
             <p>
                As players continue to follow the blue route, they will arrive at the blue ending. In the blue ending, the player will see an opening in the maze and will automatically walk out of the maze via a long bridge. A body of water around the bridge 
                can be seen, and another blue character will be waiting at the end of the bridge. This time, the screen will not fade to black and white and will remain brightly colored. 
                This ending was chosen to draw a steep contrast of the large vast open sea against the claustrophobic maze that the player was in just moments before. It also signifies that our protagonist has successfully walked out of the closet. 
             </p>
             <img src={BlueEnding} alt="" />
             <h3>Final Reflections And Thoughts</h3>
             <p>
                I have always wanted to design a game and tell a story, but most game projects I have been a part of have designated game designers for the job. It was extremely refreshing to have full creative control to produce a game with the desired mechanics, feel,
                and story exactly how I had intended. Thinking back, I also really appreciate the fact that this is an individual project. I am working on a rather touchy subject and it would be extremely hard to convince my classmates to be onboard the game idea. If you are 
                interested, feel free to download the PC / Mac version of the game by following the link below. I also have a web version, albeit less optimized, hosted on my webpage which you can play directly on the browser{" "}
                <a href="https://weixianglim.github.io/Trapped/" target="_blank" rel="noreferrer">here</a>. 
             </p><br />
         </React.Fragment>
     );
 
     // Delegate rendering to ProjectEntry component
     return (
         <ProjectEntry ref={ref} contentCallback={() => renderObj} 
         bannerImg={BannerImg} fadeScreen={true} 
         projectPrimaryTitle={projectTitle}
         btnText="View Full Info"
         playLink="https://app.box.com/s/k7zrcq1j5422qfo68u0ff1ud5uamy1id"
         />
     );
})

export default Trapped;