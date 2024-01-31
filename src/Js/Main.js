
import {data, } from "./Data";
import { useState } from "react";

import TextSlide from "./TextSlide";
import MainVisual from "./MainSlide/MainVisual";
import NewPrdSlide from "./MainSlide/NewPrdSlide";
import MidBnr from "./MainSlide/MidBnr";
import MdSlide from "./MainSlide/MdSlide";
import BottomBnr from "./MainSlide/BottomBnr";

const Main = () => {

    const [prdData, setPrdData] = useState(data);

    return (
        <div id="main">
            <div className="main_topTxt">
                <div className="wrap_inner">
                    <p className="txt_field">2024 BLACK FRIDAY</p>
                    <p className="txt_field">모든 상품 10% 할인</p>
                    <p className="txt_field">12월 03일까지 진행됩니다.</p>
                </div>
            </div>
            <MainVisual/>
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
                    <NewPrdSlide prdData={prdData} setPrdData={setPrdData} />
                </div>
            </div>
            <TextSlide/>
            <MidBnr/>
            <TextSlide/>
            <div className="main_md">
                <div className="md_prdList">
                    <MdSlide prdData={prdData} setPrdData={setPrdData} />
                </div>
            </div>
            <TextSlide/>
            <div className="main_md_txt">
                <div className="bnr_img">
                    <img src={process.env.PUBLIC_URL + '../img/md_bnr.png'} alt="md banner" />
                </div>
                <div className="md_txt">
                    <h3>엠디가 선택한 추천상품</h3>
                    <p className="sub_eng">MD's choice</p>
                    <p className="sub_kor">엠디들도 소장하고 싶은, 위시리스트 가볍지만 포근한 아이템들로 겨울을 미리 준비하세요.</p>
                </div>
                <BottomBnr/>
            </div>
        </div>
    )
}

export default Main;