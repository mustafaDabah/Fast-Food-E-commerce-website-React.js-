import React from 'react'
import {  Container, Grid} from '@material-ui/core'
import useStyles from './Styles';
import AboutTitle from './Components/AboutTitle';
import AboutImage from './Components/AboutImage';
import { variantsAboutLeft, variantsAboutRight } from '../../Animation';

function AboutSection({image , isImageRight = true}) {
    const classes = useStyles();
    
    return (
        <Container>
            {/* -- condition to change image order -- */}
            {isImageRight ? (
                <Grid className={classes.root} container spacing={10} justifyContent="space-between" alignItems="center">
                    <Grid item xs={12} md={6} >
                        <AboutTitle animate={variantsAboutLeft} />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <AboutImage image={image} animate={variantsAboutRight}/>
                    </Grid>
                </Grid>
            ):(
                <Grid className={classes.root} container spacing={3} justifyContent="space-between" alignItems="center">
                    <Grid className={classes.imageOrder} item xs={12} md={6} >
                       <AboutImage image={image} animate={variantsAboutLeft} />
                    </Grid>
                    <Grid item xs={12} md={6} >
                       <AboutTitle animate={variantsAboutRight}/>
                    </Grid>
                </Grid>
            )}
        </Container>
    )
}

export default AboutSection
