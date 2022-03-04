import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'

export const NavContainer = styled.nav`
    grid-column: full-start / full-end;
    display: grid;
    position: relative;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: 20vh;

    @media ${device.tabletPort} {
        grid-template-rows: 1fr;
        height: 10vh;
        background-color: white;

    }
`

export const UserNav = styled.div`
    grid-column: 3 / 4;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

        .user-info {
            display: flex;
            flex: 1;
            justify-content: space-evenly;

            @media ${device.tabletPort} {
                position: fixed;
                width: 100vw;
                height: 10vh;
                background-color: black;
                left: 0;
                z-index: 20;
                align-items: center;
                flex-direction: row;
                bottom: 0;

                svg {
                    fill: white
                }
            }
        

    }

    
    
`

export const NavList = styled.ul`
    background-color: ${({ theme }) => theme.colors.primary};
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    grid-row: 2;
    position: relative;

    @media ${device.tabletPort} {
        position: fixed;
        transform: translateX(-40vw);
        justify-content: flex-start;
        flex-direction: column;
        top: 0;
        transition: all 1s;
        left: 0;
        height: 100vh;
        width: 40vw;
        z-index: 20;
    }

    @media ${device.mobile} {
        height: 100vh;
        width: 60vw;
        transform: translateX(-60vw);
    }
`
export const NavLink = styled.li`
    &,
    &:link,
    &:visited {
        list-style: none;
        text-transform: capitalize;
        font-weight: bold;
        cursor: pointer;
        font-size: 2rem;
    }

    &:hover {
        color: ${({theme}) => theme.colors.primaryDark }
    }
    &.active {
        color: black;
    }
`

export const NavHeader = styled.div`

    display: none;

    @media ${device.tabletPort} {
        display: flex;
        flex-direction: column;
        top: 0;
        left: 0;
        height: 10vh;
        background-color: black;
        width: 100%;
        z-index: 20;
        align-items: flex-end;
        flex-direction: column;
        justify-content: center;

    }

    svg {
        fill: red;
        margin-right: 2rem;
        font-size: 3rem;
        cursor: pointer;

    }
`

export const NavItem = styled.a`
    font-size: 2rem;
    color: white;
    font-family: 'Josefin Sans', sans-serif;

    @media ${device.tabletPort} {
        margin: 2rem 0;
    }
    
`

export const AppTitle = styled.div`
    font-size: 3rem;
    display: flex;
    grid-row: 1;
    grid-column: 2 / 3;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: bolder;
    font-family: 'Fira Sans Condensed', sans-serif;

`

