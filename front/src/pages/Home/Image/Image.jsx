import React from 'react'
// import "./image.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './image.css';

// import required modules
import { Navigation } from 'swiper/modules';
const Image = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='img'></div>
        </SwiperSlide>
        <SwiperSlide><div className='img1'></div></SwiperSlide>
        <SwiperSlide><div className='img'></div>
        </SwiperSlide>
        <SwiperSlide><div className='img1'></div></SwiperSlide>
      </Swiper>

    </div>
  )
}

export default Image