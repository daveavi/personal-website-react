import React from 'react';
import './css/Home.css';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from "@material-ui/icons/Menu";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';

import 'fontsource-roboto' 
import { IconButton } from '@material-ui/core';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'


import LinkedInIcon from '@material-ui/icons/LinkedIn'; 
import GitHubIcon from '@material-ui/icons/GitHub';

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
  rightToolbar: {
    marginLeft: "auto",
    marginRight:30,
    paddingBottom: theme.spacing(1)
  }, 
  menuButton:{
    marginRight:16,
    marginLeft: -12
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'black',
    color: 'white'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: 'black',
    color: 'white'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'black',
    color: 'white',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  listItem:{
    '&:hover $listItemText': {
      color: 'grey',
      cursor: 'pointer'
    },
  },
  listItemText:{
    
  },
  iconContainer: {
    paddingTop: 50,
    verticalAlign: 'middle',
    margin: '10px 0',
  },
  icon:{
    width: 40,
    height: 40,
    "&:hover, &.MuiIconButton-root": {color: "white" },
    cursor: 'pointer',
  }
}));


const theme =  createMuiTheme({
  typography: {
    h1: {
      fontSize: 40,
      marginBottom: 30
    },
    h2:{
      fontSize: 20
    }
  },

  div: {
    "fontFamily": `"Roboto", "Helvetica", "Arial", sans-serif`,
  }
})





const Home = () => {
  const classes = useStyles();
  

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
        <div className="Home">

          {/* this is my header */}
          <AppBar 
          style={{ background: 'black' }} 
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          >
            <ToolBar>
              <IconButton
                className = {classes.menuButton}
                aria-label="Menu"
                color="inherit"
                onClick={handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, open && classes.hide)}
              >
                <MenuIcon/>
              </IconButton>
            </ToolBar>
          </AppBar>

        {/* This is the side bar */}
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >


      
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{fill: "white", marginRight:25, marginTop:10}}/>
          </IconButton>

          <List>
              {['Home','About', 'Projects', 'Music'].map((text) => (
                <ListItem className={classes.listItem} key={text}>
                  <ListItemText className={classes.listItemText} primary={text}/>
                </ListItem>
              ))}
          </List>
        </Drawer>

          <div id="introDiv">
            <Typography variant="h1">
              Avi Dave 
            </Typography>

            <Typography variant="h2">
              Self Improving, Developer, Beat Maker
            </Typography>
          </div>

          <div className={classes.iconContainer}>
            <a href="https://www.linkedin.com/in/avi-dave-854715164/" class="href-class" target="_blank">
              <LinkedInIcon  className={classes.icon} />
            </a>
            <a href="https://github.com/daveavi" class="href-class" target="_blank">
              <GitHubIcon className={classes.icon} style={{marginLeft: '50'}}/>
            </a>
          </div>

          
        </div>
    </ThemeProvider>
    );
}

export default Home;

