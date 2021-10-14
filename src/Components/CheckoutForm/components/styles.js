import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    groupBtn:{ 
        display: 'flex',
        justifyContent: 'space-between' ,
        marginTop: '30px'
    },
    done:{
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: '30px',
        marginBottom: '30px',
        '& svg':{
            color: theme.palette.secondary.main,
            fontSize:'130px',
            padding:'10px'
        }
    },
    listItem:{
        padding: '10px 0'
    },
    totalPrice:{
        fontWeight: 700
    }
}));

export default useStyles;