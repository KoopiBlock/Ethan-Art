import React from 'react'
import Form from '../contact/Form'

function Contact() {
    return (
        <div className='contact'>
            <Form />
            <div className='image-div'>
                <img src='/images/ethan-1.jpg' className='contact-image'></img>
            </div>
        </div>
    )
}

export default Contact