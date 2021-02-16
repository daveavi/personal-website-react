import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../css/Home.css';

const Icon = ({iconContainer, icon}) => {
    return(
        <div className={iconContainer}>
            <a href="https://www.linkedin.com/in/avi-dave-854715164/" class="href-class" target="_blank">
              <LinkedInIcon  className={icon} />
            </a>
            <a href="https://github.com/daveavi" class="href-class" target="_blank">
              <GitHubIcon className={icon} style={{marginLeft: '50'}}/>
            </a>
        </div>
    );
}

export default Icon;