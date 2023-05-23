import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from '../components/AddressForm';
import PaymentForm from '../components/PaymentForm';
import Review from '../components/Review';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from "react-router-dom"
import { getUserAuthData } from '../redux/users/reducer/authReducer';
import { initiatePaymentAction, paymentFailAction, placeOrderAction, varifyPaymentAction, } from '../redux/users/actions/orderActions';
import { getCartData } from '../redux/users/reducer/cartReducer';
import { getOrdersData } from '../redux/users/reducer/orderReducer';
import { Link as Redirect } from "react-router-dom"
import { cartHistoryAction } from '../redux/users/actions/cartAction';
import { Razorpay } from '../components';
import { useEffect } from 'react';


function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
export default function Checkout() {

    const [mode, setMode] = React.useState("online")
    const steps = ['Shipping address', 'Payment details', 'Review your order'];

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <AddressForm />;
            case 1:
                return <PaymentForm setMode={setMode} />;
            case 2:
                return <Review />;
            default:
                throw new Error('Unknown step');
        }
    }
    const theme = createTheme();

    const { userLogin } = useSelector(getUserAuthData)
    const { total, cart } = useSelector(getCartData)
    const { orderId, paid, pamentFailError } = useSelector(getOrdersData)



    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [xx, setxx] = useSearchParams();
    const [activeStep, setActiveStep] = React.useState(0);





    const handleNext = () => {
        if (activeStep != 2) {

            setActiveStep(activeStep + 1)
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1)
    };
    React.useEffect(() => {
        if (xx.get("redirect") === "fail") {
            setActiveStep(2)
        }
    }, [])

    const { initiatePaymentError } = useSelector(getOrdersData)
    useEffect(() => {
        if (initiatePaymentError) {
            navigate("/user/cart")
        }

    }, [initiatePaymentError])

    // React.useEffect(() => {
    //     if (orderId) {
    //         const Razor = new window.Razorpay({
    //             key: "rzp_test_JaZX8PVyfNpGE6",
    //             amount: total * 100,
    //             currency: "INR",
    //             description: "Mast Keyboard",
    //             order_id: orderId,
    //             prefill: {

    //                 contact: "8888888899",
    //             },

    //             image: "https://skillhubitsolution.com/assets/svg/icons/icon-27-skillhub.svg",
    //             handler: async successResponse => {

    //                 dispatch(varifyPaymentAction(successResponse))
    //                 if (paid) setActiveStep(activeStep + 1)



    //             },
    //             modal: {
    //                 ondismiss: () => {
    //                     navigate("/user/payment-fail/?redirect=fail")
    //                 }
    //             }
    //         })
    //         Razor.open()
    //         Razor.on("payment.failed", (err) => {
    //             // dispatch(paymentFailAction(err.error.description))
    //             // console.log(err)
    //             // Razor.close()
    //         })
    //     }
    // }, [orderId])


    React.useEffect(() => {
        if (paid) {
            setActiveStep(activeStep + 1)
        }
        dispatch(cartHistoryAction())

    }, [paid])


    if (cart.length === 0 && !paid) return <Box>
        <Typography>No Cart Item</Typography>
        <Redirect to="/">Start Shopping Now</Redirect>
    </Box>
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Razorpay total={total} type="cart" />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                            <Typography variant="h5" gutterBottom>
                                Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                                Your order number is #2001539. We have emailed your order
                                confirmation, and will send you an update when your order has
                                shipped.
                            </Typography>
                            <Redirect to="/user/order-histroy"> Your Orders</Redirect>
                            <Redirect to="/"> Countinue Shopping</Redirect>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}
                                <h1>{mode}</h1>
                                <Button
                                    variant="contained"
                                    onClick={e => {
                                        handleNext()
                                        if (activeStep === steps.length - 1) {
                                            if (mode === "online") {
                                                dispatch(initiatePaymentAction({ cart, total, type: "cart" }))

                                            } else {
                                                dispatch(placeOrderAction({ type: "cart" }))

                                            }

                                        }
                                    }}
                                    sx={{ mt: 3, ml: 1 }}

                                >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
                </Paper>
            </Container>
        </ThemeProvider>
    );
}
