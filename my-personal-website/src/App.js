import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

import 'fontsource-roboto' 
const useStyles = makeStyles((theme) => ({
  rightToolbar: {
    marginLeft: "auto",
    marginRight:30
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
        <AppBar style={{ background: '#818b9e' }} position="fixed">
          <section className={classes.rightToolbar}>
            <Button color="inherit">About</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Music</Button>
          </section>
       </AppBar>
        <Typography variant="h2" component = "div">
          Hello! I'm Avi! 
        </Typography>
        </header>
      </div>
  </ThemeProvider>
  );
}

export default App;
