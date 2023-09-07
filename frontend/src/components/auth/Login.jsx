import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/userAction'

const Login = ({setLoadUser, setProgress}) => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginHandler = async (e) => {
    setProgress(0)
    e.preventDefault()
    setProgress(20)
    await dispatch(login(email, password))
    await setLoadUser(false)
    setProgress(50)
    setEmail("")
    setProgress(100)
    setPassword("")
  }

  return (
    <div className='login_container'>
      <div className='login_box'>
        <div className='img_box'>
            <img src='https://img.freepik.com/premium-vector/modern-flat-website-login-page-templates_2095-182.jpg' alt='none'/>
        </div>
        <div className='form_box'>
            <img src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=2000' alt='none'/>
            <h1>Website.com</h1>
            <h3>Welcome Back</h3>
            <form className='login_form' onSubmit={loginHandler}>
                <div className='input_box1'>
                    <span>Email Id :</span>
                    <input type='email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='input_box2'>
                    <span>Password :</span>
                    <input type='password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <Link to={"/forgotpassword"}>Forgot Passsword?</Link>
                </div>
                <button className='login_btn' type='submit'>Login</button>
                <div className='s_o_f'>
                <Link to={"/signup"}>OR SIGNUP</Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login