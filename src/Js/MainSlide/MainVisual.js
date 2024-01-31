import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Autoplay, Pagination, Navigation, } from 'swiper/modules';


const MainVisual = () => {
    return (
        <Swiper pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[ Autoplay, Pagination, Navigation ]}
            loop={true}
            speed={'700'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="main_visual"
        >
            <SwiperSlide >
                <div className="bnr_img">
                    <img src={process.env.PUBLIC_URL + '../img/main_bnr_mo1.png'} alt="main banner" />
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="bnr_img">
                    <img src={process.env.PUBLIC_URL + '../img/main_bnr_mo1.png'} alt="main banner" />
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="bnr_img">
                    <img src={process.env.PUBLIC_URL + '../img/main_bnr_mo1.png'} alt="main banner" />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default MainVisual;