import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Razorpay } from '../components'
import { initiatePaymentAction, placeOrderAction } from '../redux/users/actions/orderActions'
import { getCartData } from '../redux/users/reducer/cartReducer'
import { getProducts } from '../redux/users/reducer/productReducer'
// import { getProducts } from '../redux/users/reducers/productReducer'

const BuyNow = () => {
    // const { total } = useSelector(getCartData)
    const { singleProduct } = useSelector(getProducts)
    const [mode, setMode] = useState("online")
    const dispatch = useDispatch()
    const { qty } = useParams()
    return <>

        <Razorpay total={singleProduct.price*qty} type="buynow" details={{ productId: singleProduct._id, qty}} />
        <Link to="/" >Back</Link>
        <h1>{singleProduct.name}</h1>

        <input
            type="radio"
            onChange={e => setMode(e.target.value)}
            name="mode"
            value="pod" /> POD
        <input
            type="radio"
            onChange={e => setMode(e.target.value)}
            checked
            name="mode"
            value="online" /> Online
        <hr />
        <button
            onClick={e => {
                if (mode === "online") {
                    dispatch(initiatePaymentAction(singleProduct.price*qty))
                } else {
                    dispatch(placeOrderAction({ productId: singleProduct._id, qty, type: "buynow" }))
                }

            }}
        >{mode === "online" ? "Pay Online" : "Place Order"}</button>
    </>
}

export default BuyNow