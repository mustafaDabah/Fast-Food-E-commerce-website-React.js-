import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    title:{
        borderBottom:`1px solid ${theme.palette.grey[400]}`,
        padding: '15px 0px',
        marginTop:'40px',
        [theme.breakpoints.down('sm')]: {
            display:'none',
        },
    },
    itemRow:{
        width:'120px',
        textAlign:'center'
    },
}))

export default useStyles ;