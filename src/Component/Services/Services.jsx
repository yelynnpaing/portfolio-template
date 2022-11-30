import React from 'react';
import './Services.css';
import Card from '../Card/Card';
import codeSlash from '../../img/codeSlash.svg';
import grid from '../../img/grid.svg';
import checkCircle from '../../img/checkCircle.svg';
import sample from '../Services/sample.pdf';
import {themeContext} from '../../Context';
import {useContext} from 'react';
import {motion} from 'framer-motion';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration : 2 , type : 'spring'};

  return (
    <div className='services'>
        {/* left */}
        <div className='s-left'>
            <div className="s-texts">
                <span style={{color : darkMode ? 'var(--gray)' : ''}} >You Know ? </span>
                <span>Awsome Services</span>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className='s-br' /> 
                Molestias fuga at facilis cum, vel dicta <br className='s-br' /> 
                similique laborum <br className='smb-br' /> asperiores.</span>
            </div>
            <a href={sample} download>
              <button className='btn s-btn'>Download Cv</button>
            </a>
        </div>
        
        {/* right */}
        <div className="cards">
          <motion.div
            initial = {{right : '-23rem'}}
            whileInView = {{right : '-20rem'}}
            transition = {transition}
            style={{right:'-20rem'}}>
            <Card image={codeSlash} txt={'Front End Dev'} detail= {'HTML5, Css3, BootStrap5, JavaScript, React'}/>
          </motion.div>
          <motion.div
            initial = {{left : '3rem'}}
            whileInView = {{left : '6rem'}}
            transition = {transition}
            style={{left:'6rem', top:'8rem'}}>
            <Card image={grid} txt={'Design'} detail= {'Photoshop , Adobe Illustrator, Adobe Xd'}/>
          </motion.div>
          <div style={{left:'20rem', top:'15rem'}}>
            <Card image={checkCircle} txt={'UI/UX'} detail= {'Lorem ipsum dolor, Lorem ipsum dolor, adipisicing elit'}/>
          </div>
        </div>
    </div>
    
  )
}

export default Services