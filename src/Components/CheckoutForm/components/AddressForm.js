import React from 'react';
import { Grid, Typography , Button } from '@material-ui/core';
import CustomTextFiled from '../../CustomTextFiled/CustomTextFiled';
import {useForm , FormProvider} from 'react-hook-form';
import { Link } from 'react-router-dom';
import { SHOPPING_CART_PATH } from '../../../constants/Routes';
import useStyles from './styles';

function AddressForm({next}) {
    const methods  = useForm();
    const classes = useStyles();

    return (
        <>
            <Typography variant="h5">shopping address</Typography>   
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(data => next({...data}))}>
                    <Grid container spacing={3}>
                        <CustomTextFiled name="firstName" label="first name" />
                        <CustomTextFiled name="lastName" label="last name" />
                        <CustomTextFiled name="email" label="email" />
                        <CustomTextFiled name="address" label="address" />
                        <CustomTextFiled name="city" label="city" />
                        <CustomTextFiled name="zip" label="zip" /> 
                    </Grid>
                    <div className={classes.groupBtn}>
                        <Button component={Link} variant="outlined" to={SHOPPING_CART_PATH}>Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
