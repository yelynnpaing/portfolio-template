import React from 'react';
import './Client.css';
import amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import Upwork from '../../img/Upwork.png';
import Shopify from '../../img/Shopify.png';
import fiverr from '../../img/fiverr.png';
import {themeContext} from '../../Context';
import {useContext} from 'react';
import {motion} from 'framer-motion';

const Client = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='client'>
         <div className='cl-left'>
            <div className="cl-texts">
                <span style={{color : darkMode ? 'var(--gray)' : ''}} >Work for All these </span>
                <span>Brands & Clients</span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                    Molestias fuga at facilis cum, vel dicta <br/>
                    similique laborum asperiores. 
                </span>
            </div>
            <button className='btn cl-btn'>Hire Me</button>
        </div>
        <div className="cl-right">
            <div className="bg-cricle c-one">
            </div>
            <div className="bg-cricle c-two">
            </div>
            <motion.div 
                initial = {{rotate : 45}}
                whileInView = {{rotate : 0}}
                viewport = {{margin : '-40px'}}
                transition = {{duration : 3.5 , type : 'spring'}}
                className="circle-wrapper">
                    <div className="small-circle">
                        <img src={amazon} alt="" />
                    </div>
                    <div className="small-circle">
                        <img src={Facebook} alt="" />
                    </div>
                    <div className="small-circle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="small-circle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="small-circle">
                        <img src={fiverr} alt="" />
                    </div>
                </motion.div>
        </div>
    </div>
  )
}

export default Client