import React from 'react';
import './App.css';

import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from "@material-ui/icons/Menu";
import ToolBar from "@material-ui/core/Toolbar"
import Typography from '@material-ui/core/Typography';

import 'fontsource-roboto' 
import { IconButton } from '@material-ui/core';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'

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
      color: 'grey'
    },
    border: 'none',
    outline: '0 !important'

  },
  listItemText:{

  }
}));

const theme =  createMuiTheme({
  typography: {
    h2: {
      fontSize: 40,
      marginBottom: 40
    }
  },
})





function App() {
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
        <div className="App">
          <header className="App-header">
          <AppBar 
          style={{ background: 'black' }} 
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}>
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
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >


        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon style={{fill: "white", marginRight:25}}/>
          </IconButton>
        </div>

          <List>
              {['Home','About', 'Projects', 'Music'].map((text) => (
                <ListItem className={classes.listItem} button key={text}>
                  <ListItemText className={classes.listItemText} primary={text}/>
                </ListItem>
              ))}
          </List>
          </Drawer>  
          <Typography variant="h2" component = "div">
            Avi Dave 
          </Typography>
          <Typography varianet= "h1">
            Self Improving, Developer, Beat Maker
          </Typography>
          </header>
        </div>
    </ThemeProvider>
    );
}

export default App;
