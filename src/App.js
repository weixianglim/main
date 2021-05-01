import './App.css';
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/pages/Home"
import Projects from './components/pages/Projects';
import Footer from './components/Footer';
import React, { useRef } from 'react'

function App() 
{
  // Scroll target references
  const footerRef = useRef();
  const homeRef = useRef();

  // React router navigation
  return (
    <React.Fragment>
      <Router>
        <Navbar footerElem={footerRef} navElem={homeRef}/>
        <Switch>
          <Route exact path='/home' render={() => <Home ref={homeRef} />} />
          <Route exact path='/projects' render={() => <Projects ref={homeRef} />}/>
        </Switch>
        <Footer ref={footerRef} navElem={homeRef}/>
      </Router>
    </React.Fragment>
  );
}

export default App;
