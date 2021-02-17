import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/Home';
import About from './components/menu-items/about/About'
import Music from './components/menu-items/music/Music'
import Projects from './components/menu-items/projects/Projects'

import { BrowserRouter as Router ,Route, Switch} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
          <Route path="/" exact  component={Home}/> 
          <Route path="/Home" exact  component={Home}/> 
          <Route path="/About" exact component={About}/>
          <Route path="/Projects" exact  component={Projects}/> 
          <Route path="/Music" exact  component={Music}/> 
          <Route path="/About" exact component={About}/>
        </Switch> 
    </Router>
  
    
  

  </React.StrictMode>,
  document.getElementById('root')
);

