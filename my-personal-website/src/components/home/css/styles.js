import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    iconContainer: {
        paddingTop: 50,
        verticalAlign: 'middle',
        margin: '10px 0',
    },
    icon:{
        width: 50,
        height: 50,
        "&:hover, &.MuiIconButton-root": {color: "white" },
        cursor: 'pointer',
    }
}))

export { useStyles };