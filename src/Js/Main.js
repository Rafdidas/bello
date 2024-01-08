import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import PrdBoxNew from "./PrdBoxNew";
import {data, bnr_text } from "./Data";
import { useState } from "react";

import TextSlide from "./TextSlide";
import PrdBoxMd from "./PrdBoxMd";

const Main = () => {

    const [prdData, setPrdData] = useState(data);
    const [bnr, setBnr] = useState([1,2,3]);

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
            <TextSlide/>
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
                
                <div className="new_prdList">
                    <Swiper className="new_slide" 
                        modules={[Autoplay, Pagination] }
                        pagination={{
                            type: 'progressbar',
                        }}
                        loop={true} 
                        slidesPerView={2.3}
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
                                <SwiperSlide key={index}><PrdBoxNew prdData={prdData} /></SwiperSlide>
                            )
                        })
                    }
                    </Swiper>
                </div>
            </div>
            <TextSlide/>
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
                                <img src={process.env.PUBLIC_URL + `../img/mid_bnr${bnr}.png`} alt="mid banner"/>
                                <div className="txt">
                                    <h3>{bnr_text[index].title}</h3>
                                    <p>{bnr_text[index].sub}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <TextSlide/>
            <div className="main_md">
                <div className="md_prdList">
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
                </div>
            </div>
        </div>
    )
}

export default Main;