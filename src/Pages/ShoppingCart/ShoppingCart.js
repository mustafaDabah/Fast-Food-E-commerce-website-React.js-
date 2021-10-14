import React from 'react'
import CardShoppingCart from '../../Components/CardShoppingCart/CardShoppingCart'
import { useSelector  } from 'react-redux';
import {Container, Grid} from '@material-ui/core';
import TitleTable from '../../Components/TitleTable/TitleTable';
import CardTotal from '../../Components/CardTotal/CardTotal';
import CountSingleProduct from '../../utils/CountSingleProduct';

function ShoppingCart() {
    const {shopCartProducts} = useSelector((state) => state.cart)
    // count single product 
    const countSingleProduct = shopCartProducts.map(product => product.price * product.quantity)
    // count total products 
    const countTotalProduct = countSingleProduct.reduce((prev , current) => prev + current , 0 ) ; 

    return (
        <Container>
            <Grid container spacing={3} alignItems='flex-start' justifyContent='center'>
                <Grid item  xs={12} lg={8}>
                    <TitleTable/>
                    {
                        shopCartProducts.map(item => (
                            <CardShoppingCart product={item} key={item.id} countSingleProduct={CountSingleProduct} />
                        ))
                    }
                </Grid>
                <Grid item xs={12} lg={4}>
                    <CardTotal countTotalProduct={countTotalProduct} />
                </Grid>
            </Grid> 
           
         
        
        </Container>
    )
}

export default ShoppingCart
