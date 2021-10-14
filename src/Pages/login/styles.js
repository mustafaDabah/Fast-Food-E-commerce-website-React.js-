import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        height: '70vh',
        boxShadow:theme.shadows[4],
        marginTop:'60px',
        width:'300px',
        maxWidth:'85%',
        margin: 'auto',
        padding:'20px',
        borderRadius:theme.shape.borderRadius,

    },
    btnGroup:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        width:'100%',
        marginTop:'20px',
        '& button':{
            marginTop:'15px',
            width:'100%',
            margin: 'auto',
        },
        '& a':{
            marginTop:'15px',
            width:'100px',
        }
    }
}))

export default useStyles;