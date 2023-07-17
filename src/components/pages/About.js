import React, { forwardRef, useState, useEffect } from 'react';
import "../../App.css"
import "./About.css"
import { Button } from "../Button"

// Importing images manually cause webpack is garbage....
import AboutImage from "../../images/about_image.png"
import CppLogo from "../../images/Skillsets/cppLogo.png"
import CLogo from "../../images/Skillsets/cLogo.png"
import UnityLogo from "../../images/Skillsets/unity.png"
import ReactLogo from "../../images/Skillsets/react.png"
import OpenGlLogo from "../../images/Skillsets/opengl.png"
import JSLogo from "../../images/Skillsets/javascript.png"
import PythonLogo from "../../images/Skillsets/python.png"
import HtmlLogo from "../../images/Skillsets/html.png"
import CssLogo from "../../images/Skillsets/css.png"
import CsharpLogo from "../../images/Skillsets/csharp.png"
import ImGuiLogo from "../../images/Skillsets/imgui.png"
import JupyterLogo from "../../images/Skillsets/jupyter.png"
import TensorflowLogo from "../../images/Skillsets/tensorflow.png"
import KerasLogo from "../../images/Skillsets/keras.png"
import BlockchainLogo from "../../images/Skillsets/blockchain.png"
import NetCoreLogo from "../../images/Skillsets/netCore.png"
import AspNetLogo from "../../images/Skillsets/aspNet.png"
import NodeJSLogo from "../../images/Skillsets/nodeJS.png"

const About = forwardRef((props, ref) => 
{
    // Initialise skillsets array
    const [skillsArr, ] = useState([
        {src: CppLogo, text: "C++"},
        {src: CLogo, text: "C"},
        {src: UnityLogo, text: "Unity"},
        {src: ReactLogo, text: "ReactJS"},
        {src: OpenGlLogo, text: "OpenGL"},
        {src: JSLogo, text: "JavaScript"},
        {src: PythonLogo, text: "Python"},
        {src: HtmlLogo, text: "HTML"},
        {src: CssLogo, text: "CSS"},
        {src: CsharpLogo, text: "C#"},
        {src: ImGuiLogo, text: "ImGui"},
        {src: JupyterLogo, text: "Jupyter"},
        {src: TensorflowLogo, text: "Tensorflow"},
        {src: KerasLogo, text: "Keras"},
        {src: BlockchainLogo, text: "Blockchain"},
        {src: NodeJSLogo, text: "Node.JS"},
        {src: NetCoreLogo, text: ".NET Core"},
        {src: AspNetLogo, text: "ASP.NET"}
    ]);

    // Called once on page load to always start at top of page
    useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

    // Proceed to render
    return (
        <div className="aboutMe" ref={ref}>
            <div className="aboutMeContainer">

                {/* About me header and icon */}
                <h1>About Me</h1>
                <img src={AboutImage} alt=""></img>
                <p>
                    I'm a Software Engineer currently working at Autodesk in the software development (AEC Design) team. I am a graduate from DigiPen Institute of Technology
                    (Singapore) holding a Bachelors of Science in Computer Science in Real-Time Interactive Simulation with Magna Cum Laude (2nd Honors, GPA: 3.75/4.00).
                    I have a deep passion for developing anything that piques my interest, ranging from games to websites and applications.
                </p>
                <p>
                    My skillset / techstack includes:
                </p>

                {/* Skillsets and icons */}
                <div className="skillsContainer">
                    {skillsArr.map((elem, i) =>
                        <div className="skill-item" key={i}>
                            <img src={elem.src} alt=""></img>
                            <p>{elem.text}</p>
                        </div>
                    )}
                </div> 

                {/* Segway paragraph */}
                <h2>
                    What do you do, exactly?
                </h2>
                <p>
                    I am mainly specialized in C++, it is what I work with everyday. I do all sorts of stuff with the language, ranging 
                    from games to engines and even computer graphics. I love to venture out into other stuff as well. 
                    I adore front-end web development and have also dipped my toes into A.I. and Machine Learning with
                    high level languages like Python.
                </p>
                <h2>
                    Do you have anything to showcase?
                </h2>
                <p>
                    Of course! We can start right here - this very webpage was created with ReactJS and has fully functioning  
                    mobile compatibility. I started off web development with vanilla JavaScript and CSS, before getting really drained
                    out with mobile-scaling issues. That was when I looked into Bootstrap and Tailwind, and got exposed to ReactJS at
                    the same time. I have been in love with React ever since and this webpage is the fruit of my 2-weeks labor with
                    the library. 
                </p>
                <p className="custom">
                    As I am mainly specialized in C++, I have made many games along my journey as well. If you are interested 
                    to see more of my work, click the button below to see a gallery of featured projects!
                </p>

                {/* Projects gallery redirection */}
                <Button buttonStyle="btn--outline--dark" linkTo="/projects">
                    Show Me More!
                </Button>

            </div> {/* End aboutMeContainer */}
        </div>
    );
})

export default About;