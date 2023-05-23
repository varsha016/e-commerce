import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { paymentFailAction } from '../redux/users/actions/orderActions'
import { getOrdersData } from '../redux/users/reducer/orderReducer'

function PaymentFail() {
    const dispatch = useDispatch()
    const { paymentFailError } = useSelector(getOrdersData)
    useEffect(() => {

        dispatch(paymentFailAction("fail"))
    }, [])

    return <>
        <Typography variant='hi'>Payment Fail</Typography>
        <Typography >{paymentFailError}</Typography>
        <Link to="/user/checkout/?redirect=fail">Retry</Link>

    </>
}

export default PaymentFail