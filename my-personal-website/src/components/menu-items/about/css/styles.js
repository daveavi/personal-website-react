import { makeStyles } from '@material-ui/core/styles'
import { CenterFocusStrong } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    aboutTitle:{
        position: 'absolute',
        fontSize: 40,
        top: '80px',
    },
    aboutDesc: {
        position: "absolute",
        fontSize: 20, 
        top: '250px',
        wordSpacing: '10px',
        backgroundColor: 'red',
        left: "1000px",
        right: "20px",
        height: "300px", 



    }
}))

export { useStyles };