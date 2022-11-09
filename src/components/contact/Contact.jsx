/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './Contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { FaLine } from 'react-icons/fa'
import { FaFacebookMessenger } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { useContext} from "react"
import { ThemeContext } from '../../App'

function Contact() {
  const {theme} = useContext(ThemeContext)
  const form = useRef();
  const notify = () => toast.success('Successfully send Email');

    const sendEmail = (e) => { 
      e.preventDefault();
  
      emailjs.sendForm('service_f01prao', 'template_7z17nih', form.current, 'Od1F_ZAvv5WmaarX6')
        .then((result) => {
            console.log(result.text);
            notify()
        }, (error) => {
            console.log(error.text);
        });

      e.target.reset()  
    };

  return (
    <section id='contact'>
      <h5>{theme === "TH" ? "การติดต่อ" : "Get In Touch"}</h5>
      <h2>{theme === "TH" ? "ติดต่อโดยตามช่องทางนี้" : "Contact Me"}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>bakpu@gmail@gmail.com</h5>
            <a href="mailto:bakpu@gmail@gmail.com" target='_blank'>{theme === "TH" ? "ส่งข้อความ" : "Send a Message"}</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messager</h4>
            <h5>ลี ดอง ปู</h5>
            <a href="https://m.me/li.dxngpu" target='_blank'>{theme === "TH" ? "ส่งข้อความ" : "Send a Message"}</a>
          </article>
          <article className="contact__option">
            <FaLine className='contact__option-icon'/>
            <h4>LINE</h4>
            <h5>ID Line: @bakpu555</h5>
            <a href="https://line.me/ti/p/H5BJftIhF2" target='_blank'>{theme === "TH" ? "ส่งข้อความ" : "Send a Message"}</a>
          </article>
        </div>
        {/* END OF CONTACT OPTION */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={theme === "TH" ? "ใส่ชื่อของคุณ" : 'Your Full Name'} required/>
          <input type="email" name='email' placeholder={theme === "TH" ? "ใส่อีเมล์ของคุณ" : 'Your Email'} required />
          <textarea name="message" rows="7" placeholder={theme === "TH" ? "กรอกข้อความที่ต้องการ" : 'Your Message'} required></textarea>
          <button type='submit' className='btn btn-primary'>{theme === "TH" ? "ส่งข้อความ" : "Send Message"}</button>
          <Toaster 
            position="top-center"
            reverseOrder={true}
          />
        </form>
      </div>
    </section>
  )
}

export default Contact