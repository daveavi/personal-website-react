import React, {useContext, useState} from 'react'

const MenuContext = React.createContext();
const MenuUpdateContext = React.createContext();

export function useMenu(){
    return useContext(MenuContext)
}

export function useMenuUpdate(){
    return useContext(MenuUpdateContext)
}



export function MenuProvider({children}) {
    const [open, setOpen] = useState(false);

    const handleDrawer = () => {
        setOpen(prevOpen => !prevOpen);
    };

    return (
        <MenuContext.Provider value={open}>
            <MenuUpdateContext.Provider value={handleDrawer}>
                {children}
            </MenuUpdateContext.Provider>
        </MenuContext.Provider>
    )
}