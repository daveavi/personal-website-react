import React from 'react';
import '../../home/css/Home.css';
import {theme} from '../../home/css/theme'

import {useStyles} from './css/styles'
import {MenuProvider} from '../../home/MenuContext'
import Header from '../../header/Header'
import SideBar from '../../sidebar/SideBar'
import { borders, borderColor } from '@material-ui/system';




import 'fontsource-roboto' 
import {ThemeProvider} from '@material-ui/core/styles'
import { createMuiTheme }  from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import projectInfo from './constants/projectsInfo'



const Projects = () => {
  const classes = useStyles();
  const muiTheme = createMuiTheme(theme)
  const projects = projectInfo

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
          <Typography className={classes.projectsHeader} variant="h1">
            Projects
          </Typography> 

          
          

          <div className={classes.projects}>

            {projects.map((item) => 
              <Card className={classes.card}> 
                <CardContent className={classes.cardContent}>
                  <Typography variant="h2">
                    {item.title}
                  </Typography>
                  
                  <Typography variant="h2" style={{marginTop:20}}>
                    {item.desc}
                  </Typography>

                </CardContent>
              </Card>
            )}
          </div>
    
        </div>
    </ThemeProvider>
    );
}

export default Projects;


