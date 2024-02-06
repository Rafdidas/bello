import ListSlide from "./MainSlide/ListSlide";
import { list_txt, data, filterColor } from "./Data";
import { useState } from "react";
import PrdBox from "./PrdBox";
import PaginationList from "./Pagination";

const ShopList = () => {
    const [listBnr] = useState(list_txt);
    const [prdData] = useState(data);
    const [selectedOption, setSeletedOption] = useState('신상품순');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const [colorFilter] = useState(filterColor);

    const optionChange = (event) => {
        setSeletedOption(event.target.value);
        setCurrentPage(1);
    };

    const indexLastItem = currentPage * itemsPerPage;
    const indexFirstItem = indexLastItem - itemsPerPage;
    const currentItems = prdData.slice(indexFirstItem, indexLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const firstPage = () => setCurrentPage(1);
    const lastPage = () => setCurrentPage(Math.ceil(prdData.length / itemsPerPage));

    const [filterVisible, setFilterVisible] = useState(false);

    const toggleMenu = () => {
        setFilterVisible(true);
    };

    const closeLnb = () => {
        setFilterVisible(false);
    };

    return(
        <>
            <div id="shopList">
                <ListSlide listBnr={listBnr} />
                <div className="list_inner">
                    <div className="list_filter">
                        <div className="field" onClick={toggleMenu}>필터</div>
                        <select value={selectedOption} onChange={optionChange}>
                            <option value={'신상품순'}>신상품순</option>
                            <option value={'인기많은순'}>인기많은순</option>
                        </select>
                    </div>
                    <div className="prd_list">
                        {
                            currentItems.map(function(prdData, index){
                                return(
                                    <PrdBox prdData={prdData} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="pagination_section">
                    <PaginationList
                        itemsPerPage={itemsPerPage}
                        totalItems={prdData.length}
                        currentPage={currentPage}
                        paginate={paginate}
                        firstPage={firstPage}
                        lastPage={lastPage}
                    />
                </div>
            </div>
            <div className={`filter_pop ${filterVisible ? "visible" : ""}`}>
                <div className="top_section">
                    <p className="filter_title">필터<span></span></p>
                    <p className="close" onClick={closeLnb}>close</p>
                </div>
                <div className="sort_section">
                    <div className="field">
                        <h3>분류</h3>
                        <label><input type="checkbox"/>전체보기</label>
                        <label><input type="checkbox"/>스커트</label>
                        <label><input type="checkbox"/>드레스/셋업</label>
                    </div>
                    <div className="field">
                        <h3>상품정보</h3>
                        <label><input type="checkbox"/>무료배송</label>
                        <label><input type="checkbox"/>할인상품만</label>
                        <label><input type="checkbox"/>품절상품 제외</label>
                    </div>
                    <div className="field">
                        <h3>가격대</h3>
                        <label><input type="checkbox"/>전체 가격</label>
                        <label><input type="checkbox"/>4,900원 ~ 10,000원</label>
                        <label><input type="checkbox"/>10,000원 ~ 50,000원</label>
                        <label><input type="checkbox"/>100,000원 ~ 500,000원</label>
                        <label><input type="checkbox"/>500,000원 ~ 1,000,000원</label>
                    </div>
                </div>
                <div className="btn_color">
                    <div className="field">
                        <span className="btn white_btn">취소</span>
                        <span className="btn black_btn">확인</span>
                    </div>
                    <div className="color_list">
                        {
                            colorFilter.map(function(colorFilter, index){
                                return(
                                    <div className="unit" key={index}>
                                        <span style={{background : colorFilter.code}}></span>{colorFilter.txt}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopList;