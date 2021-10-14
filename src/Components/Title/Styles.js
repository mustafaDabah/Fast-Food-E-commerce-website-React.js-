import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    titleContainer:{
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center' ,
        zIndex:'3',
        marginBottom:'20px',
        '& h3':{
            color:theme.palette.secondary.main,
            fontSize:'45px',
            textTransform:'upperCase',
            fontFamily:theme.typography.caption.fontFamily,
            marginBottom:'-10px'
        },
    },
    subTitle:{
        color:theme.palette.grey['A700'],
        fontSize:'25px',
        textTransform:'upperCase',
        fontWeight:'400',
        position:'relative',
        borderBottom:`1px solid ${theme.palette.secondary.main}`,
        lineHeight:1.7
    }
}))

export default useStyles ;