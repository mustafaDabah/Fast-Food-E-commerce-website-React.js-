import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        position:'relative',
        width: '100%',
        height: '70vh',
        overflow: 'hidden',
        backgroundImage: 'url(./images/header.jpg)',
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        zIndex:'1',
        marginBottom:'40px',
    },
    overlay:{
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        right: '0px',
        left: '0px',
        width: '100%',
        zIndex:'2',
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    titleContainer:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        height: '70vh',
        zIndex:'3',
        '& h1':{
            color:'#fff',
            fontSize:'45px',
            zIndex:'3',
            textTransform:'upperCase',
            fontWeight:'400',
            width:'100%',
            [theme.breakpoints.up('md')]: {
                width: '50%',
                fontSize:'80px',
             },
        },
        '& h3':{
            color:theme.palette.secondary.main,
            fontSize:'45px',
            zIndex:'3',
            textTransform:'upperCase',
            fontFamily:theme.typography.caption.fontFamily,
            marginBottom:'-10px'
        },
        '& a':{
            zIndex:'333',
            color:'#fff'
        }
    }
}))

export default useStyles ;