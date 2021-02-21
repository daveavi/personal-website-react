import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    aboutTitle:{
        position: 'absolute',
        fontSize: 40,
        top: '80px'
    },
    aboutDesc: {
        fontSize: 20, 
        // left: 20,
        // top: '80px',
        wordSpacing: '10px',
        backgroundColor: 'red'
        // marginLeft:'400px'
        // bottom:'120000px'    

    }
}))

export { useStyles };