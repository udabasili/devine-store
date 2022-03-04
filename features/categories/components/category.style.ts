import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'

export const CategorySummaryContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 2rem;
`
export const CategorySummaryCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CategorySummaryCardImage = styled.div`
    width: 100%;
    border-radius: 50%;
    overflow: hidden;
`

export const CategorySummaryCardLink = styled.span`
    font-size: 2.2rem;
    font-weight: 500;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    line-height: 1.1;
    cursor: pointer;

    @media ${device.tabletPort} {
        font-size: 2rem;
        
    }

    &:hover {
        color:${({ theme }) => theme.colors.primary};
        border-bottom: 2px solid ;
        border-color: ${({ theme }) => theme.colors.primary}

    }

`