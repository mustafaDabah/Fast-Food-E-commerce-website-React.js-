import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    info:{
        '& h3':{
            color:theme.palette.secondary.main,
            fontSize:'45px',
            textTransform:'upperCase',
            fontFamily:theme.typography.caption.fontFamily,
            marginBottom:'-10px',
        },
        '& h4':{
            color:theme.palette.grey['A400'],
            textTransform:'upperCase',
        },
        '& p':{
            color:theme.palette.grey[700],
            marginBottom:'10px'
        },
        '& a':{
            color:'#fff'
        },
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    image:{
        '& img':{
            boxShadow:`0px 0px 6px 1px rgb(0 0 0 / 50%)`,
            width:'100%',
            borderRadius:theme.shape.borderRadius,
        },
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        },
    }  
}))

export default useStyles