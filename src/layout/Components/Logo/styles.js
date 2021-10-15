import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    logo:{
        flex:1,
        textDecoration:'none',
        '& a':{
          textDecoration:'none',
          display: 'flex',
          marginLeft:'10px',
          alignItems:'center',
        },
        '& img':{
          width:'100%'
        },
        '& svg':{
          fontSize:theme.spacing(5),
          color:theme.palette.secondary.main
        },
        '& h4':{
          fontSize:theme.spacing(3),
          fontWeight:'bold',
          fontFamily:theme.typography.caption.fontFamily,
        },
        [theme.breakpoints.down('md')]: {
          marginRight:'15px' ,
        },
    },
}))

export default useStyles;