import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import nfts from '../../img/nfts.png';
import christmas from '../../img/christmas.png';
import uiExplorer from '../../img/uiExplorer.png';
import foodies from '../../img/foodies.png';
import diceGame from '../../img/diceGame.png';
import 'swiper/css';
import {themeContext} from '../../Context';
import {useContext} from 'react';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className='portfolio'>
        <span style={{color : darkMode ? 'var(--gray)' : ''}} >Recent Projects</span>
        <span>Portfolio</span>
        <Swiper 
             slidesPerView={3}
             spaceBetween={0}
             grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide >
                <img src={nfts} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={christmas} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={uiExplorer} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={foodies} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={diceGame} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio