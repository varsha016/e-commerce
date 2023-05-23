import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components'

function PublicLayout() {
    return <>
        <Navbar />
        <Outlet />

    </>
}

export default PublicLayout