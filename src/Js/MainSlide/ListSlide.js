import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const ListSlide = ({listBnr}) => {
    
    return(
        <Swiper className="list_slide"
            slidesPerView={2.1}
            spaceBetween={4}
        >
            {
                listBnr.map(function(listBnr, index){
                    return (
                        <SwiperSlide key={index}>
                            <div className="img">
                                <img src={process.env.PUBLIC_URL + `../img/list_top_slide${index}.png`} alt="list banner"/>
                            </div>
                            <div className="txt">{listBnr.txt}</div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default ListSlide;