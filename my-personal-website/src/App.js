import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {orange, green} from '@material-ui/core/colors'
import 'fontsource-roboto' 

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';  
const useStyles = makeStyles({
  root:{
    background: 'linear-gradient(45deg,#333, #999)',
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: '0 30px'
  }
})

const theme =  createMuiTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15
    }
  },
})

function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Styles Button</Button>
}


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
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">
          <AppBar>
            <Toolbar>
              <IconButton>
                <MenuIcon/>
              </IconButton>
              <Typography variant="h6">
                MUI Themeing
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h2" component = "div">
            Welcome to MUI
          </Typography>
          <Typography variant="body1">
            Learn how to use Material Ui
          </Typography>
          <ButtonStyled />
            <br></br>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Paper style={{height:75, width:100 }}/>
              </Grid>
              <Grid item>
                <Paper style={{height:75, width:100 }}/>
              </Grid>
              <Grid item>
                <Paper style={{height:75, width:100 }}/>
              </Grid>
            </Grid>          
            <br></br>
          <TextField 
            variant = "outlined"
            color = "secondary"
            type = "email"
            label = "The Time"
            value = "test@test.com"
          />
          <CheckboxExample />
          <ButtonGroup variant="contained" color="primary">
            <Button
              endIcon ={<SaveIcon/>}
              size="large" 
              variant="contained" 
            >
                Save
            </Button>
            <Button
              endIcon ={<DeleteIcon/>}
              size="large" 
              variant="contained" 
              >
                Discard 
            </Button>

          </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
