import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'


export const TabList = styled.ul`
    display: flex;
    grid-column: center-start / center-end;
    justify-content: space-around;
    margin: 5rem 0;
`




export const TabLink = styled.a`
     &,
    &:link,
    &:visited {
        list-style: none;
        text-transform: capitalize;
        font-weight: bold;
        cursor: pointer;
        color: black;
        text-decoration: none;
        margin-left: 10px;
        display: flex;
        align-items: center;
    }

    &:hover {
        color: ${({theme}) => theme.colors.primaryDark }
    }

    &.active {
        color:  ${({theme}) => theme.colors.primaryDark };
    }

   
`

export const TabItem = styled.li`
    font-size: 2rem;
    color: black;
    font-family: 'Josefin Sans', sans-serif;
    list-style: none;
    display: flex;
    align-items: center;
    flex-direction: column;

    svg {
        margin-right: 10px;
    }

    @media ${device.tabletPort} {
        margin: 2rem 0;
    }

    &::after {
        content: '';
        width: 30%;
        height: 4px;
        display: block;
        background-color: transparent;
    }

    

    &.active {
        &::after {
            background-color: ${({theme}) => theme.colors.primaryDark };

        }
    }





`