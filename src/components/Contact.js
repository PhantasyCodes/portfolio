import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'

import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_uetrhip', 'template_6b5ca69', form.current, 'hux4of00ZmuBUKYIr')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div id="contact" className='contact-text'>
        <h1>Let's work on something special!</h1>
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                <input placeholder="Name" type="text" name="user_name" />
                <input placeholder="Email" type="email" name="user_email" />
                <textarea placeholder="Message" name="message" rows="1" />
                <input type="submit" value="SEND" />
            </form>
        </div>
    </div>
  )
}

export default Contact