import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root:{
    marginTop:'-5px',
    backgroundColor:'#151310',
    padding:'20px',
    
  },
  logoContainer: {
    [theme.breakpoints.down('sm')]: {
      flexDirection:'column',
      padding:'10px',
      textAlign:'center'
    },
    },
    socialLink:{
      flex: 1,
      display: 'flex',
      '& svg':{
        color:theme.palette.secondary.main,
        padding:'8px',
        transition:'all 0.8s ease',
        border:`1px solid ${theme.palette.secondary.main}`,
        borderRadius:'50%',
        marginRight:'5px'
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom:'10px',
        marginTop:'10px'
      }, 
    },
    phoneNumber:{
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',
      color:theme.palette.grey[300],
      '& svg':{
        color:theme.palette.secondary.main,
        paddingLeft:'5px'
      },
      
    },
    listItems:{
      marginTop:'40px',
      '& a':{
        color:theme.palette.grey[300],
        textDecoration:'none',
        transition:'all 0.5s ease'
      },
      '& a:hover': {
        color:theme.palette.primary.main,
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    },
    copyRight:{
      marginTop:'40px',
      '& h3':{
        color:theme.palette.grey[300],
        [theme.breakpoints.down('sm')]: {
          width:'100%',
        },
      },
      [theme.breakpoints.down('sm')]: {
        marginTop:'0px',
      },
    },
    toolsUsed:{
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    }
}))

export default useStyles