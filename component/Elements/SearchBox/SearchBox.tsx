import React from 'react'
import { Search, SearchInput, SearchButton } from './search-box.style'
import { BiSearchAlt } from "react-icons/bi";

const SearchBox = () => {
  return (
    <Search>
        <SearchInput type="text" placeholder="What are you looking for?"/>
        <SearchButton >
            <BiSearchAlt/>
        </SearchButton>
    </Search>
  )
}

export default SearchBox