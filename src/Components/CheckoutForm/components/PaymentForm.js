import React , {useState} from 'react'
import { Button, Divider  } from '@material-ui/core';
import Review from './Review';
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../../../API/Firebase';
import { cleanShoppingCart } from '../../../Redux/ReduxFeatures/CartSlice';
import useStyles from './styles';
import ButtonWithProgress from '../../Buttons/ButtonWithProgress';


function PaymentForm({backStep , userInfo ,nextStep}) {
    const {shopCartProducts} = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const classes = useStyles();
    const [loading, setLoading] = useState(false)

    // purchase products 
    const handleSubmit = async() => {
        const billingDetails = {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email:userInfo.email,
            address: userInfo.address, 
            city: userInfo.city,
            postal_code: userInfo.zip,
            productsOrder:shopCartProducts
        };
        //  post data to firebase   
        setLoading(true)
        await db.collection('checkoutDetails').add({billingDetails});
        dispatch(cleanShoppingCart());
        nextStep();
    }

    return (
        <>
            <Review/>
            <Divider/>
            <div className={classes.groupBtn}>
                <Button variant="outlined" onClick={backStep}>Back</Button>
                <ButtonWithProgress onClick={handleSubmit} loading={loading} text="pay" />
            </div>
        </>
    )
}

export default PaymentForm
