import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signup } from '../../actions/userAction'

const SignUp = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const signUpHandler = async (e) => {
    props.setProgress(0)
    e.preventDefault()
    props.setProgress(20)
    await dispatch(signup(name, email, password))
    props.setProgress(50)
    setName("")
    setEmail("")
    setPassword("")
    props.setProgress(100)
  }
  return (
    <div className='signup_container'>
      <div className='signup_box'>
        <div className='img_box'>
            <img src='https://img.freepik.com/premium-vector/modern-flat-website-login-page-templates_2095-182.jpg' alt='none'/>
        </div>
        <div className='signup_form_box'>
            <img src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=2000' alt='none'/>
            <h1>Website.com</h1>
            <h3>Create an Account!</h3>
            <form className='signup_form' onSubmit={signUpHandler}>
                <div className='signup_input_box0'>
                    <span>Name :</span>
                    <input type='text' required value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='signup_input_box1'>
                    <span>Email Id :</span>
                    <input type='email' required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='signup_input_box2'>
                    <span>Password :</span>
                    <input type='password' required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button className='signup_btn' type='submit'>Create Account</button>
                <div className='s_o_f'>
                <Link to={"/login"}>OR SIGNIN</Link>
                </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp