import React from 'react'
import Form from '../contact/Form'
import '../contact/contact.css'

function Contact() {
    return (
        <div className='contact'>
            <Form />
            <div className='image-div'>
                <img src='/images/ethan-1.jpg' className='contact-image' alt='1'></img>
            </div>
        </div>
    )
}

export default Contact