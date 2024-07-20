import React from 'react'
import img from '@/app/assets/sliderTemp/img.jpg';
// import img1 from '@/assets/sliderTemp/img1.jpg';
import img1 from '@/app/assets/sliderTemp/img1.jpg';
import img2 from '@/app/assets/sliderTemp/img2.jpg';
import img3 from '@/app/assets/sliderTemp/img3.jpg';
import img4 from '@/app/assets/sliderTemp/img4.jpg';
import img5 from '@/app/assets/sliderTemp/img5.jpg';


import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
const width=window.innerWidth;
const height =window.innerHeight;


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function HomeSlider() {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
       <Image src={img} alt="" width={width} height={height /2} style={{objectFit:"cover"}}/>
       {/* slide1 */}
       </SwiperSlide>
      <SwiperSlide>
      <Image src={img1} alt="" width={width} height={height /2} style={{objectFit:"cover"}}/>
      {/* slide2 */}
      </SwiperSlide>
      <SwiperSlide>
      <Image src={img2} alt="" width={width} height={height /2} style={{objectFit:"cover"}}/>
      {/* slide2 */}
      </SwiperSlide><SwiperSlide>
      <Image src={img3} alt="" width={width} height={height /2} style={{objectFit:"cover"}}/>
      {/* slide2 */}
      </SwiperSlide>
      <SwiperSlide>
      <Image src={img4} alt="" width={width} height={height /2} style={{objectFit:"cover"}}/>
      {/* slide2 */}
      </SwiperSlide>
      <SwiperSlide>
      <Image src={img5} alt="" width={width} height={height /2} style={{objectFit:"cover"}}/>
      {/* slide2 */}
      </SwiperSlide>
   

    
    </Swiper>
    // <div>HomeSlider</div>
  )
}

export default HomeSlider
