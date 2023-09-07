import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./CreateCourse.css"
import { createCourse } from '../../actions/courseAction'

const Create_Course = ({setProgress, setLoadCourses}) => {
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [docs_name, setDocs_Name] = useState("")
    const [paid, setPaid] = useState("")
    const [price, setPrice] = useState(0)
    const [CourseImage, setCourseImage] = useState("https://res.cloudinary.com/dqbnv6dow/image/upload/v1693998649/NotesImages/course_umfdku.jpg")

    const dispatch = useDispatch()

    const CourseImageChange = (e) => {
        if (e.target.name === 'CourseImage') {
          const reader = new FileReader();
          reader.onload = () => {
            if (reader.readyState === 2) {
              setCourseImage(reader.result);
            }
          };
          reader.readAsDataURL(e.target.files[0]);
        }
      };

      const createCourseHandler = async (e) => {
        setProgress(20)
        e.preventDefault()
        setProgress(50)
        console.log("Ha")
        await dispatch(createCourse(name, desc, paid, price, CourseImage, docs_name))
        setProgress(70)
        setLoadCourses(false)
        setProgress(100)
      }

    return (
        <div className='create_course_container'>
            <div className='create_course_box'>
                <div className='create_course_img_box'>
                    <img src={CourseImage} alt='none' />
                </div>
                <div className='create_corse_form_box'>
                    <form className='create_course_form' onSubmit={createCourseHandler}>
                        <div className='create_course_input_box input_common'>
                            <input type='text' placeholder='Course Name' required value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='create_course_input_box input_common'>
                            <input type='text' placeholder='Course Description' required value={desc} onChange={(e) => setDesc(e.target.value)} />
                        </div>
                        <div className='create_course_input_box input_common'>
                            <input type='text' placeholder='Document Name (Only PDF)' value={docs_name} onChange={(e) => setDocs_Name(e.target.value)}  />
                        </div>
                        <div className='create_course_input_box input_common checkbox_class'>
                            <input type='text' placeholder='Paid Or Not' value={paid} onChange={(e)=>setPaid(e.target.value)} />
                            <input type='number' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Price'/>
                        </div>
                        <div className='create_course_input_box input_common'>
                            <input type='text' value={CourseImage} onChange={(e)=>setCourseImage(e.target.value)} required />
                        </div>
                        <div className='create_course_input_box input_common'>
                            <input type='file' name='CourseImage' accept='image/*' onChange={CourseImageChange} />
                        </div>
                        <button className='create_course_btn' type='submit'>Create Course</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create_Course