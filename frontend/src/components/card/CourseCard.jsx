import React from 'react'
import './CourseCard.css'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCourseInfo } from '../../actions/courseAction'

const CourseCard = ({ id, CourseImage, paid, price, name, desc, enrollments, setProgress, EON }) => {
    const dispatch = useDispatch()
    const getCourseDetail = async () => {
            setProgress(50)
            await dispatch(getCourseInfo(id))
            setProgress(100)
    }
    return (
        <div className='course_card'>
            <div className={`course_badge ${enrollments.length !== 0 ? "backgroundGreenColor" : "backgroundRedColor"}`}><i className="fa-solid fa-user-plus"></i>{enrollments.length}</div>
            <div className='course_img_box'>
                <img src={CourseImage} alt='none' />
            </div>
            <div className='course_content'>
                <span id='paid' className={paid === "Paid" ? "redColor" : "greenColor"}>{paid === "Paid" ? "PAID" : "FREE"} COURSE</span>
                <span id='price' className={paid === "Paid" ? "redColor" : "greenColor"}>{price}₹</span>
                <h5>{name}</h5>
                <p>{desc}</p>
            </div>
            <Link onClick={getCourseDetail} to={`/course/${id}`}>{EON}</Link>
        </div>
    )
}

export default CourseCard