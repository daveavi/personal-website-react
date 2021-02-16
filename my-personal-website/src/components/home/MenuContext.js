import React, {useContext, useState} from 'react'

const MenuContext = React.createContext();
const MenuUpdateContext = React.createContext();

export function useMenu(){
    return useContext(MenuContext)
}

export function useMenuUpdate(){
    return useMenuUpdate(MenuUpdateContext)
}



export function MenuProvider({children}) {
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        setOpen(prevOpen => !prevOpen);
    };

    return (
        <MenuContext.Provider value={open}>
            <MenuUpdateContext value={handleDrawer}>
                {children}
            </MenuUpdateContext>
        </MenuContext.Provider>
    )
}