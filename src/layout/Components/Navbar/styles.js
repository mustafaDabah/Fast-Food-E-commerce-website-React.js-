import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        boxShadow:'none',
        background:'#fff',
      },
      container:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width: '81%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '24px',
        paddingRight:'24px',
        [theme.breakpoints.down('md')]:{
          width:'100%',
          paddingLeft: '0px',
          paddingRight:' 0px',
        }
      },
      listItemClose:{
        transition: 'all 0.5s ease',
        flex:1,
        [theme.breakpoints.down('md')]: {
          flexDirection:'column',
          position: 'absolute',
          top: '50px',
          height: '200px',
          backgroundColor: '#fff',
          zIndex: '20',
          overflow: 'hidden',
          right:'-1200px',
          transform: 'translateX(50%)',
        },
      },
      listItemOpen:{
        paddingLeft:'30px',
        transition:'all 0.5s ease',
        flex:1,
        [theme.breakpoints.down('md')]: {
          flexDirection:'column',
          position: 'absolute',
          top: '50px',
          height: '200px',
          backgroundColor: '#fff',
          zIndex: '20',
          overflow: 'hidden',
          right:'50%',
          transform: 'translateX(50%)',
        },
      },
      linkItems:{
        color:theme.palette.grey['A400'],
        textDecoration:'none',
        padding: theme.spacing(1),
        fontSize:theme.spacing(1.9)
      },
      menuButton: {
        display: 'none',
        color:theme.palette.grey['A400'],
        [theme.breakpoints.down('md')]: {
          display: 'block',
        },
      },
      favorite:{
        color:theme.palette.grey['A400'],
        textDecoration:'none',
        display: 'flex',
        '&  svg':{
          fontSize:' 25px',
        }
      }
}))

export default useStyles;