import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import {useFormContext , Controller} from 'react-hook-form';

function CustomTextFiled({name , label , size = 6 , type = 'text' }) {
    const {control} = useFormContext();
    return (
        <Grid item xs={12} sm={size}>
            <Controller
                as={TextField}
                control={control}
                fullWidth
                label={label}
                name={name}
                type={type}
                required
            />
        </Grid>
    )
}

export default CustomTextFiled
