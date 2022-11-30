import React from 'react';
import './Experience.css';
import {themeContext} from '../../Context';
import {useContext} from 'react';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="achievement">
        <div className='achievement-wrapper'>
        <div className="experience" 
          style={{color : darkMode ? 'var(--gray)' : ''}}
        >
            <span className='circle'>5+</span>
            <span>Years</span>
            <span>Experience</span>
        </div>
        <div className='experience'
          style={{color : darkMode ? 'var(--gray)' : ''}}
        >
            <span className="circle">10+</span>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className="experience"
          style={{color : darkMode ? 'var(--gray)' : ''}}
        >
            <span className="circle">3+</span>
            <span>Difference</span>
            <span>Companies</span>
        </div>
        
    </div>
    </div>
  )
}

export default Experience