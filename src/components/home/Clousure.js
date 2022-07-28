import React from 'react'
import { NavLink } from 'react-router-dom'
import './Clousure.css'

function Clousure() {
    return (
        <div className='closure-section'>
            <h1 className='closure-title'>About me</h1>
            <img className='closure-pic ' alt='u' src='/images/ethan-2.jpg' ></img>
            <div className='closure-description'>

                <p className='closure-text'>
                    'hi! my name is ethan and welcome to my website, here you browse my gallery and also contact me for comissions. lets talk about our next project!',
                </p>
                <NavLink exact to="/Contact" className="closure-talk"> Lets talk</NavLink>
            </div>

        </div>
    )
}

export default Clousure