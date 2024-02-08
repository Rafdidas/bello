import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination,  } from 'swiper/modules';

const Detail = () => {
    return(
        <div id="detail">
            <div className="detail_img">
                <Swiper
                    className="detail_slide"
                    slidesPerView={1.6}
                    modules={[ Pagination ]}
                    pagination={{
                        type: 'fraction',
                    }}
                >
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + `../../img/detail0.png`} alt="product_image"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + `../../img/detail1.png`} alt="product_image"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={process.env.PUBLIC_URL + `../../img/detail1.png`} alt="product_image"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Detail;