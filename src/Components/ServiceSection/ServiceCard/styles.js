import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    iconContainer:{
        textAlign:'center',
        cursor:'pointer',
        '& h5':{
            color:theme.palette.grey['A400'],
            textTransform:'capitalize',
        },
        '& p':{
            color:theme.palette.grey[700],
            width:'150px',
            marginRight:'auto',
        }
    }
}))

export default useStyles ;