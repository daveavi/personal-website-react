import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'


const SideBar = (styleClasses) => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const navItems = ['Home','About', 'Projects', 'Music']

  return(

    <Drawer
      className={styleClasses.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: styleClasses.drawerPaper,
      }}
    >
    <div className={styleClasses.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftIcon style={{fill: "white", marginRight:25}}/>
      </IconButton>
    </div>

      <List>
          {navItems.map((text) => (
            <ListItem className={styleClasses.listItem} key={text}>
              <ListItemText className={styleClasses.listItemText} primary={text}/>
            </ListItem>
          ))}
      </List>
    </Drawer>

  );
}

export default SideBar;