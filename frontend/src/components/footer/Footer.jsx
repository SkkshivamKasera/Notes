import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='logo_text'>
                <img src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=2000' alt='none'/>
                <span>Code</span>
            </div>
            <span id="copyright">Copyright © 2023 Website.com</span>
            <div className='media_apps'>
                <abbr title='Twitter'><i className="fa-brands fa-twitter"></i></abbr>
                <abbr title='Facebook'><i className="fa-brands fa-facebook"></i></abbr>
                <abbr title='Instagram'><i className="fa-brands fa-instagram"></i></abbr>
                <abbr title='Github'><i className="fa-brands fa-github"></i></abbr>
            </div>
        </div>
    )
}

export default Footer
