import { Button, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import useStyles from './styles';
import { HOME_PATH } from '../../../constants/Routes';

function Confirmation({userInfo}) {
    const classes = useStyles();

    return (
        <div>
            <Typography align='center' gutterBottom variant="h6">Thank you for order {userInfo.firstName} {userInfo.lastName} </Typography>
            <div className={classes.done}>
                <DoneOutlineIcon/>
            </div>
            <Button component={Link} to={HOME_PATH} variant='contained' color="primary">back to Home</Button>
        </div>
    )
}

export default Confirmation
