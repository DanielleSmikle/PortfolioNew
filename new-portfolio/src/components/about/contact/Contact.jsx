import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rwwx51w', 'template_ps7s2dv', form.current, 'seLdFs5qIGAM80fNq')

    e.target.reset()
   
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me </h2>

      <div className= "container contact__container">
        <div className= "contact__options">
          <article className='contact__option'>
            <MdOutlineMailOutline className="contact__option-icon"/>
            <h4>Email</h4>
            <h4>dsmikle97@gmail.com</h4>
            <a href="mailto:dsmikle97@gmail.com" target="_blank">Send me a message </a>
          </article>

        </div>
        {/* End of Contact options  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="First and Last Name" required />
          <input type="email" name='email' placeholder='Your Email' required ></input>
          <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
          <button type= 'submit' className ='btn btn-primary'>Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact