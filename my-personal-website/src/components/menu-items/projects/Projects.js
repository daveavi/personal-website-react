import React from 'react';
import '../../home/css/Home.css';
import {theme} from '../../home/css/theme'
import {useStyles} from '../../home/css/styles'
import {MenuProvider} from '../../home/MenuContext'
import Header from '../../header/Header'
import SideBar from '../../sidebar/SideBar'




import 'fontsource-roboto' 
import {ThemeProvider} from '@material-ui/core/styles'
import { createMuiTheme }  from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'





const Projects = () => {
  const classes = useStyles();
  const muiTheme = createMuiTheme(theme)

  return (
    <ThemeProvider theme={muiTheme}>
        <div className="MainLayout">
          <MenuProvider>
            <Header/>
            <SideBar/>
          </MenuProvider>
          <Typography style={{paddingBottom:650, fontSize:50, marginRight:70}}variant="h1">
            Projects
          </Typography>
        </div>
    </ThemeProvider>
    );
}

export default Projects;