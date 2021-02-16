import React from 'react';
import './css/Home.css';
import {theme} from './css/theme'
import {useStyles} from './css/styles'
import {MenuProvider} from './MenuContext'
import Header from './header/Header'
import SideBar from './sidebar/SideBar'
import Intro from './content/Intro'
import Icon from './content/Icon'



import 'fontsource-roboto' 
import {ThemeProvider} from '@material-ui/core/styles'
import LinkedInIcon from '@material-ui/icons/LinkedIn'; 
import GitHubIcon from '@material-ui/icons/GitHub';
import { createMuiTheme }  from '@material-ui/core/styles'



const MuiTheme = createMuiTheme(theme)



const Home = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={MuiTheme}>
        <div className="Home">
          <MenuProvider>
            <Header/>
            <SideBar/>
          </MenuProvider>
          <Intro />
          <Icon icon={classes.icon} iconContainer={classes.iconContainer}/>
        </div>
    </ThemeProvider>
    );
}

export default Home;

