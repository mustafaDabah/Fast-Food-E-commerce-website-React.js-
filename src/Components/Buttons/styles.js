import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    circularProgress:{
        '& div':{
            width: '20px',
            height: '20px',
            marginTop: '5px'
        },
        '& svg':{
            color: '#fff',
        }
    },
}))

export default useStyles