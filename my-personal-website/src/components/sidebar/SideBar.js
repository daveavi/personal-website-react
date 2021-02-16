import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import {useMenu, useMenuUpdate} from "../home/MenuContext"

import {useStyles} from './css/styles';

import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

import About from "../about/About"
import Home from "../home/Home"




const SideBar = () => {
  const classes = useStyles();
  const open = useMenu()
  const handleDrawer = useMenuUpdate()
  const navItems = ['Home','About']

  
  return (
    <Drawer 
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}>

            <IconButton onClick={handleDrawer}>
              <ChevronLeftIcon style={{fill: "white", marginRight:25, marginTop:10}}/>
            </IconButton>
            <Router>
              <List>
                {navItems.map((text) => (
                  <ListItem className={classes.listItem} key={text} component={Link} to="/${text}">
                    <ListItemText className={classes.listItemText} primary={text}/>
                  </ListItem>
                ))}
              </List>
              
              <Route path="/home" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              
            </Router>
    </Drawer>
  );
  
}

export default SideBar;