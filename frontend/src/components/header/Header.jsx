import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'

const Header = (props) => {
    const [isAuth, setIsAuth] = useState(props.isAuthenticated)
    const [isVisible, setIsVisible] = useState(false)
    const [profile_ul_visible, setProfile_ul_visible] = useState(false)
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const showSearch = () => {
        if (!isVisible) {
            const search_input_id = document.getElementById("search_input_id")
            search_input_id.style.visibility = "visible"
            search_input_id.focus()
            setIsVisible(true)
        } else {
            const search_input_id = document.getElementById("search_input_id")
            search_input_id.style.visibility = "hidden"
            setIsVisible(false)
        }
    }

    const progressLoading = () => {
        props.setProgress(25);
        setTimeout(() => {
            props.setProgress(50);
            setTimeout(() => {
                props.setProgress(75);
                setTimeout(() => {
                    props.setProgress(100);
                }, 1000);
            }, 200);
        }, 0);
    };

    const dropdown = () => {
        if (!profile_ul_visible) {
            const profile_ul = document.getElementById("profile_ul")
            profile_ul.style.display = "block"
            setProfile_ul_visible(true)
        } else {
            const profile_ul = document.getElementById("profile_ul")
            profile_ul.style.display = "none"
            setProfile_ul_visible(false)
        }
    }

    const logoutHandler = async () => {
        props.setProgress(0)
        props.setProgress(20)
        await dispatch(logout())
        props.setProgress(50)
        setIsAuth(props.isAuthenticated)
        props.setProgress(100)
    }

    return (
        <div className='header'>
            <div className='div1'>
                <span style={{cursor: "pointer"}}>
                    <Link to={"/"} style={{color: "blueviolet"}}>Code</Link>
                </span>
                <div>
                    <button id='menu_bar_id' className='menu_bar' onClick={()=>props.setIsOpen(!props.isOpen)}>{props.isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</button>
                    <ul>
                        <li><Link onClick={progressLoading} to={"/"}>Home</Link></li>
                        <li><Link onClick={progressLoading} to={"/courses"}>Courses</Link></li>
                        <li><Link onClick={progressLoading} to={"/notes"}>Notes</Link></li>
                        {user && user.role === 'admin' && <li><Link onClick={progressLoading} to={"/admin/new"}>Add Course</Link></li>}
                        {user && user.role === 'admin' && <li><Link onClick={progressLoading} to={"/admin/note/new"}>Add Notes</Link></li>}
                    </ul>
                    <div className='light-dark-mode'>
                        <i className="fa-solid fa-sun"></i>
                    </div>
                    {
                        isAuth ? <div id='profile' className='profile_div'>
                            {
                                user && user.avatar ? (
                                    <img onClick={dropdown} src={user.avatar.url} alt='none' />
                                ) : (
                                    <img onClick={dropdown} src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=2000' alt='none' />
                                )
                            }
                            <ul id='profile_ul'>
                                <Link onClick={dropdown} to={"/profile"}><li>My Profile</li></Link>
                                <Link to={"/"} onClick={() => {
                                    progressLoading()
                                    logoutHandler()
                                    dropdown()
                                }}><li>Logout</li></Link>
                            </ul>
                        </div> :
                            <>
                                <Link onClick={progressLoading} to="/login">Login</Link>
                            </>
                    }
                </div>
            </div>
            <hr />
            <div className='div2'>
                <Link onClick={progressLoading} to={"/"}><i className="fa-solid fa-house"></i></Link>
                <ul>
                    <li><Link to={"/HTML"}>HTML</Link></li>
                    <li><Link to={"/CSS"}>CSS</Link></li>
                    <li><Link to={"/JS"}>JS</Link></li>
                    <li><Link to={"/C"}>C</Link></li>
                    <li><Link to={"/C++"}>C++</Link></li>
                    <li><Link to={"/JAVA"}>JAVA</Link></li>
                    <li><Link to={"/PYTHON"}>PYTHON</Link></li>
                    <li><Link to={"/REACTJS"}>REACT JS</Link></li>
                    <li><Link to={"/PHP"}>PHP</Link></li>
                </ul>
                <div className='search_div'>
                    <input type="text" className='search_input' id='search_input_id' placeholder='Search...' />
                    <i onClick={showSearch} className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        </div>
    )
}

export default Header
