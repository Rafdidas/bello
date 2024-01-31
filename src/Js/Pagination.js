const PaginationList = ({ itemsPerPage, totalItems, currentPage, paginate, firstPage, lastPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(i);
    }

    return(
        <ul className="pagination">
            <li className={currentPage === 1 ? 'first_page disabled' : 'first_page'}>
                <span onClick={firstPage}>start</span>
            </li>
            {
                pageNumbers.map((number, index) => (
                    <li key={index} className={currentPage === number ? 'active' : ''}>
                        <span onClick={() => paginate(number)}>
                            {number}
                        </span>
                    </li>
                ))
            }
            <li className={currentPage === Math.ceil(totalItems / itemsPerPage) ? 'last_page disabled' : 'last_page'}>
                <span onClick={lastPage}>last</span>
            </li>
        </ul>
    )
}

export default PaginationList;