import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'


function SideBar() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return(

    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
    <div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftIcon style={{fill: "white", marginRight:25}}/>
      </IconButton>
    </div>

      <List>
          {['Home','About', 'Projects', 'Music'].map((text) => (
            <ListItem className={classes.listItem} key={text}>
              <ListItemText className={classes.listItemText} primary={text}/>
            </ListItem>
          ))}
      </List>
    </Drawer>

  );
}