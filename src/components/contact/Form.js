import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './Form.css'



function Form() {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_wdxd3zs',
            'template_ppxk5ge',
            form.current,
            '88Kc1OO783prebvJr')
            .then((result) => {
                console.log(result.text)
                alert("your massege has been sent we will return as soon as possible!")
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <form className='form' ref={form} onSubmit={sendEmail}>
            <h1 className='head'>Lets talk!</h1>
            <label className='labels'>Name</label>
            <input type="text" name="user_name" className='inputs' />
            <label className='labels'>Email</label>
            <input type="email" name="user_email" className='inputs' />
            <label className='labels'>Message</label>
            <textarea name="message" className='text-input' />
            <input type="submit" value="Send" className='input-btn' />
        </form>
    )
}

export default Form