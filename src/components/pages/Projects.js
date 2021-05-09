import React, { useState, forwardRef, useRef, useEffect, Suspense, lazy } from 'react';
import "../../App.css"
import Cards from '../Cards';
import Loading from "../Loading"

// Importing assets manually cause webpack..
import ProjectsPageBg from "../../images/ProjectsBG.gif"

// Project thumnails..
import MindOverMatterTn from "../../images/Projects/MindOverMatter/MindOverMatter.png"
import TrappedTn from "../../images/Projects/Trapped/Trapped.png"
import ApotcalypseTn from "../../images/Projects/Apotcalypse/Apotcalypse.png"
import FishieeTn from "../../images/Projects/FishieeProtecc/FishieeProtecc.png"
import IllanTn from "../../images/Projects/Illan/Illan.png"

// Lazy load components
const Banner = lazy(()=>import("../Banner"));

// Forward ref is used to propagate the element up to the parent.
// Currently used to scroll from navbar to this element.
const Projects = forwardRef((props, ref) => 
{ 
    // State variables
    const [arrCardsMain, ] = useState(
        [
            {src: MindOverMatterTn, desc: "MindOverMatter is a 2D-puzzle platformer built from scratch on a custom 2D game engine. You play as a protagonist possessing the ability to freely toggle between 3 states - Solid, Liquid, and Gas. Each state allows you to maneuver through different environmental obstacles while providing you with unique skills and abilities.", label: "MindOverMatter", linkTo: "/MindOverMatter"},
            {src: ApotcalypseTn, desc: "Apotcalypse is a colony simulator built on a custom 3D engine whereby the player has to manage a very crucial resource - Frulets! These cute bubbly creatures are indispensable and are necessary to stop the impending Apotcalypse.", label: "Apotcalypse", linkTo: "/apotcalypse"}
        ]
    );
    const [arrCardsRest, ] = useState(
        [
            {src: IllanTn, desc: "Illan wakes up and finds himself in a world dyed in black and white. He realised later on that he possesses the power to restore colors to the world. As Illan progresses and solves various puzzles throughout his journey, parts of the map will get lit up and colored. Eventually, Illan will regains memories and restores his world back to its original state. ", label: "Illan: Shades of Memories", linkTo: "/illan"},
            {src: TrappedTn, desc: "Trapped follows the life of a closeted protagonist as he tries to maneuver and escape through a dark maze. Throughout this journey, he is faced with societal judgement, fear and challenges. He has to make decisions along the maze which will lead him to different endings. Which route will he ultimately end up in?", label: "Trapped", linkTo: "/trapped"},
            {src: FishieeTn, desc: "FishieProtecc is a fast-paced game which will strain the players reaction speeds and planning abilities. It is my freshman project in DigiPen and was nominated for Gumi Asia's Best Freshman Game award.", label: "FishieeProtecc", linkTo: "/fishieeprotecc"}
        ]
    );

    // Reference elements for target scrolling
    const projectsRef = useRef();

    // Called once on page load to always start at top of page
    useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

    return (
        <Suspense fallback={<Loading />}>
            <div ref={ref}>
                <Banner scrollTarget={projectsRef} btnText="Featured Projects"
                bannerPrimaryTitle="Projects" 
                bannerSubTitle="Welcome to my laboratory."
                imgSrc={ProjectsPageBg}
                />
                <Cards ref={projectsRef}
                title={"Featured Projects"} 
                cardsMain={arrCardsMain} 
                cardsRest={arrCardsRest} 
                />
            </div>
        </Suspense>
    );
})

export default Projects;