import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import "./CreateNote.css"
import { createNote } from '../../actions/courseAction'

const CreateNote = ({ showAlert, setProgress, setLoadNotes }) => {
    const [name, setName] = useState("")
    const [img, setIMG] = useState("https://www.codewithharry.com/img/notes/python.webp")
    const [pdf, setPDF] = useState("")

    const dispatch = useDispatch()

    const imgChange = (e) => {
        if (e.target.name === 'img') {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setIMG(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.name === 'pdf') {
            const selectedFile = e.target.files[0];
            if (selectedFile && selectedFile.type === 'application/pdf') {
                const reader = new FileReader();
                reader.onload = () => {
                if (reader.readyState === 2) {
                    setPDF(reader.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
            } else {
                showAlert("danger", 'Please select a valid PDF file.')
            }
        }
    }

    const createCourseHandler = async (e) => {
        setProgress(20)
        e.preventDefault()
        setProgress(50)
        console.log(pdf)
        await dispatch(createNote(name, img, pdf))
        setProgress(70)
        setLoadNotes(false)
        setProgress(100)
    }

    return (
        <div className='create_note_container'>
            <div className='create_note_box'>
                <div className='create_note_img_box'>
                    <img src={img} alt='none' />
                </div>
                <div className='create_corse_form_box'>
                    <form className='create_note_form' onSubmit={createCourseHandler}>
                        <div className='create_note_input_box input_common_note'>
                            <input type='text' placeholder='Notes Name' required value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='create_note_input_box input_common_note'>
                            <input type='text' value={img} onChange={(e) => setIMG(e.target.value)} required />
                        </div>
                        <div className='create_note_input_box input_common_note'>
                            <input style={{ border: "none" }} type='file' name='img' accept='image/*' onChange={imgChange} />
                        </div>
                        <div className='create_note_input_box input_common_note'>
                            <input
                                style={{ border: "none" }}
                                type='file'
                                name='pdf'
                                accept='application/pdf'
                                onChange={handleFileChange}  
                            />
                        </div>
                        <button className='create_note_btn' type='submit'>Create Course</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateNote