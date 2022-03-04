import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'

export const CartIcon = styled.div`
    width: 3rem;
    border-radius: 50%;
    height: 3rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4rem;

    @media ${device.tabletPort} {
        margin: 0
    }

`

export const CartDropDownContainer = styled.div`
    display: block;
    border-color: ${({ theme }) => theme.colors.primary};
    border-width: 2px;
    border-style: solid;
    width: 30vw;
    background-color: white;
    position: fixed;
    top: 10vh;
    z-index: 20;
    right: 0;

    @media ${device.tabletPort} {
        width: 50vw;
    }


    @media ${device.mobile} {
        top: 10vh;
        width: 70vw;
    }

    .cart-header {
        display: flex;
        flex-direction: column;
        top: 0;
        left: 0;
        height: 5vh;
        background-color: black;
        width: 100%;
        align-items: flex-end;
        flex-direction: column;
        justify-content: center;

        svg {
            fill: red;
            margin-right: 10px;
            cursor: pointer
        }

    }
`

export const Badge= styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    right: calc(0px - 7.5px);
    background: black;
    z-index: 2;
    border-radius: 50%;
    top: calc(0px - 7.5px);
`