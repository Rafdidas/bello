import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Parallax } from 'swiper/modules';

const TextSlide = () => {
    const texts0 = [
        'black friday 11.24-12.23, 30days',
        'black friday 11.24-12.23, 30days',
        'black friday 11.24-12.23, 30days',
        'black friday 11.24-12.23, 30days',
        'black friday 11.24-12.23, 30days',
        'black friday 11.24-12.23, 30days',
        'black friday 11.24-12.23, 30days',
        'black friday 11.24-12.23, 30days',
    ]

    return (
        <Swiper modules={[Autoplay, Parallax]} centeredSlides={true} className="txt_slide txt_slide0" spaceBetween={0} speed={5000} autoplay={{delay: 1, disableOnInteraction: false,}} loop={true} slidesPerView={'auto'}  >
            {
                texts0 && texts0.map((text, index) => (
                    <SwiperSlide key={index} className={`txt_slideBox`}>{text}</SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default TextSlide;