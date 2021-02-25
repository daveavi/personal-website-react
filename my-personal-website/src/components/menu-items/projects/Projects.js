import React from 'react';
import '../../home/css/Home.css';
import {theme} from '../../home/css/theme'

import {useStyles} from './css/styles'
import {MenuProvider} from '../../home/MenuContext'
import Header from '../../header/Header'
import SideBar from '../../sidebar/SideBar'





import 'fontsource-roboto' 
import {ThemeProvider} from '@material-ui/core/styles'
import { createMuiTheme }  from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';





const Projects = () => {
  const classes = useStyles();
  const muiTheme = createMuiTheme(theme)

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xl={12}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xl={12}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }


  return (
    <ThemeProvider theme={muiTheme}>
        <div className="MainLayout">
          <MenuProvider>
            <Header/>
            <SideBar/>
          </MenuProvider>
          <Typography className={classes.projectsTitle} variant="h1">
            Projects
          </Typography> 

          
          <Grid container spacing={2} className ={classes.grid}>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>Personal Wesbite</Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>Twitter Focus</Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>Vesta</Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>Place Replica</Paper>
            </Grid>
          </Grid>
         
      
        </div>
    </ThemeProvider>
    );
}

export default Projects;