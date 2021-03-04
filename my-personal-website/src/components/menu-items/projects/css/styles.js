import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    projectsHeader:{
        position: 'absolute',
        fontSize: 40,
        top: '80px',
    },

    projects:{
        maxWidth:"4000px",
        display:"flex",
        justifyContent:"center",
        flexFlow:"row wrap",
    },

    card:{
        width:500,
        height:200,
        backgroundColor:"black",
        border:"2.0px solid rgb(255, 255, 255)",
        color:"white",
        marginBottom: 20,
        marginLeft:20
    },

    cardContent:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center"
    }

}))

export { useStyles };