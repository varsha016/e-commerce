import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import api from '../redux/api'
import { getUserAuthData } from '../redux/users/reducer/authReducer'

function Pay() {
    const { userLogin } = useSelector(getUserAuthData)
    const handlePayment = async () => {
        const amount = 500
        const { data } = await api.post("/order/payment", { amount })
        console.log(data)
        const Razor = new window.Razorpay({
            key: "rzp_test_JaZX8PVyfNpGE6",
            amount: amount * 100,
            currency: "INR",
            description: "Mast Keyboard",
            order_id: data.order.id,
            prefill: {
                email: "jhon@gmail.com",
                contact: "8888888899",
            },
            image: "https://skillhubitsolution.com/assets/svg/icons/icon-27-skillhub.svg",
            handler: async response => {
                //   backend call
                console.log(response);
                try {
                    const { data } = await api.post("/order/payment/verify", response, {
                        headers: {
                            authorization: userLogin.token
                        }
                    })
                    console.log(data);
                    console.log("payment success");
                    // payment success
                } catch (error) {
                    // payment Fail
                    console.log("payment Fail");
                    console.log(error);

                }
            }
        })
        Razor.open()
    }
    return <>
        <Button onClick={handlePayment} variant='contained' color='secondary'>Pay</Button>

    </>
}

export default Pay