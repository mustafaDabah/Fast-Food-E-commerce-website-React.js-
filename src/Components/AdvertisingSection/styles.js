import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        position:'relative',
        width: '100%',
        height: '40vh',
        overflow: 'hidden',
        backgroundImage: 'url(./images/image.jpg)',
        backgroundPosition: 'right',
        backgroundSize: 'cover',
        zIndex:'1',
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
        alignItems:'center',
        height: '35vh',
        zIndex:'3',
        '& h1':{
            color:'#fff',
            fontSize:'45px',
            zIndex:'3',
            textTransform:'upperCase',
            fontWeight:'400',
            width:'100%',
            textAlign:'center'
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