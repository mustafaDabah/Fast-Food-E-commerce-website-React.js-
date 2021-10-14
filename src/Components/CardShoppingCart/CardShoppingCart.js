import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';
import {useDispatch } from 'react-redux';
import {removeProduct , decreaseQuantity , increaseQuantity} from '../../Redux/ReduxFeatures/CartSlice';
import useStyles from './styles'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';


const CardShoppingCart = ({product , countSingleProduct}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const deleteProduct = (id) =>  dispatch(removeProduct(id));
  
  return (
    <Box  className={classes.card} display='flex' justifyContent="space-between" alignItems='center'>
      <img src={product.image} alt={product.title} className={classes.media} />
      <Typography gutterBottom className={classes.itemRow} variant='subtitle2' >{product.title}</Typography>
      <Typography gutterBottom className={classes.itemRow} variant='subtitle2' >{product.price}</Typography>
      <div className={classes.itemRow}>
        <div className={classes.buttons}>
            <Button type="button" size="small" onClick={() => dispatch(decreaseQuantity(product))}>-</Button>
            <Typography>&nbsp;{product.quantity}&nbsp;</Typography>
            <Button type="button" size="small"  onClick={() => dispatch(increaseQuantity(product))}>+</Button>
        </div>
      </div>
      <Typography gutterBottom className={classes.itemRow} variant='subtitle2' >{product.price * product.quantity}</Typography>
      <div className={classes.itemRow}>
          <Button className={classes.delete} variant="contained" type="button" color="secondary" onClick={() => deleteProduct(product.id)}><DeleteOutlinedIcon/> Remove</Button>
      </div>
      </Box>

  );
};

export default CardShoppingCart;