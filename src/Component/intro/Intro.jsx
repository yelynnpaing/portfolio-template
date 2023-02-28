import React from 'react';
import './Intro.css'; 
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import ylpIntro from '../../img/ylpIntro.png';
import html5 from '../../img/html5.png';
import css3 from '../../img/css3.png';
import javascript from '../../img/javascript.png';
import react from '../../img/react.png';
import { RiGitBranchFill, RiGithubLine } from 'react-icons/ri';
import { GrFacebook } from 'react-icons/gr';
import { BsLinkedin } from 'react-icons/bs';
import {themeContext} from '../../Context';
import {useContext} from 'react';
import {motion} from 'framer-motion';
import Link from 'react-scroll/modules/components/Link';

const Intro = () => {

    const transition = {duration : 2 , type : 'spring'};

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-icon-group">
                <motion.div 
                    initial = {{bottom: '-10%'}}
                    whileInView = {{bottom: '-5%'}}
                    transition = {transition}
                    style={{position: "absolute" , right:'23%', bottom:'-5%'}}>
                        <FloatingDiv image={html5} />
                </motion.div>
                <motion.div 
                    initial = {{right:'7%'}}
                    whileInView = {{right:'12%'}}
                    transition = {transition}
                    style={{position:"absolute" , right:'25%', top:'25%'}}>
                        <FloatingDiv image= {css3} />
                </motion.div>
                <motion.div 
                    initial = {{top:'-11%'}}
                    whileInView = {{top:'-6%'}}
                    transition = {transition}
                    style={{position:'absolute', left:'45%' , top:'-6%'}}>
                        <FloatingDiv image = {javascript} />
                </motion.div>
                <motion.div 
                    initial = {{left:'5%'}}
                    whileInView = {{left:'10%'}}
                    transition = {transition}
                    style={{position:'absolute' , left:'10%', top:'12%'}}> 
                        <FloatingDiv image = {react} />
                </motion.div>
            </div>
            <img src={ylpIntro} alt="" />
            <div className='blur' style={{ backgroundColor:"rgb(177, 178, 255)"}}></div>
        </div>
        <div className="i-right">
            <div className="i-name">
                <span 
                    style={{color : darkMode ? 'var(--gray)' : ''}}
                >
                    Hello! I am
                </span>
                <span>Front End Dev...</span>
                <span>
                Lorem ipsum dolor,amet adipisicing elitelit. Saepe, minus eum magnam excepturi 
                sed odit a cumque fugiat, enim! Quibusda unde perferendis rerum 
                reicien perferendis rerumreicie natusreicien 
                perferendis rerumreicie natus?
                </span>
                <button className='btn i-btn'>Hire Me</button>
            </div>
            <div className="i-icons">
                <RiGithubLine className='i-githubIcon' style={{color : darkMode ? 'var(--gray)' : ''}} />
                <BsLinkedin className='i-liknedinIcon' style={{color : darkMode ? 'var(--gray)' : ''}} />
                <GrFacebook  className="i-facebookIcon" style={{color : darkMode ? 'var(--gray)' : ''}} />
            </div>
        </div>
    </div>
  )
}

export default Intro