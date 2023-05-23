import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { resetPasswordAction } from '../redux/users/actions/authAction'

function ForgatePassword() {
    const {id}= useParams()
   const navigate=   useNavigate()
    const dispatch= useDispatch()
    const [resetPass, setResetPass] = useState({
        pass:"",
        Cpass:""
    })
  return <>
  <div class="card">
    <div class="card-body">
        <input type="text" value={resetPass.pass}  onChange={e=>setResetPass({...resetPass,  pass:e.target.value})}/>
        <br />
        <input type="text" value={resetPass.Cpass} onChange={e=>setResetPass({...resetPass,  Cpass:e.target.value})} />
        <br />
        <button type="button" onClick={e=>{
          dispatch(resetPasswordAction(id,resetPass))
          navigate("/login")
          }} className="btn btn-primary">create-pass</button>
    </div>
  </div>
  </>
}

export default ForgatePassword