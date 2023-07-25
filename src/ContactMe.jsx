import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vyz9z9z', 'template_5ohnall', form.current, 'oXmfA3WFR7LIZuURD')
      .then(() => {
          alert('Message successfully sent!')
          window.location.reload(false)
      }, () => {
          alert('Failed to send the message, please try again')
      });
  };

  return (
    <>
    <div className='box-contactme'>
        <h1>Contact Me:</h1>
        <form ref={form} onSubmit={sendEmail}>
            <ul>
                <li>
                <input type="text" name="user_name" placeholder='Name' required/>
                </li>
                <li>
                <input type="email" name="user_email" placeholder='Email' required/>
                </li>
                <li>
                <textarea name="message" placeholder='Message' required/>
                </li>
                <li>
                <input type="submit" className="contactme-button" value="Send" />
                </li>
            </ul>
        </form>
    </div>
    </>
  );
};