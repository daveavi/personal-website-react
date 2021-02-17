import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home/Home';
import About from './components/about/About'

import { BrowserRouter as Router ,Route, Switch} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    {/* <Home /> */}
    <Router>
      <Home />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/About" exact component={About}/>
          <Route path="/Home" exact  component={Home}/> 
        </Switch> 
    </Router>
  
    
  

  </React.StrictMode>,
  document.getElementById('root')
);

