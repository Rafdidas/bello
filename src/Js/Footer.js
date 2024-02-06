// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay, Parallax } from 'swiper/modules';


const Footer = () => {
    const texts = [
        '세일이 오늘밤 종료됩니다.',
        '5만원 이상 구매 시 무료 배송입니다.',
        '블랙프라이데이 11/11 - 11/15',
        '세일이 오늘밤 종료됩니다.',
        '5만원 이상 구매 시 무료 배송입니다.',
        '블랙프라이데이 11/11 - 11/15',
        '세일이 오늘밤 종료됩니다.',
        '5만원 이상 구매 시 무료 배송입니다.',
        '블랙프라이데이 11/11 - 11/15',
        '세일이 오늘밤 종료됩니다.',
        '5만원 이상 구매 시 무료 배송입니다.',
        '블랙프라이데이 11/11 - 11/15',
    ]
    
   
    return (
        <footer>
            <Swiper modules={[Autoplay, Parallax]} centeredSlides={true} className="ft_txt_slide" spaceBetween={0} speed={5000} autoplay={{delay: 1, disableOnInteraction: false,}} loop={true} slidesPerView={'auto'}  >
                {
                    texts && texts.map((text, index) => (
                        <SwiperSlide key={index} className={`txt_slide`}>{text}</SwiperSlide>
                    ))
                }
            </Swiper>
            <div className="cs_info">
                <div className="wrap_inner">
                    <h3>CUSTOMER SERVICE</h3>
                    <p className="cs_time">평일(토,일 공휴일 휴무) 10:00 - 18:00 | 점심 13:00 - 14:00</p>
                    <p className="addr">반품주소 서울 강남구 논현동</p>
                </div>
            </div>
            <div className="copyright">
                <div className="wrap_inner">
                    <p className="copyright_text">Developed by Hyeongyu Park</p>
                    <p className="github"><a href="https://github.com/Rafdidas/bello" target="_blank" rel="noopener noreferrer">View Code</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;