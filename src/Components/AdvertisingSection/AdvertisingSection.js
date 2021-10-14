import React from 'react'
import { Button, Typography } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import {ABOUT_PATH} from '../../constants/Routes'
import { motion  } from 'framer-motion';
import { variantsCard } from '../../Animation';
import useAnimationInView from '../../Hooks/useAnimationInView';


function AdvertisingSection() {
    const classes = useStyles();
    const {ref , controls} = useAnimationInView();
    

    return (
        <div className={classes.root} >
            <div className={classes.overlay} />
                 <motion.div ref={ref} className={classes.titleContainer} variants={variantsCard}  initial="hidden" animate={controls}>
                    <Typography component='h3'> Food</Typography>
                    <Typography gutterBottom variant='h1' component='h1'>Your food is waiting for you </Typography>
                    <div>
                        <Button component={Link} to={ABOUT_PATH} variant='contained' color='secondary'>see more</Button>
                    </div>   
             </motion.div>
        </div>
    )
}

export default AdvertisingSection;
