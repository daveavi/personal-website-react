import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/Home';
import About from './components/about/About'

import { BrowserRouter as Router ,Route, Switch} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Home /> */}
        <Switch>
          <Route path="/" exact  component={Home}/> 
          <Route path="/Home" exact  component={Home}/> 
          <Route path="/About" exact component={About}/>
        </Switch> 
    </Router>
  
    
  

  </React.StrictMode>,
  document.getElementById('root')
);

