import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles';
import { motion } from 'framer-motion';
import { variantsHoverIcons } from '../../../Animation';

function ServiceCard({image , title}) {
    const classes = useStyles();

    return (
        <motion.div className={classes.iconContainer} whileHover={variantsHoverIcons.whileHover} whileTap={variantsHoverIcons.whileTap}>
            <img src={image} alt='icon-1' />
            <Typography variant='h5'>{title}</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, quae!</Typography>
        </motion.div>
    )
}

export default ServiceCard
