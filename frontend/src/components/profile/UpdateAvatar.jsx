import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './UpdateAvatar.css'
import { updateAvatar } from '../../actions/userAction'

const UpdateAvatar = ({ setProgress, setLoadUser }) => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const [preview, setPreview] = useState(user.avatar ? user.avatar.url : "https://cdn-icons-png.flaticon.com/512/149/149071.png")

    const previewChange = async (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setPreview(reader.result);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    }

    const getUrl = () => {
        const preview = prompt("Enter Url")
        setPreview(preview)
    }

    const updateProfile = async (e) => {
        setProgress(0)
        setProgress(10)
        await dispatch(updateAvatar(preview))
        setProgress(50)
        await setLoadUser(false)
        setProgress(100)
    }
    return (
        <div className='update_avatar'>
            <div className='update_img_box'>
                {
                    <img src={preview} alt='none' />
                }
            </div>
            <div className='update_btn_div'>
                <div class="file-upload">
                    <input type="file" id="myFileInput" accept='image/*' onChange={previewChange} />
                    <label for="myFileInput">Choose a Image</label>
                </div>
                <h5 className='update_hr_lines'>OR</h5>
                <button className='button' onClick={getUrl}>URL</button>
                <hr></hr>
                <button disabled={user.avatar ? user.avatar.url===preview : preview==="https://cdn-icons-png.flaticon.com/512/149/149071.png"} className='button' onClick={updateProfile}>Update</button>
            </div>
        </div>
    )
}

export default UpdateAvatar
