import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const MyPaginate = styled(ReactPaginate).attrs({activeClassName: 'active'})`
    margin-bottom: 2rem;
    grid-column: 1 / -1;
    height: 7vh;
    display: flex;
    background-color: ${({theme}) => theme.colors.secondaryDark};
    flex-direction: row;
    width: 80%;
    justify-self: center;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;

    li a {
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: bold;
      color:  white;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-width: 1px;
      border-style: solid;
      border-color: transparent;
      
    }
    li.previous,
    li.next{
        flex-basis: 30%;
        display: flex;
        justify-content: center;
        align-self: stretch;
        color: white;
        align-items: center;
        background-color: ${({theme}) => theme.colors.secondaryDark};
    }   
    li.next a,
    li.break a {
      border-color: transparent;
    }
    li.active a {
      border-color:${({theme}) => theme.colors.secondaryLight};
      color: ${({theme}) => theme.colors.secondaryLight};
    }
    li.disabled a {
      color: grey;
    }
    li.disable,
    li.disabled a {
      cursor: default;
    }
  `;
  