import { Box, Button, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import { CHECKOUT_PATH } from '../../constants/Routes';
import useStyles from './styles';
import { useSelector  } from 'react-redux';


function CardTotal({countTotalProduct}) {
    const classes = useStyles();
    const {shopCartProducts} = useSelector((state) => state.cart);
    const disableBtn = !shopCartProducts.length ? true : false ; 
    
    return (
        <Box className={classes.cartTotal} display='flex' flexDirection='column' justifyContent="center">
             <Typography  gutterBottom variant='h6'>Cart Totals</Typography>
             <Typography gutterBottom variant='h6'>Subtotal = {countTotalProduct}$</Typography>
             <Typography gutterBottom variant='h6'>Total Price = {countTotalProduct}$</Typography>
             <Button component={Link} disabled={disableBtn} to={CHECKOUT_PATH} variant="contained" color='secondary'>Proceed to checkout </Button>
        </Box>
    )
}

export default CardTotal
