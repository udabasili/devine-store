import styled from 'styled-components'

export const Search = styled.div`
    width: 100%;
    position: relative;
    display: flex;
`


export const SearchInput = styled.input`
    width: 80%;
    border: 3px solid black;
    border-right: none;
    padding: 5px;
    border-radius: 5px 0 0 5px;
    outline: none;
    color: #9DBFAF;

    &:focus{
        color: black;
    }
`

export const SearchButton = styled.div`
    width: 40px;
    height: 36px;
    border: 1px solid black;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
`