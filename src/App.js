import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Projects from './components/pages/Projects';
import ProjectEntry from './components/pages/ProjectEntry';
import Footer from './components/Footer';
import React, { useRef } from 'react'

function App() 
{
  // Scroll target references
  const footerRef = useRef();
  const navRef = useRef();

  // React router navigation
  return (
    <React.Fragment>
      <Router>
        <Navbar footerElem={footerRef} navElem={navRef}/>
        <Switch>
          <Route exact path='/home' render={() => <Home ref={navRef} />} />
          <Route exact path='/projects' render={() => <Projects ref={navRef} />}/>
          <Route exact path='/projectentry' render={() => <ProjectEntry ref={navRef} />}/>
        </Switch>
        <Footer ref={footerRef} navElem={navRef}/>
      </Router>
    </React.Fragment>
  );
}

export default App;
