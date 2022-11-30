import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import {Link} from 'react-scroll';
import {themeContext} from '../../Context';
import {useContext} from 'react';

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">yelynnpaing</div>
        <Toggle/>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType:'none'}}>
            <Link spy={true} to= "intro" smooth={true} >
              <li className='active nav-item' style={{borderBottom : darkMode ? 'black' : ''}}>Intro</li>
            </Link>
            <Link spy={true} to= "services" smooth={true}>
              <li className='nav-item' style={{borderBottom : darkMode ? 'black' : ''}}>Services</li>
            </Link>
            <Link spy={true} to= "achievement" smooth={true}  >
              <li className='nav-item' style={{borderBottom : darkMode ? 'black' : ''}}>Expriences</li>
            </Link>
            <Link spy={true} to= "portfolio" smooth={true}  >
              <li className='nav-item' style={{borderBottom : darkMode ? 'black' : ''}}>Demo Datas</li>
            </Link>
            <Link spy={true} to= "testimonials" smooth={true}  >
              <li className='nav-item' style={{borderBottom : darkMode ? 'black' : ''}}>Testimonials</li>
            </Link>

            <Link spy={true} to= "contact" smooth={true}  >
              <button className='btn n-btn'>Contact Me</button>
            </Link>
          </ul>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar