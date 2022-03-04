import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import ReactPaginate from "react-paginate";
import { MyPaginate } from "./pagination.style";

type PaginationProps = {
    pageCount: number
    handlePageClick: (e: {
        selected: number;
    }) => void

}

function Pagination(props: PaginationProps) {

    const {pageCount, handlePageClick} = props
  
    return (
        <MyPaginate
          breakLabel="..."
          nextLabel={<AiFillCaretRight size={'2rem'}/>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel={<AiFillCaretLeft size={'2rem'}/>}
        />
    );
  }

export default Pagination;