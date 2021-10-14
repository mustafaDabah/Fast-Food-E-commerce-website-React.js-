import React , {useState} from 'react'
import AddressForm from './components/AddressForm';
import PaymentForm from './components/PaymentForm';
import Confirmation from './components/Confirmation';
import useStyles from './styles';
import {Paper, Typography , Stepper , Step , StepLabel} from '@material-ui/core'

const steps = ['address' , 'payment']

function CheckoutSteps() {
    const classes = useStyles();

    const [activeStep , setActiveStep] = useState(0);
    const [userInfo, setUserInfo] = useState([])

    // steps 
    const nextStep = () => setActiveStep(prev => prev + 1 )
    const backStep = () => setActiveStep(prev => prev - 1 )


    const next = (data) => {
        setUserInfo(data);
        nextStep();
    }

    // form component 
    const Form = activeStep === 0 ? <AddressForm next={next} /> : <PaymentForm backStep={backStep} userInfo={userInfo} nextStep={nextStep} />
    
    return (
        <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant='h4' align="center">
                        Checkout
                </Typography>
                <Stepper activeStep={activeStep} className={classes.stepper} >
                    {steps.map(item => (
                        <Step key={item} >
                            <StepLabel color='secondary'>{item}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation userInfo={userInfo}/> : Form }
            </Paper>
        </main>
    )
}

export default CheckoutSteps
