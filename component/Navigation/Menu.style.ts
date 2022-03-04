import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'


export const MenuContainer = styled.label`
    background-color: white;
    display: none;
    grid-column: 1 / 2;
    grid-row: 1;
    width: 4rem;
    align-self: center;
    justify-self: center;
    height: 4rem;
    cursor: pointer;
    border: 2px solid black;
    justify-content: center;
    align-items: center;
    

    @media ${device.tabletPort} {
        display: flex;
    }

    @media ${device.mobile} {
        width: 3rem;
        height: 3rem;
    }
`

export const MenuIcon = styled.span`
    background-color: black;
    display: flex;
    width: 2.5rem;
    height: 4px;
    position: relative;


    @media ${device.mobile} {
        width: 2rem;
    }

    
    ::after,
    ::before {
        content: '';
        display: flex;
        width: 2.5rem;
        height: 4px;
        background-color: black;
        position: absolute;

        @media ${device.mobile} {
            width: 2rem;
        }
    }

    ::after {
        top: -5px
    }
    ::before {
        top: 5px
    }

`


export const Input = styled.input`
    display: none;

    &:checked ~ .nav-list{
        transform: translateX(0);

    }

    &:checked ~ .menu .menu-icon {

        background: transparent;

        ::after {
            top: 0;
            transform: rotate(45deg);
        }
        ::before {
            top: 0;
            transform: rotate(135deg);
        }
    }

    
`