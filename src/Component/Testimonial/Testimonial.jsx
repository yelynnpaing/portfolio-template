import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import profile1 from '../../img/profile1.jpg';
import profile2 from '../../img/profile2.jpg';
import profile3 from '../../img/profile3.jpg';
import profile4 from '../../img/profile4.jpg';
import profile5 from '../../img/profile5.jpg';
import profile6 from '../../img/profile6.jpg';
import {themeContext} from '../../Context';
import {useContext} from 'react';

const Testimonial = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const datas = [
        {
            img:profile3,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, deserunt similique totam voluptates aspernatur perferendis temporibus itaque eum, animi molestiae fuga repellendus illo asperiores commodi.",
        },
        {
            img:profile2,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, deserunt similique totam voluptates aspernatur perferendis temporibus itaque eum, animi molestiae fuga repellendus illo asperiores commodi.",
        },
        {
            img:profile1,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, deserunt similique totam voluptates aspernatur perferendis temporibus itaque eum, animi molestiae fuga repellendus illo asperiores commodi.",
        },
        {
            img:profile4,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, deserunt similique totam voluptates aspernatur perferendis temporibus itaque eum, animi molestiae fuga repellendus illo asperiores commodi.",
        },
        {
            img:profile5,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, deserunt similique totam voluptates aspernatur perferendis temporibus itaque eum, animi molestiae fuga repellendus illo asperiores commodi.",
        },
        {
            img:profile6,
            review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, deserunt similique totam voluptates aspernatur perferendis temporibus itaque eum, animi molestiae fuga repellendus illo asperiores commodi.",
        }
    ]

  return (
        <div className="t-wrapper" id='testimonials'>
            <div className="t-heading">
                <span style={{color : darkMode ? 'var(--gray)' : ''}} >Client Always get </span>
                <span>Exceptional Works </span>
                <span style={{color : darkMode ? 'var(--gray)' : ''}} >from me ...... </span>
            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView = {1}
                pagination ={{clickable: true}}
            >
                {datas.map((data, index)=>{
                    return(
                        <SwiperSlide key={index}>
                           <div className="testimonial" style={{background : darkMode ? 'white' : ''}}>
                                <img src={data.img} alt="" />
                                <span>{data.review}</span>
                           </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </div>
  )
}

export default Testimonial