import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/effect-coverflow'; // Swiper effect coverflow styles
import 'swiper/css/pagination'; // Swiper pagination styles
import 'swiper/css/navigation'; // Swiper navigation styles

// Import Swiper modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import images
import slide_image_1 from './assets/images/img_1.jpg';
import slide_image_2 from './assets/images/img_2.jpg';
import slide_image_3 from './assets/images/img_3.jpg';
import slide_image_4 from './assets/images/img_4.jpg';
import slide_image_5 from './assets/images/img_5.jpg';
import slide_image_6 from './assets/images/img_6.jpg';
import slide_image_7 from './assets/images/img_7.jpg';

// Main component
function App() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          // depth: 100,
          modifier: 3.5,
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]} // Pass Swiper modules
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="Flower 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="Flower 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="Flower 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="Flower 4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="Flower 5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="Flower 6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="Flower 7" />
        </SwiperSlide>

        {/* Navigation and Pagination controls */}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
