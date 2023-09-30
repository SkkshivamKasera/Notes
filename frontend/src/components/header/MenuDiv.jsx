import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import './MenuDiv.css'

const MenuDiv = ({ setProgress, isOpen, setIsOpen }) => {
    const dispatch = useDispatch()
    const { user, isAuthenticated } = useSelector(state => state.user)

    const [isAuth, setIsAuth] = useState(isAuthenticated)

    const progressLoading = () => {
        setProgress(25);
        setTimeout(() => {
            setProgress(50);
            setTimeout(() => {
                setProgress(75);
                setTimeout(() => {
                    setProgress(100);
                }, 1000);
            }, 200);
        }, 0);
    };

    const logoutHandler = async () => {
        setProgress(0)
        setProgress(20)
        await dispatch(logout())
        setProgress(50)
        setIsAuth(isAuthenticated)
        setProgress(100)
    }
    return (
            isOpen && 
            <ul className='menu-ul'>
            <Link onClick={() => {
                    progressLoading()
                    setIsOpen(!isOpen)
                }} to={"/"}><li>Home</li></Link>
            <Link onClick={() => {
                    progressLoading()
                    setIsOpen(!isOpen)
                }} to={"/courses"}><li>Courses</li></Link>
            <Link onClick={() => {
                    progressLoading()
                    setIsOpen(!isOpen)
                }} to={"/notes"}><li>Notes</li></Link>
            {user && user.role === 'admin' && <Link onClick={() => {
                    progressLoading()
                    setIsOpen(!isOpen)
                }} to={"/admin/new"}><li>Add Course</li></Link>}
            {user && user.role === 'admin' && <Link onClick={() => {
                    progressLoading()
                    setIsOpen(!isOpen)
                }} to={"/admin/new"}><li>Add Notes</li></Link>}
            {isAuth ? <>
                <Link onClick={() => {
                    progressLoading()
                    setIsOpen(!isOpen)
                }} to={"/profile"}><li>My Profile</li></Link>
                <Link to={"/"} onClick={() => {
                    progressLoading()
                    logoutHandler()
                }}><li>Logout</li></Link>
            </> : 
            <>
            <Link onClick={() => {
                progressLoading()
                setIsOpen(!isOpen)
            }} to="/login"><li>Login</li></Link>
        </>}
        </ul>
    )
}

export default MenuDiv
