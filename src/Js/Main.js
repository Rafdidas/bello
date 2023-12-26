import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, Parallax } from 'swiper/modules';
const Main = () => {

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
        <div id="main">
            <div className="main_topTxt">
                <div className="wrap_inner">
                    <p className="txt_field">2024 BLACK FRIDAY</p>
                    <p className="txt_field">모든 상품 10% 할인</p>
                    <p className="txt_field">12월 03일까지 진행됩니다.</p>
                </div>
            </div>
            <Swiper pagination={{
                type: 'fraction',
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation ]}
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

            <Swiper modules={[Autoplay, Parallax]} centeredSlides={true} className="txt_slide txt_slide0" spaceBetween={0} speed={5000} autoplay={{delay: 1, disableOnInteraction: false,}} loop={true} slidesPerView={'auto'}  >
                {
                    texts0 && texts0.map((text, index) => (
                        <SwiperSlide key={index} className={`txt_slideBox`}>{text}</SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="main_new">
                <div className="bnr_img"><img src={process.env.PUBLIC_URL + '../img/new_bnr_mo1.png'} alt="new banner" /></div>
                <div className="new_txt wrap_inner">
                    <h3>매일 새롭게 만나는 아이템</h3>
                    <p className="sub_eng">New Arrivals</p>
                    <p className="sub_kor">
                        매일 새롭게 입고되는 상품을 만나보세요.<br/>
                        가볍지만 포근한 아이템들로 겨울을 미리 준비하세요.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main;