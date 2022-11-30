import React, { useContext } from 'react';
import './Toggle.css';
import {BsSunFill} from 'react-icons/bs';
import { BsMoonFill } from 'react-icons/bs';
import { themeContext } from '../../Context';

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode

  const handleClick = () => {
    theme.dispatch({type:'toggle'});
  }

  return (
    <div className='toggle' onClick={handleClick}>
        <BsMoonFill/>
        <BsSunFill/>
        <div className="toggle-btn"
          style={darkMode ? {left:'2px'} : {right:'2px'}}
        >
          
        </div>
    </div>
  )
}

export default Toggle