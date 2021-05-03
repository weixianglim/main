import './App.css';
import Navbar from "./components/Navbar"
import { HashRouter, Switch, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import React, { useRef } from 'react'

// Project entries
import MindOverMatter from './components/pages/Projects/MindOverMatter';
import Trapped from './components/pages/Projects/Trapped';
import Apotcalypse from './components/pages/Projects/Apotcalypse';
import FishieeProtecc from './components/pages/Projects/FishieeProtecc';
import Illan from './components/pages/Projects/Illan';

function App() 
{
  // Scroll target references
  const footerRef = useRef();
  const navRef = useRef();

  // React router navigation
  return (
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
  );
}

export default App;
