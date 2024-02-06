import { Link } from "react-router-dom";

import { cateMenu } from "./Data";
import { useState } from "react";
import SmlMenu from "./SmlMenu";

const Header = () => {

    const [prdCate] = useState(cateMenu);
    const [expandMenu, setExpandMenu] = useState({});
    const [lnbVisible, setLnbVisible] = useState(false);

    const toggleMenu = (mid) => {
        setExpandMenu((prev) => ({...prev, [mid]: !prev[mid]}));
        setLnbVisible(true);
    };

    const closeLnb = () => {
        setLnbVisible(false);
    }

    return (
        <>
            <header>
                <div className="gnb">
                    <h1><Link to={'/'}>bello</Link></h1>
                    <ul className="gnb_menu">
                        <li className="gnb_cart"><Link to={'/cart'}>cart</Link></li>
                        <li className="gnb_srch"><span>search</span></li>
                        <li className="gnb_menu"><span onClick={toggleMenu}>menu</span></li>
                    </ul>
                </div>
            </header>
            <nav className={`lnb ${lnbVisible ? "visible" : ""}`}>
                <div className="top_section">
                    <h1><Link to={'/'}>bello</Link></h1>
                    <p className="close" onClick={closeLnb}>close</p>
                </div>
                <ul className="menu_section">
                    <li><Link to={'/shop'}>신상품</Link></li>
                    <li><Link to={'/'}>인기상품</Link></li>
                    {
                        
                        prdCate.map(function(category, index){
                            return (
                                <li className="more_link" key={index}>
                                    <p onClick={()=> toggleMenu(category.mid)}>
                                        + { category.mid }
                                    </p>
                                    {expandMenu[category.mid] && (
                                        <SmlMenu navCategory={category.mid} cateMenu={cateMenu}/>
                                    )}
                                    
                                </li>
                            )
                        })
                    
                    }
                </ul>
                <ul className="my_menu">
                    <li><Link to={'/'}>프로모션</Link></li>
                    <li><Link to={'/'}>커뮤니티</Link></li>
                    <li><Link to={'/'}>고객센터</Link></li>
                </ul>
                <ul className="login_menu">
                    <li><Link to={'/'}>로그인</Link></li>
                    <li><Link to={'/'}>회원가입</Link></li>
                    <li><Link to={'/'}>마이페이지</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Header;