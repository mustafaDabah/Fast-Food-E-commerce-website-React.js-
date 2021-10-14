import React from 'react'
import { Button, Typography } from '@material-ui/core'
import useStyles from '../Styles';
import { Link } from 'react-router-dom';
import {ABOUT_PATH} from '../../../constants/Routes'
import { motion } from 'framer-motion';
import useAnimationInView from '../../../Hooks/useAnimationInView';

function AboutTitle({animate}) {
    const classes = useStyles();
    const {ref , controls} = useAnimationInView();

    return (
        <motion.div  ref={ref} className={classes.info} animate={controls} variants={animate} initial="hidden">
            <Typography component='h3'> Food</Typography>
            <Typography gutterBottom variant='h4'>Your food is waiting for you </Typography>
            <Typography variant='subtitle2' gutterBottom>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias saepe quidem qui deleniti, omnis delectus, consequuntur, rem at distinctio architecto laudantium nihil nesciunt eligendi eum dolore? Cum consequuntur quo corrupti.
            </Typography>
            <div>
                <Button component={Link} to={ABOUT_PATH} variant='contained' color='secondary'>see more</Button>
            </div>
        </motion.div>
    )
}

export default AboutTitle
