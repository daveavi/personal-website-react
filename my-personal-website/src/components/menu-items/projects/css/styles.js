import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    projectsTitle:{
        position: 'absolute',
        fontSize: 40,
        top: '80px',
    },

    grid:{
        marginTop:'300px',
        top:'1000px',
        width: '100%',
        margin: '0px'
    },

    paper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color:"white",
        backgroundColor:"red",
        height: 200,
        border:"white"
    }
}))

export { useStyles };