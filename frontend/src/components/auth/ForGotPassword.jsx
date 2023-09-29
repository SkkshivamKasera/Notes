import React, { useState } from 'react'
import './ForGotPassword.css'
import { Link } from 'react-router-dom'
import { forgotPassword } from '../../actions/userAction'
import { useDispatch } from 'react-redux'

const ForGotPassword = ({setProgress, setLoadUser}) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const forgotPasswordHandler = async (e) => {
    setProgress(0)
    e.preventDefault()
    setProgress(10)
    await dispatch(forgotPassword(email))
    await setLoadUser(true)
    setProgress(50)
    setProgress(100)
  }
  return (
    <div className='ForGotPasswordcontainer'>
      <div className='ForGotPasswordbox'>
        <div className='img_box'>
            <img src='https://img.freepik.com/premium-vector/modern-flat-website-login-page-templates_2095-182.jpg' alt='none'/>
        </div>
        <div className='ForGotPasswordform_box'>
            <img src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=2000' alt='none'/>
            <h1>Website.com</h1>
            <h3>Reset Password!</h3>
            <form className='ForGotPasswordform' onSubmit={forgotPasswordHandler}>
                <div className='ForGotPasswordinput_box1'>
                    <span>Email Id :</span>
                    <input type='email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button className='ForGotPasswordbtn' type='submit'>Submit</button>
                <div className='s_o_f'>
                <Link to={"/login"}>OR SIGNIN</Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ForGotPassword