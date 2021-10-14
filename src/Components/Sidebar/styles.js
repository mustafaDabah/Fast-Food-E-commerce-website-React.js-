import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    // closeRoot: {
    //     width: '100%',
    //     borderRadius:theme.shape.borderRadius,
    //     backgroundColor: '#fafafa',
    //     marginBottom:theme.spacing(2),
    //     border:`2px solid ${theme.palette.grey[100]}`,
    //     [theme.breakpoints.down('sm')]: {
    //       display: 'none'
    //     },
    //   },
    //   openRoot: {
    //     width: '100%',
    //     borderRadius:theme.shape.borderRadius,
    //     backgroundColor: '#fafafa',
    //     marginBottom:theme.spacing(2),
    //     border:`2px solid ${theme.palette.grey[100]}`,
    //     [theme.breakpoints.down('sm')]: {
    //       display: 'block'
    //     },
    //   },
      title:{
        color: theme.palette.grey['A400'],
        borderBottom:`2px solid ${theme.palette.secondary.main}`,
        width:'100px',
        margin:'auto',
        marginBottom:'15px'
      },
      list:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'flex-start',
        '& Button':{
          marginBottom:'12px'
        },
      },
      icon:{
        border:`2px solid ${theme.palette.grey[600]}`,
        width:'30px',
        justifyContent:'center',
        display:'none',
        '& svg':{
          color: theme.palette.grey[600],
        },
        [theme.breakpoints.down('sm')]: {
          display:'flex',
        },
      }

}))

export default useStyles ;