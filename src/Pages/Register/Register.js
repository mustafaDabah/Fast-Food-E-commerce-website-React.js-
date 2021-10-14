import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import CustomTextFiled from '../../Components/CustomTextFiled/CustomTextFiled';
import { useDispatch } from 'react-redux'
import { setUserDetails } from "../../Redux/ReduxFeatures/UserSlice";
import { auth, provider } from "../../API/Firebase";
import { useHistory , Link } from 'react-router-dom';
import useStyles from '../login/styles';
import { Box, Button, Container, Grid, Typography  } from '@material-ui/core'
import { LOGIN_PATH } from '../../constants/Routes';
import ButtonWithProgress from '../../Components/Buttons/ButtonWithProgress';

function Register() {
    const methods  = useForm();
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    // sign up function 
    const setUserByEmailAndPassword = async(data) => {
        setLoading(true)
        // confirm password 
        if (data.password !== data.confirmPassword) {
            alert('make sure you write the same password');
            setLoading(false)
            return ;
        }
        try {
          await auth.createUserWithEmailAndPassword(data.email , data.password);
          history.push("/login")

        }catch {
            console.log('error');
            alert('some thing wrong try again ');
            setLoading(false)
        }
    }

    // sign in with google auth
    const signupByGoogle = async() => {
        await auth.signInWithPopup(provider).then(res => {
            dispatch(setUserDetails(res.user))
        }).catch(err => {
        alert(err.message);
        })
    }


    return (
        <Container>
            <Box className={classes.root} display='flex' flexDirection='column' justifyContent="center" alignItems="center">
            <Typography align='center' variant='h3' color='secondary'>Sign up</Typography>
            <FormProvider {...methods}>
               <form onSubmit={methods.handleSubmit(data => setUserByEmailAndPassword(data))}>
                   <Grid container spacing={3}>
                        <CustomTextFiled name="displayName" label="name" size={12}/>
                        <CustomTextFiled name="email" label="email" type='email' size={12}/>
                        <CustomTextFiled name="password" label="password" type='password' size={12}/>
                        <CustomTextFiled name="confirmPassword" label="confirm password" type='password' size={12}/>
                        <div className={classes.btnGroup}>
                            <ButtonWithProgress type="submit" text="sign up" loading={loading} />
                            <Button color='primary' variant="contained" onClick={signupByGoogle}>sign up by Google  </Button>
                            <Button component={Link} to={LOGIN_PATH}>sign in </Button>
                        </div>
                    </Grid>     
               </form>      
            </FormProvider>
        </Box>
        </Container>
    )
}

export default Register
