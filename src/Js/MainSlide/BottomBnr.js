import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, } from 'swiper/modules';

const BottomBnr = () => {
    return(
        <Swiper 
            modules={[ Autoplay, ]}
            slidesPerView={3.3}
            spaceBetween={2}
            loop={true}
            speed={'700'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            effect={'fade'}
            className="bottom_bnr"
        >
            <SwiperSlide>
                <img src={process.env.PUBLIC_URL + `../img/bottom_slide0.png`} alt="bottom banner"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={process.env.PUBLIC_URL + `../img/bottom_slide1.png`} alt="bottom banner"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={process.env.PUBLIC_URL + `../img/bottom_slide2.png`} alt="bottom banner"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={process.env.PUBLIC_URL + `../img/bottom_slide3.png`} alt="bottom banner"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={process.env.PUBLIC_URL + `../img/bottom_slide0.png`} alt="bottom banner"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={process.env.PUBLIC_URL + `../img/bottom_slide1.png`} alt="bottom banner"/>
            </SwiperSlide>
        </Swiper>
    )
}

export default BottomBnr;