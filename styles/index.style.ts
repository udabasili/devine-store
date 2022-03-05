import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'

export const ProductDetail = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column: col-start 1 / col-end 8;
    grid-template-rows: repeat(4, min-content);
    padding: 6rem;
    gap: 8rem;

    @media ${device.tabletPort} {
        grid-template-columns: 1fr;
        grid-template-rows: max-content;

    }

    a {
        align-self: flex-end;
        text-align: center;
        justify-content: center;

    }

`

export const ProductDetailImage = styled.div`
    grid-column: 1 / 2;
    position: relative;
    grid-row: 1 / -1;

    @media ${device.tabletPort} {
        grid-column: 1 / -1;
        height: 50vh;
    }
`

export const ProductPrice = styled.div`
    grid-column: 2 / 3;
    margin-bottom: 10rem;

    @media ${device.tabletPort} {
        grid-column: 1 / -1;
        margin-bottom: 5rem;
    }
`

export const ProductSizes = styled.div`


    grid-column: 2 / 3;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));

    @media ${device.tabletPort} {
        grid-column: 1 / -1;
    }

    h3 {
        grid-column: 1 / -1
    }
`

export const ProductSize = styled.div`
    border: .5px solid black;
    display: flex;
    justify-content: center;
    width: 5rem;
    font-size: 1.4rem;
    height: 5rem;
    align-items: center;
    cursor: pointer;

    &.selected {
        border-width: 2px;
        background-color: ${({theme}) => theme.colors.secondaryLight};
    }


`

export const ProductQuantity = styled.div`
    align-self: center;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    width: 50%;
    overflow: hidden;
    justify-self: flex-end;

    .counter {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        padding: 6px 0;
    }

    .button {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        width: 4rem;
        cursor: pointer;

        &:hover {
            opacity: .7
        }

        svg {
            font-size: 2rem;
            fill: black;
        }
    }



`

export const ProductButtons = styled.div`
    display: flex;
    justify-content: flex-end ;

    a {
        flex: 1;
    }
    .wishlist {
        width: 4rem;
        margin-left: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border: 2px solid black;
        cursor: pointer;
        color: grey;

        &.selected {
            svg {
                color: red;

            }
        }
    }

    .wishlist:hover {
        opacity: .8
    }
`
