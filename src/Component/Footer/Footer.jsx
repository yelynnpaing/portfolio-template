import React from 'react';
import './Footer.css';
import wave from '../../img/wave.png';
import { SiGithub } from 'react-icons/si';
import { SiFacebook } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';


const Footer = () => {
  return (
    <div className="footer">
        <img src={wave} alt="" />
        <div className="f-content">
            <span>Recreatex by ylp</span>
            <div className="f-icons">
                <SiGithub/>
                <SiFacebook/>
                <SiLinkedin/>
            </div>
        </div>
    </div>
  )
}

export default Footer