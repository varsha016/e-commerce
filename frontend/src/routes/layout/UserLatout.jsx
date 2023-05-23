import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'
import UserNavbar from '../../components/UserNavbar'
import { userLoginAction } from '../../redux/users/actions/authAction'
import { getUserData } from '../../redux/users/reducer/userReducer'


function UserLatout() {
     const {error}=  useSelector(getUserData)
    // const navigate=  useNavigate()
   const dispatch= useDispatch()
    useEffect(() => {
      if (error && error.status===401) {
        dispatch(userLoginAction())
       
      }
    
    }, [error])
    
    return <>
        <UserNavbar />
        {/* <Outlet /> */}
    </>
}

export default UserLatout