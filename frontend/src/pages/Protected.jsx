import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { getUserAuthData } from '../redux/users/reducer/authReducer'

function Protected({ element }) {
    const { userLogin } = useSelector(getUserAuthData)
    return userLogin ? element : <Navigate to="/login/?redirected=401" />
}

export default Protected