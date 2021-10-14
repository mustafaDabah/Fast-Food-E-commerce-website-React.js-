import { Box, Container } from '@material-ui/core'
import React from 'react'
import useStyles from './Styles';
import ServiceCard from './ServiceCard/ServiceCard'
import Title from '../Title/Title';
import { serviceDetails } from '../../utils/serviceDetails';

function ServiceSection() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Title title='our service'/>
            <Box display='flex' justifyContent="space-between" flexWrap='wrap' alignContent='center' alignItems='center' >
                {serviceDetails.map((item , index) => (
                     <div key={index}>
                         <ServiceCard image={item.image} title={item.title} />
                     </div>
                ))}
            </Box>
        </Container>
    )
}

export default ServiceSection
