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
          What's up! My name is Avi, and welcome to my personal website! It would be hard to describe myself 
          as just a software developer, but just like my home page the best I would describe myself is, 
          I am a self-improving developer who also enjoys making beats! For the past few years
          life has taken me to interesting places in my personal development, to become adventourous and see where my creativity can take me. I have struggled with trying to prove
          I am somebody in the tech space, and having to prove my worthiness that I could build projects on my own
          be the typical developer an employer would want, a person that is enthusiastic about tech. Well, although I wanted these 
          external results, I felt a lack of morale to keep myself from learning and diving deep into learning new technologies
          </Typography>
        </div>
        
        <img>
        
        </img>

      </div>
    );
}

export default About;