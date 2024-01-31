import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { useState } from "react";

import { bnr_text } from "../Data";

const MidBnr = () => {

    const [bnr, setBnr] = useState([1,2,3]);

    return(
        <Swiper pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[ Autoplay, Pagination, Navigation, EffectFade ]}
            loop={true}
            speed={'700'}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            effect={'fade'}
            className="mid_bnr"
        >
            {
                bnr.map(function(bnr,index){
                    return (
                        <SwiperSlide key={index}>
                            <img src={process.env.PUBLIC_URL + `../img/mid_bnr${index}.png`} alt="mid banner"/>
                            <div className="txt">
                                <h3>{bnr_text[index].title}</h3>
                                <p>{bnr_text[index].sub}</p>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default MidBnr;