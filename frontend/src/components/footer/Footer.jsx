import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='logo_text'>
                <img src='https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?w=2000' alt='none'/>
                <span>Code</span>
            </div>
            <sapn id="copyright">Copyright © 2023 Website.com</sapn>
            <div className='media_apps'>
                <abbr title='Twitter'><i class="fa-brands fa-twitter"></i></abbr>
                <abbr title='Facebook'><i class="fa-brands fa-facebook"></i></abbr>
                <abbr title='Instagram'><i class="fa-brands fa-instagram"></i></abbr>
                <abbr title='Github'><i class="fa-brands fa-github"></i></abbr>
            </div>
        </div>
    )
}

export default Footer
