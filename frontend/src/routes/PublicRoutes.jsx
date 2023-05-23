import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login, Register } from '../pages'
import EmailCheck from '../pages/EmailCheck'
import ForgatePassword from '../pages/ForgatePassword'
import ProductDetail from '../pages/ProductDetail'
import PublicLayout from './layout/PublicLayout'

function PublicRoutes() {
    return <Routes>
        <Route path='/' element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='product-detail/:id' element={<ProductDetail />} />
            <Route path='forgate-password' element={<EmailCheck />} />
            <Route path='reset-password/:id' element={<ForgatePassword />} />
        </Route>
    </Routes>
}

export default PublicRoutes