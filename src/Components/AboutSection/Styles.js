import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{    
        marginBottom:'40px',    
    },
    imageOrder:{
        [theme.breakpoints.down('sm')]: {
            order:2,
        },
    }  
}))

export default useStyles