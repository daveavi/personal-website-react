import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar';
import MenuIcon from "@material-ui/icons/Menu";
import ToolBar from "@material-ui/core/Toolbar"
import Typography from '@material-ui/core/Typography';

import 'fontsource-roboto' 
import { IconButton } from '@material-ui/core';
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
}));

const theme =  createMuiTheme({
  typography: {
    h2: {
      fontSize: 40,
      marginBottom: 40
    }
  },
})



function CheckboxExample(){
  const[checked, setChecked] = React.useState(true)
  return (
    <div>
    <FormControlLabel
      control = {<Checkbox 
        checked={checked}
        icon = {<SaveIcon/>}
        checkedIcon = {<SaveIcon/>}
        onChange = {(e) => setChecked(e.target.checked)}
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />}
      label = "Testing Checkbox"
    />
  </div>
)
}


function App() {
  const classes = useStyles();

return (
  <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
        <AppBar style={{ background: '#282c34' }} position="fixed">
          <ToolBar>
            <IconButton
              className = {classes.menuButton}
              aria-label="Menu"
              color="inherit"
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
