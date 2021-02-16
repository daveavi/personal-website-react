import { makeStyles }  from '@material-ui/core/styles'

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
    menuButton:{
      marginRight:16,
      marginLeft: -12
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      backgroundColor: 'black',
      color: 'white'
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      backgroundColor: 'black',
      color: 'white'
    },
    hide: {
      display: 'none'
    }   
}));

export {useStyles} ;