import React from 'react';
import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import MenuIcon from "@material-ui/icons/Menu";
import ToolBar from "@material-ui/core/Toolbar";
import { IconButton } from '@material-ui/core';



const Header = (styleClasses) => {
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <AppBar 
            style={{ background: 'black' }} 
            position="fixed"
            className={clsx(styleClasses.appBar, {
                [styleClasses.appBarShift]: open,
            })}>
                <ToolBar>
                <IconButton
                    className = {styleClasses.menuButton}
                    aria-label="Menu"
                    color="inherit"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(styleClasses.menuButton, open && styleClasses.hide)}
                >
                    <MenuIcon/>
                </IconButton>
                </ToolBar>
        </AppBar>
    );
}

export default Header;