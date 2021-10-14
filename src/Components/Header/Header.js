import { Button, Container, Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';
import useStyles from './styles';
import {ABOUT_PATH} from '../../constants/Routes'
import { motion } from 'framer-motion';
import { variantsCard } from '../../Animation';


function Header({title}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.overlay}/>
            <Container>
                 <motion.div className={classes.titleContainer} variants={variantsCard}  initial="hidden" animate="visible">
                    <Typography component='h3'> Food</Typography>
                    <Typography gutterBottom variant='h1' component='h1'>{title}</Typography>
                    <div>
                        <Button component={Link} to={ABOUT_PATH} variant='contained' color='secondary'>see more</Button>
                    </div>   
                </motion.div>
            </Container>
        </div>
    )
}

export default Header;

