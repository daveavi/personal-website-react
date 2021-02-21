import React from 'react';
import './css/Home.css';
import {theme} from './css/theme'
import {useStyles} from './css/styles'
import {MenuProvider} from './MenuContext'
import Header from '../header/Header'
import SideBar from '../sidebar/SideBar'
import Intro from './content/Intro'
import Icon from './content/Icon'



import 'fontsource-roboto' 
import {ThemeProvider} from '@material-ui/core/styles'
import { createMuiTheme }  from '@material-ui/core/styles'






const Home = () => {
  const classes = useStyles();
  const muiTheme = createMuiTheme(theme)

  return (
    <ThemeProvider theme={muiTheme}>
        <div className="MainLayout">
          {/* <MenuProvider>
            <Header/>
            <SideBar/>
          </MenuProvider> */}
          <div id="homePage">
            <Intro />
            <Icon icon={classes.icon} iconContainer={classes.iconContainer}/>
          </div>
        </div>
    </ThemeProvider>
    );
}





export default Home;

