import styled from 'styled-components'
import { device } from './utils/responsiveBreakpoints'


export const Header1 = styled.h1`
    font-size: 7.1rem;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bolder;
    text-transform: uppercase;
    line-height: 1.3;
    color:  ${({ theme }) => theme.colors.primaryDark};

    @media ${device.tabletPort} {
        font-size: 4rem;
    }
`

export const Header2 = styled.h2`
    font-size: 4rem;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    color:  ${({ theme }) => theme.colors.primaryDark};
    line-height: 1.1;

    @media ${device.tabletPort} {
        font-size: 2.5rem;
    }
`

export const Header3 = styled.h3`
    font-size: 2.2rem;
    font-weight: 300;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    line-height: 1.1;

    @media ${device.tabletPort} {
        font-size: 2rem;
    }
`

export const Paragraph = styled.p`
    font-size: 1.7rem;
`