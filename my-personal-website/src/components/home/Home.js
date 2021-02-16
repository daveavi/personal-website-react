import React from 'react';
import './css/Home.css';
import {theme} from './css/theme'
import {useStyles} from './css/styles'
import {MenuProvider} from './MenuContext'
import Header from './header/Header'
import SideBar from './sidebar/SideBar'


import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto' 
import {ThemeProvider} from '@material-ui/core/styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn'; 
import GitHubIcon from '@material-ui/icons/GitHub';
import { createMuiTheme }  from '@material-ui/core/styles'


theme = createMuiTheme(theme)



const Home = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <Header/>
        <SideBar/>
      </MenuProvider>
        <div className="Home">
          <MenuProvider>
          
          </MenuProvider>

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

