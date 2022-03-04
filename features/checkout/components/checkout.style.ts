import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'

export const CheckOutItemContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: min-content 10rem  min-content max-content min-content;
    grid-template-rows: 1fr;
    min-height: 100px;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    padding: 15px 5px;
    font-size: 1.4rem;
    align-items: center;

    .remove-button {
        margin: 12px;
        color: red;
        cursor: pointer;
    }

    .price {
        font-size: 1.5rem;
    }

    @media ${device.mobile} {
        justify-content: space-evenly;

    }
`
export const CheckOutItemImage = styled.div`
     width: 100%;
      position: relative;
      height: 100%;

      @media ${device.mobile} {
        display: none;

    }
`

export const CheckOutItemName = styled.span`
    margin: 3rem;
    font-size: 2rem;
      @media ${device.mobile} {
        font-size: 1.8rem;

    }
`

export const CheckOutItemQuantity = styled.span`
    margin: 3rem;
    font-size: 2rem;
    display: flex;
      margin: 2rem;
      font-size: 1.6rem;
      justify-content: space-around;

    .button {
        padding:  0 2rem;
	  cursor: pointer;
    }
      @media ${device.mobile} {
        font-size: 1.8rem;

    }
`


export const CheckOutItemPrice = styled.span`
    margin: 3rem;
    font-size: 2rem;
      @media ${device.mobile} {
        font-size: 1.8rem;

    }
`