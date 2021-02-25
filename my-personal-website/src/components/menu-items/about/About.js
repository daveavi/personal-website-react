import React from 'react';
import '../../home/css/Home.css';
import {useStyles} from './css/styles'
import {MenuProvider} from '../../home/MenuContext'
import Header from '../../header/Header'
import SideBar from '../../sidebar/SideBar'




import 'fontsource-roboto' 
import Typography from '@material-ui/core/Typography'






const About = () => {
  const classes = useStyles();
  return (
      <div className="MainLayout">
        <MenuProvider>
          <Header/>
          <SideBar/>
        </MenuProvider>

        <Typography className={classes.aboutTitle} variant="h1">
          About Me
        </Typography>
        
        <div className={classes.aboutDesc}>
          <Typography variant="p">
            Greetings! My name is Avi, and welcome to my personal website! 
            <br></br>It would be hard to describe myself 
            as just a software developer, but just like my 
            <br></br>home page the best I would describe myself is, 
            <br></br>I am a self-improving developer who also enjoys making beats! 
            <br></br>For the past few years, life has taken me to interesting places in my personal development, 
            <br></br>to become adventourous and see where my creativity can take me.  
          </Typography>
        </div>
        
        <img>
        
        </img>

      </div>
    );
}

export default About;