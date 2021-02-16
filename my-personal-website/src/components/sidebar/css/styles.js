import {makeStyles} from '@material-ui/core/styles'

const drawerWidth = 100;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: 'black',
        color: 'white',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
  listItem:{
    '&:hover $listItemText': {
      color: 'grey',
      cursor: 'pointer'
    },
  },
  listItemText:{

  }
}));

export { useStyles };