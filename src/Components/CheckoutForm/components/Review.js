import React from 'react'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { useSelector } from 'react-redux';
import useStyles from './styles';

function Review() {
    const classes = useStyles();
    const {shopCartProducts} = useSelector((state) => state.cart);
    // count single product 
    const countSingleProduct = shopCartProducts.map(product => product.price * product.quantity)
    // count total products 
    const countTotalProduct = countSingleProduct.reduce((prev , current) => prev + current , 0 ) ; 

    return (
        <>
            <Typography variant="h6" gutterBottom >order summary</Typography>   
            <List disablePadding>
                {shopCartProducts.map(product => (
                   <ListItem className={classes.listItem} key={product.title}>
                        <ListItemText primary={product.title} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant="body2">{product.price}</Typography>
                   </ListItem>
                ))}
                <ListItem className={classes.listItem}>
                        <ListItemText primary="Total" />
                        <Typography variant="subtitle1" className={classes.totalPrice}>
                            {countTotalProduct}
                        </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review
