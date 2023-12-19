import { Link } from "react-router-dom";

const Header = () => {

    return (
        <header>
            <div className="gnb">
                <h1><Link to={'/'}>bello</Link></h1>
                <ul className="gnb_menu">
                    <li className="gnb_cart"><Link to={'/cart'}>cart</Link></li>
                    <li className="gnb_srch"><span>search</span></li>
                    <li className="gnb_menu"><span>menu</span></li>
                </ul>
            </div>
        </header>
    )
}
export default Header;