import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import {useMenu, useMenuUpdate} from "../MenuContext"

import {useStyles} from './css/styles';




const SideBar = () => {
  const classes = useStyles();
  const open = useMenu()
  const handleDrawer = useMenuUpdate()
  const navItems = ['Home','About','Projects','Music']
  
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
            <List>
              {navItems.map((text) => (
                <ListItem className={classes.listItem} key={text}>
                  <ListItemText className={classes.listItemText} primary={text}/>
                </ListItem>
              ))}
          </List>
    </Drawer>
  );
  
}

export default SideBar;