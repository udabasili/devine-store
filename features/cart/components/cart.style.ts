import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'


export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
`

export const CartItems = styled.div`
    height: 30vh;
    overflow-y: auto;
    width: 100%;
    padding: 2px;
    background-color: #F2F2F2BD;


`

export const CartTotal = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    width: 100%;
    padding: 1.5rem 2rem;
`
export const CartButtons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 1.5rem 2rem;
`

export const CartItemContainer = styled.div`
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: repeat(3, max-content);
    padding: 12px;
    column-gap: 10px;

    .remove {
        grid-column: 3 / 4;
        grid-row: 1 / 2;
        margin-left: 20px;
        cursor: pointer;
        fill: red;
    }

`

export const CartItemImage = styled.div`
    grid-column: 1 / 2;
    grid-row: 1 / 4;
    position: relative;
    height: 100%;
    width: 7rem;
`


export const CartItemName = styled.div`
    font-size: 1.6rem;
    font-weight: bolder;
    font-family: 'Josefin Sans', sans-serif;
    color:  ${({ theme }) => theme.colors.primaryDark};


`

export const CartItemQuantity = styled.div`
    grid-column: 2 / 3;
    font-size: 1.1rem;
    font-weight: 400;

    span:first-child {
        margin-right: 5px;
    }
    
    
`

export const CartItemPrice = styled.div`
    grid-column: 2 / 3;
    font-size: 1.1rem;
    font-weight: bold;

`