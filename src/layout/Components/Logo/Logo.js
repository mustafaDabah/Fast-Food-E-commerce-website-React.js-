import React from 'react'
import {Typography } from '@material-ui/core';
import { HOME_PATH } from '../../../constants/Routes';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { Link } from 'react-router-dom';
import useStyles from './styles';

function Logo() {
    const classes = useStyles();

    return (
        <div className={classes.logo}>
            <Typography component={Link} to={HOME_PATH}>
                <FastfoodIcon/>
                <Typography component="h4" color='secondary'>fast food</Typography>
            </Typography>  
        </div>
    )
}

export default Logo
