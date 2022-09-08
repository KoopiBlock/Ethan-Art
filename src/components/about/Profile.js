import React from 'react'
import { NavLink } from 'react-router-dom'
import './Profile.css'

function Profile() {
    return (
        <div className='about-section'>

            <img className='profile-pic ' alt='u' src='/images/ethan-2.jpg'></img>
            <div className='description'>
                <h1 className='title'>About me</h1>
                <p className='text'>
                    'hi! my name is ethan and welcome to my website, here you browse my gallery and also contact me for comissions. lets talk about our next project!',
                </p>
                <NavLink to="/Contact" className="talk"> Lets talk</NavLink>
            </div>

        </div>
    )
}

export default Profile