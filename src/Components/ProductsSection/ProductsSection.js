import { Container } from '@material-ui/core';
import React from 'react'
import Title from '../Title/Title';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useFetch from '../../Hooks/useFetch';
import CardProduct from '../CardProduct/CardProduct';
import { responsive } from '../../utils/responsive';
import useStyles from './styles';

function ProductsSection() {
    const classes = useStyles();

     // fetch data 
     const {data} = useFetch();

    return (
        <Container className={classes.root}>
            <Title title='our products'/>
            <Carousel responsive={responsive}>
                {
                    data?.map(item => (
                        <div key={item.id} >
                            <CardProduct product={item} />
                        </div>
                    ))
                }
            </Carousel>
        </Container>
    )
}

export default ProductsSection
