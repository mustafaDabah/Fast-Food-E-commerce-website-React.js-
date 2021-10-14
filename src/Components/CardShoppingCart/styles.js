import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    itemRow:{
        width:'120px',
        textAlign:'center'
    },
    card:{
        marginBottom:'10px',
        marginTop:'20px',
        [theme.breakpoints.down('sm')]: {
            marginBottom:'20px',
            flexDirection:'column',
            border:`1px solid ${theme.palette.grey[400]}`,
            padding:'15px'
        },
    },  
    media: {
        height: 120,
        width: 120,
        borderRadius:'50%',
        display: 'flex',
        objectFit:'none'
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    delete:{
        color:'#fff'
    },
}))

export default useStyles ;