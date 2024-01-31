import ListSlide from "./MainSlide/ListSlide";
import { list_txt, data } from "./Data";
import { useState } from "react";
import PrdBox from "./PrdBox";
import PaginationList from "./Pagination";

const ShopList = () => {
    const [listBnr] = useState(list_txt);
    const [prdData] = useState(data);
    const [selectedOption, setSeletedOption] = useState('신상품순');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

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

    return(
        <div id="shopList">
            <ListSlide listBnr={listBnr} />
            <div className="list_inner">
                <div className="list_filter">
                    <div className="field">필터</div>
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
    )
}

export default ShopList;