import React from 'react';
import { motion } from 'framer-motion';
import useAnimationInView from '../../../Hooks/useAnimationInView';
import useStyles from './styles';


function AboutImage({image , animate}) {
    const classes = useStyles();
    const {ref , controls} = useAnimationInView();

    return (
        <motion.div variants={animate} ref={ref} initial="hidden" animate={controls} className={classes.image}>
             <img src={image} alt='about' />
        </motion.div>
    )
}

export default AboutImage;
