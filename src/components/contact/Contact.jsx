import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_313qm29', 'template_xk440aa', form.current, '2oZBjoNnYAnBmANou');
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
         
         <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>giorgiaciulla.pa@gmail.com</h5>
            <a href="mailto:giorgiaciulla.pa@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>Giorgia Ciulla</h5>
            <a href="https://m.me/giorgia.ciulla" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>Number</h5>
            <a href="https://api.whatsapp.com/send?phone=3332907403" target='_blank'>Send a message</a>
          </article>

        </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your full name" required />
        <input type="email" name="email" placeholder="Your email" required />
        <textarea name="message" rows="7" placeholder="Your message" required ></textarea>
      <button type="submit" className="btn btn-primary">Send message</button>
      </form>

      </div>
    </section>
  )
}

export default Contact