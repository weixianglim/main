import './App.css';
import Navbar from "./components/Navbar"
import { HashRouter, Switch, Route } from "react-router-dom"
import React, { useRef, Suspense, lazy } from 'react'
import Loading from "./components/Loading"

// Lazy load components
const Home = lazy(()=>import("./components/pages/Home"));
const Projects = lazy(()=>import("./components/pages/Projects"));
const Footer = lazy(()=>import("./components/Footer"));
const MindOverMatter = lazy(()=>import('./components/pages/Projects/MindOverMatter'));
const Trapped = lazy(()=>import('./components/pages/Projects/Trapped'));
const Apotcalypse = lazy(()=>import('./components/pages/Projects/Apotcalypse'));
const FishieeProtecc = lazy(()=>import('./components/pages/Projects/FishieeProtecc'));
const Illan = lazy(()=>import('./components/pages/Projects/Illan'));

function App() 
{
  // Scroll target references
  const footerRef = useRef();
  const navRef = useRef();

  // React router navigation
  return (
        <React.Fragment>
            <Suspense fallback={<Loading />}>
                <HashRouter basename="/">
                    <Navbar footerElem={footerRef} navElem={navRef}/>
                    <Switch>
                        <Route exact path='/' render={() => <Home ref={navRef} />} />
                        <Route exact path='/projects' render={() => <Projects ref={navRef} />}/>
                        <Route exact path='/mindovermatter' render={() => <MindOverMatter ref={navRef} />}/>
                        <Route exact path='/trapped' render={() => <Trapped ref={navRef} />}/>
                        <Route exact path='/apotcalypse' render={() => <Apotcalypse ref={navRef} />}/>
                        <Route exact path='/fishieeprotecc' render={() => <FishieeProtecc ref={navRef} />}/>
                        <Route exact path='/illan' render={() => <Illan ref={navRef} />}/>
                    </Switch>
                    <Footer ref={footerRef} navElem={navRef}/>
                </HashRouter>
            </Suspense>
        </React.Fragment>
  );
}

export default App;
