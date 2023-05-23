import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { paymentFailAction, varifyPaymentAction } from '../redux/users/actions/orderActions'
import { getOrdersData } from '../redux/users/reducer/orderReducer'

function Razorpay({ total,type,details={} }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { orderId, paid, pamentFailError } = useSelector(getOrdersData)

    useEffect(() => {
        if (orderId) {
            const Razor = new window.Razorpay({
                key: "rzp_test_JaZX8PVyfNpGE6",
                amount: total * 100,
                currency: "INR",
                description: "Mast Keyboard",
                order_id: orderId,
                prefill: {

                    contact: "8888888899",
                },

                image: "https://skillhubitsolution.com/assets/svg/icons/icon-27-skillhub.svg",
                handler: async successResponse => {

                    dispatch(varifyPaymentAction({...successResponse,...details,type}))
                    // if (paid) setActiveStep(activeStep + 1)



                },
                modal: {
                    ondismiss: () => {
                        navigate("/user/payment-fail/?redirect=fail")
                    }
                }
            })
            Razor.open()
            Razor.on("payment.failed", (err) => {
                dispatch(paymentFailAction(err.error.description))
                // console.log(err)
                Razor.close()
            })
        }
    }, [orderId])
    return (
        <div>Razorpay</div>
    )
}

export default Razorpay