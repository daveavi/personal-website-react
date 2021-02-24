import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    aboutTitle:{
        position: 'absolute',
        fontSize: 40,
        top: '80px',
    },
    aboutDesc: {
        position: "fixed",
        fontSize: 20, 
        top: '250px',
        wordSpacing: '10px',
        // backgroundColor: 'red',
        left: "200px",
        right: "20px",
        maxWidth:"2000px",
        maxHeight: "500px", 
        textAlign:"justify",
        whiteSpace: "nowrap"
    }
}))

export { useStyles };