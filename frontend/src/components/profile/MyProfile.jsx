import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './MyProfile.css'

const MyProfile = () => {
    const { user } = useSelector(state => state.user)
    return (
        user && (
            <div className='my_profile_container'>
                <div className='my_profile_box'>
                    <div className='my_profile_img'>
                        <img src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="none" />
                        <button>Change Image</button>
                    </div>
                    <div className='my_profile_content'>
                        <div>
                            <h2>Name</h2>
                            <span>{user.name}</span>
                        </div>
                        <div>
                            <h2>Email Id</h2>
                            <span id='user_email'>{user.email}</span>
                        </div>
                        <Link to={'/mycourses'}>My Courses</Link>
                    </div>
                </div>
            </div>
        )
    )
}

export default MyProfile
