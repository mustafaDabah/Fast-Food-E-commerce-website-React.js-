import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cartTotal:{
        border:`1px solid ${theme.palette.grey[100]}`,
        padding:'25px',
        backgroundColor:'#F9F9F9',
        marginBottom:'10px',
        marginTop:'40px',
        '& h6':{
            borderBottom:`1px solid ${theme.palette.grey[400]}`,
            textAlign:'left',
            fontSize:'18px',
            padding: '15px'
        },
        '& a':{
            color:'#fff'
        }
    }
}))

export default useStyles ;