import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'

export const ProductSummaryContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 1rem;
    column-gap: 2rem;
`
export const ProductCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    /* background-image: ${({ image }) => `url(${image})` }; */

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    span {
        grid-column: 1 / -1;
        object-fit: cover;
        position: relative;
    }

    .success {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        justify-self: flex-end;
        position: absolute;
        margin: 1rem;
        z-index: 10;
    }

    .primary {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        justify-self: flex-start;
        position: absolute;
        margin: 1rem;
        z-index: 10;
    }
`

export const ProductCardImage = styled.div`
    width: 100%;
    border-radius: 50%;
    overflow: hidden;
`
export const ProductCardName = styled.div`
    grid-row: 3 / 4;
    grid-column: 1 / -1;
    justify-self: center;
    align-self: flex-end;
    z-index: 3;
    width: 100%;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.8rem;
    text-align: center;
    padding: 2.5rem 1.25rem;
    background-color: ${({ theme }) => theme.colors.secondaryLight};
    color: gray;
    font-weight: bold;
`
export const ProductCardPrice = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    justify-self: center;
    align-self: flex-end;
    z-index: 3;
    width: 100%;
    font-family: "Josefin Sans", sans-serif;
    font-size: 1.6rem;
    text-align: center;
    padding: 1.25rem;
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    color: white;
    font-weight: 400;
`

export const ProductCardLink = styled.a`
    &,
    &:link,
    &:visited {
        font-size: 2.2rem;
        font-weight: 500;
        font-family: 'Josefin Sans', sans-serif;
        text-transform: uppercase;
        line-height: 1.1;
        cursor: pointer;

        @media ${device.tabletPort} {
            font-size: 2rem;
        }
    }

    &:hover {
        color:${({ theme }) => theme.colors.primaryLight};
        border-bottom: 2px solid ;
        border-color: ${({ theme }) => theme.colors.primaryLight};
    }

`
export const ProductsContainer = styled.div`
    grid-column:  col-start 3 / -1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    grid-row: 2 / 3;
    gap: 2rem;
    width: 100%;
    padding: 2rem;

    @media ${device.tabletPort} {
        grid-column: 1 / -1
    }


`