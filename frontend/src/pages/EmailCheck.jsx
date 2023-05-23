import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { forgatePasswordAction } from '../redux/users/actions/authAction';

function EmailCheck() {
   const dispatch=  useDispatch()
    const [emailCheck, setEmailCheck] = useState()
   console.log("hello");
    
  return <>
  <input type="text" value={emailCheck}  onChange={e=>setEmailCheck(e.target.value)}/>
  <br />
  <button type="button" classNama="btn btn-primary" onClick={e=>dispatch(forgatePasswordAction(emailCheck))}>Enter-Email</button>
  
  </>
}

export default EmailCheck