import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination,  } from 'swiper/modules';

import PrdBoxMd from "../PrdBoxMd";

const MdSlide = ({prdData}) => {
    return(
        <Swiper className="md_slide" 
            modules={[Autoplay, Pagination] }
            pagination={{
                type: 'progressbar',
            }}
            loop={true} 
            slidesPerView={1.4}
            spaceBetween={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            speed={700}
        >
            {
                prdData.map(function(prdData, index){
                    return (
                        <SwiperSlide key={index}><PrdBoxMd  prdData={prdData} /></SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default MdSlide;