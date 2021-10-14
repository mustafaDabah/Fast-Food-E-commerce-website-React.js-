import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        borderRadius:0,
        backgroundColor: '#eaeaea',
        height:400,
        position: 'relative',
        marginBottom:theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
          width: '100%',
       },
      },
      textUp:{
        position: 'absolute',
        top:'0px',
        left:'0px',
        backgroundColor:theme.palette.primary.main,
        padding: '5px 15px',
        color:'#fff',
        fontFamily:theme.typography.caption.fontFamily,
      },
      actionCard:{
        height:400,
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',

      },
      media: {
        height: 150,
        width: 150,
        margin: 'auto',
        borderRadius:'50%',
        display: 'flex',
        objectFit:'none',
        paddingTop:'10px'
      },
      textContent:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'#fff',
        width: '100%',
        '& button':{
          color:'#fff'
        }
      }
}))

export default useStyles