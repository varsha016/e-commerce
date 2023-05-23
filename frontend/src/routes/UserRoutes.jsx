import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Account, Cart, Checkout, OrderHistroy, PaymentFail, Protected } from '../pages'
import BuyNow from '../pages/BuyNow'
import UserLatout from './layout/UserLatout'

function UserRoutes() {
    return <Routes>
        <Route path='/user' element={<UserLatout />}>
            <Route path='account' element={<Protected element={<Account />} />} />
            <Route path='order-histroy' element={<Protected element={<OrderHistroy />} />} />
            <Route path='cart' element={<Protected element={<Cart />} />} />
            <Route path='checkout' element={<Protected element={<Checkout />} />} />
            <Route path='payment-fail' element={<Protected element={<PaymentFail />} />} />
            <Route path='buynow/:id/:qty' element={<Protected element={<BuyNow />} />} />
        </Route>
    </Routes>
}

export default UserRoutes