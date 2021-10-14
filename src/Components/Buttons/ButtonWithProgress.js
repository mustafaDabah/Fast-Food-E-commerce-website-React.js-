import React from 'react';
import { Button , CircularProgress } from '@material-ui/core';
import useStyles from './styles';


function ButtonWithProgress({type , onClick , loading , text }) {
    const classes = useStyles();

    return (
        <Button onClick={onClick} variant="contained" color="primary" type={type}>
            {loading ? (
                <div className={classes.circularProgress}>
                        <CircularProgress size="18" />
                </div>
            ) : text }
        </Button>
    )
}

export default ButtonWithProgress
