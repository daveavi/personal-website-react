import React from 'react';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import MenuIcon from "@material-ui/icons/Menu";
import ToolBar from "@material-ui/core/Toolbar";
import { IconButton } from '@material-ui/core';





function Header(){
    
    return (
        <AppBar 
            style={{ background: 'black' }} 
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}>
                <ToolBar>
                <IconButton
                    className = {classes.menuButton}
                    aria-label="Menu"
                    color="inherit"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon/>
                </IconButton>
                </ToolBar>
        </AppBar>
    );
}