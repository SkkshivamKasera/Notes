import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./CourseDetail.css"
import { enrollCourse, getCourseInfo } from '../../actions/courseAction'
import { useParams } from 'react-router-dom'

const CourseDetail = ({user, setProgress, setLoadCourses}) => {
    const dispatch = useDispatch()
    const params = useParams()
    const { course } = useSelector(state => state.courseInfo)

    useEffect(() => {
        dispatch(getCourseInfo(params.id))
    }, [dispatch, params])

    const enroll = async (e) => {
        setProgress(10)
        e.preventDefault()
        setProgress(30)
        await dispatch(enrollCourse(params.id))
        setProgress(50)
        await setLoadCourses(false)
        setProgress(100)
    }

    return (
        <Fragment>
            {course &&
                <div className='course_detail_container'>
                    <div className='course_detail_box'>
                        <div className='course_detail_container_img_box'>
                            <img src={course.CourseImage.url} alt='none' />
                        </div>
                        <div className='course_detail_container_content_box'>
                            <h1 id='h1_id'>{course.name}</h1>
                            <p id='p1_id'>{course.desc}</p>
                            <p className={course.price===0?"greenColor":"redColor"} id='p2_id'>PRICE : {course.price}₹</p>
                            <button id={user && course.enrollments.some(enrollment => enrollment.user_id === user._id) && "disable"} disabled={user && course.enrollments.some(enrollment => enrollment.user_id === user._id)} onClick={enroll}>{user ? course.enrollments.some(enrollment => enrollment.user_id === user._id) ? "ENROLLED":"ENROLL NOW" : "ENROLL NOW"}</button>
                        </div>
                    </div>
                </div>}
        </Fragment>
    )
}

export default CourseDetail
