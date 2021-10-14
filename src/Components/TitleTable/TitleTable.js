import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { TitleTableDetails } from '../../utils/TitleTableDetails';
import useStyles from './styles';

function TitleTable() {
    const classes = useStyles();

    return (
        <Box className={classes.title} display='flex' justifyContent="space-between" flexWrap='wrap' alignContent='center' alignItems='center'>
            {TitleTableDetails.map((item , index) => (
                <Typography key={index} className={classes.itemRow} variant='subtitle2' >{item}</Typography>
            ))}
        </Box>
    )
}

export default TitleTable
