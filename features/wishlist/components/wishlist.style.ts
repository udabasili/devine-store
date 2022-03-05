import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'


export const WishListItemContainer = styled.div`
    display: grid ;
    grid-template-columns: 10rem 1fr max-content ;
    grid-column: center-start / center-end ;
    border: 2px solid #e5e5e5;

`

export const WishListItemImage = styled.div`
    width: 100%;
    height: auto ;
    position: relative;
    
`

export const WishListItemDetails = styled.div`
    padding: 15px 10px !important;
    display: flex;
    flex-direction: column;

    .name {
        font-size: 2rem ;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
    }

    .price {
        font-size: 1.5rem ;
        font-weight: 500;
        color: gray ;
    }
    
`

export const WishListItemButtons = styled.div`
    padding: 10px;
    display: flex;
    align-items: flex-end ;
`