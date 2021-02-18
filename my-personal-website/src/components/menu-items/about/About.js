import React from 'react';
import '../../home/css/Home.css';
import {MenuProvider} from '../../home/MenuContext'
import Header from '../../header/Header'
import SideBar from '../../sidebar/SideBar'




import 'fontsource-roboto' 
import Typography from '@material-ui/core/Typography'






const About = () => {

  return (
      <div className="Home">
        <MenuProvider>
          <Header/>
          <SideBar/>
        </MenuProvider>
        <div>
          <Typography style={{paddingBottom:650, fontSize:50, marginRight:70}}variant="h1">
            About
          </Typography>

          <Typography style={{fontSize: 20}} variant="p">
          Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum.
          </Typography>
        </div>
        <img>
        
        </img>

      </div>
    );
}

export default About;