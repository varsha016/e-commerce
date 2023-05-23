import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminAddProduct from '../pages/admin/AdminAddProduct'
import AdminLogin from '../pages/admin/AdminLogin'
import AdminProducts from '../pages/admin/AdminProducts'
import Dashboard from '../pages/admin/Dashboard'
import UserList from '../pages/admin/UserList'
import AdminLayout from './layout/AdminLayout'

function AdminRoutes() {
    return <Routes>
    <Route path='/admin' element={<AdminLayout />}>
        
        <Route index element={<AdminLogin />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='add/product' element={<AdminAddProduct />} />
        <Route path='products' element={<AdminProducts />} />
        <Route path='users' element={<UserList />} />
    
    </Route>
</Routes>
}

export default AdminRoutes