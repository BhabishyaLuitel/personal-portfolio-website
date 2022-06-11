/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {ImWhatsapp} from 'react-icons/im'
import {useRef} from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5802s3p', 'template_yhzk5nl', form.current, '8PHbF7FPg1mQEYh6H')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jitandahal@gmail.com</h5>
            <a href="mailto:jitandahal@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+9771234567890</h5>
            <a href="https://api.whatsapp.com/send?phone=9779851081133" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        <a href="#" className='scroll__up'>Go to Top</a>
      </div>
    </section>
  )
}

export default Contact