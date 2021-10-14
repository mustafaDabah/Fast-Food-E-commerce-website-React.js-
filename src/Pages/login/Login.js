import React, { useState }  from 'react'
import { Box, Button, Container, Grid, Typography  } from '@material-ui/core'
import { FormProvider, useForm } from 'react-hook-form'
import CustomTextFiled from '../../Components/CustomTextFiled/CustomTextFiled';
import { useDispatch } from 'react-redux'
import { setUserDetails } from "../../Redux/ReduxFeatures/UserSlice";
import { auth, provider } from "../../API/Firebase";
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';
import { SIGNUP_PATH } from '../../constants/Routes';
import ButtonWithProgress from '../../Components/Buttons/ButtonWithProgress';

function Login() {
    const methods  = useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const [loading, setLoading] = useState(false)

    // sign in by email and password 
    const signInByEmailAndPassword = async(data) => {
      setLoading(true)
      try {
        await auth.signInWithEmailAndPassword(data.email , data.password).then(res => {
          dispatch(setUserDetails(res.user))
          history.push("/")
        }).catch(err => {
          alert(err.message);
          setLoading(false)
        });
      }catch {
        alert('some thing wrong try again ');
        setLoading(false)
      }
    }

    // sign in with google auth 
    const signupByGoogle = async() => {
      await auth.signInWithPopup(provider).then(res => {
        dispatch(setUserDetails(res.user))
      }).catch(err => {
        alert(err.message)
      })
    }

    return (
        <Container>
          <Box className={classes.root} display='flex' flexDirection='column' justifyContent="center" alignItems="center">
            <Typography align='center' variant='h3' color='secondary'>Login</Typography>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(data => signInByEmailAndPassword(data))}>
                  <Grid container spacing={3}>
                      <CustomTextFiled name="email" label="email" type='email' size={12}/>
                      <CustomTextFiled name="password" label="password" type='password' size={12}/>
                      <div className={classes.btnGroup}>
                        <ButtonWithProgress type="submit" text="sign in" loading={loading} />
                        <Button color='primary' variant="contained" onClick={signupByGoogle}>sign in by Google  </Button>
                        <Button component={Link} to={SIGNUP_PATH}>sign up </Button>
                      </div>
                  </Grid>     
              </form>      
            </FormProvider>
            </Box>
        </Container>
    )
}

export default Login
