import React, { useEffect, useState } from 'react'
import './ResetPassword.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetPassword } from '../../actions/userAction'

const ResetPassword = ({setProgress}) => {
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()

  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const resetPasswordHandler = async (e) => {
    setProgress(0)
    e.preventDefault()
    setProgress(10)
    await dispatch(resetPassword(params.token, password, confirmPassword))
    setProgress(50)
    navigate("/")
    setProgress(100)
  }

  return (
    <div className='reset_container'>
      <div className='reset_box'>
        <div className='img_box'>
            <img src='https://img.freepik.com/premium-vector/modern-flat-website-login-page-templates_2095-182.jpg' alt='none'/>
        </div>
        <div className='form_box'>
            <img src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=2000' alt='none'/>
            <h1>Website.com</h1>
            <h3>Create New Password</h3>
            <form className='reset_form' onSubmit={resetPasswordHandler}>
                <div className='input_box1'>
                    <span>New Password :</span>
                    <input type='text' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className='input_box2'>
                    <span>Confirm Password :</span>
                    <input type='password' required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
                <button className='reset_btn' type='submit'>Create</button>
                <div className='s_o_f'>
                <Link to={"/login"}>OR SIGNIN</Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword