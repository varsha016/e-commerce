import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from './components'
import { Home, Login, PageNotFound, Register } from './pages'
import Account from './pages/Account'
import Addproduct from './pages/Addproduct'
import EmployeeLogin from './pages/admin/EmployeeLogin'
import EmployeeRegister from './pages/admin/EmployeeRegister'
import OrderHistroy from './pages/OrderHistroy'
import Pay from './pages/Pay'
import ProductDetail from './pages/ProductDetail'
import Protected from './pages/Protected'
import AdminRoutes from './routes/AdminRoutes'
import PublicRoutes from './routes/PublicRoutes'
import UserRoutes from './routes/UserRoutes'




import "./style.css"
import Demo from './pages/Demo'

export default function App() {
  // return <Demo/>
  return (<>

    <BrowserRouter>
      {/* <Pay /> */}
      <PublicRoutes />
      <UserRoutes />
      <AdminRoutes />

      {/* <Route path='/addproduct' element={<Addproduct />} /> */}
      <Routes>
        <Route path='/admin'>
          <Route path='employee/register' element={<EmployeeRegister />} />
          <Route path='employee/login' element={<EmployeeLogin />} />
        </Route>
      </Routes>
      <Routes>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>




  </>
  )
}
