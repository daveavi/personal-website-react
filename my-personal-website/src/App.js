import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from "@material-ui/icons/Menu";
import ToolBar from "@material-ui/core/Toolbar"
import Typography from '@material-ui/core/Typography';

import 'fontsource-roboto' 
import { IconButton } from '@material-ui/core';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'


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
  hide: {
    display: 'none'
  },
  drawer:{
    
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

return (
  <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
        <AppBar style={{ background: 'black' }} position="fixed">
          <ToolBar>
            <IconButton
              className = {classes.menuButton}
              aria-label="Menu"
              color="inherit"
              onClick={handleDrawerOpen}
            >
              <MenuIcon/>
            </IconButton>
          </ToolBar>
       </AppBar>
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
