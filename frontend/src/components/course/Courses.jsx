import React from 'react'
import CourseCard from '../card/CourseCard'
import { useSelector } from 'react-redux'
import Empty from '../profile/Empty'

const Courses = ({setProgress}) => {
    const { courses } = useSelector(state => state.course)
  return (
    <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center"
    }}>
      {
        courses && courses.length !==0 ? courses.map((course) => (
            <CourseCard key={course._id} id={course._id} CourseImage={course.CourseImage.url} paid={course.paid} price={course.price} name={course.name} desc={course.desc} enrollments={course.enrollments} setProgress={setProgress} EON={"Enroll Now"}/>
        )) : <Empty h={"Empty"} p={"Not Courses Yet"} s={false}/>
      }
    </div>
  )
}

export default Courses
