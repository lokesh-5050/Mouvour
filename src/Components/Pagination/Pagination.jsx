import React, { useContext, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { PageProvider } from '../../context/PageContext';
import '../Pagination/Pagination.css'
const Pagination = ({ data }) => {

    const [page, setPage] = useContext(PageProvider)
    const [currentData, setCurrentData] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [dataOffset, setDataOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const dataPerPage = 1;

    useEffect(() => {
        const endOffset = dataOffset + dataPerPage;
        setCurrentData(data.slice(dataOffset, endOffset))
        setPageCount(Math.ceil(data.length / dataPerPage));

    }, [data, dataOffset, dataPerPage, page])


    const handlePageClick = (event) => {
        const newOffset = (event.selected * dataPerPage) % data.length + 1;
        setPage(newOffset);
        setDataOffset(newOffset);
        // setCurrentPage(newOffset)
    };

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={8}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageClassName='page-num'
                previousClassName='page-num'
                nextClassName='page-num'
                activeClassName='active'
            // forcePage={currentPage}
            // forcePage={1}
            />
        </>
    );
}

export default Pagination