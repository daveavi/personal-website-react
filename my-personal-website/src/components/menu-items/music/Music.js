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






const Music = () => {
  const classes = useStyles();
  const muiTheme = createMuiTheme(theme)

  return (
    <ThemeProvider theme={muiTheme}>
        <div className="Home">
          <MenuProvider>
            <Header/>
            <SideBar/>
          </MenuProvider>
          <h1>
              Music!!!
          </h1>
        </div>
    </ThemeProvider>
    );
}

export default Music;