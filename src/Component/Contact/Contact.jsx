import { React, useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import {themeContext} from '../../Context';
import {useContext} from 'react';

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();
    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ej98fvo', 'template_prgto7r', form.current, 'fInf0TLxSW83jdjGA')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
  };
  return (
    <div className='c-wrapper' id='contact'>
        <div className="c-left">
            <span style={{color : darkMode ? 'var(--gray)' : ''}}>Get in Touch</span>
            <span>Contact Me</span>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}> 
                <input type="text" name='user_name' className='user' placeholder='name' />
                <input type="email" name='user_email' className='user' placeholder='name@gmail.com' />
                <textarea name="message" placeholder='text' />
                <button type='submit' value="Send" className='btn contact-btn'>Send</button>
                <span style={{color:"#7743DB"}}>{done && "Thanks for contacting Me !"}</span>
            </form>
        </div>
    </div>
  )
}

export default Contact