import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'

export const SortContainer = styled.div`
    height: 10vh;
    grid-column: col-start 3 / full-end;
    background-color: ${({theme}) => theme.colors.secondaryDark};
    grid-row: 1 /  2;
    display: flex;
    align-items: center;
    padding: 2rem 3rem;
    justify-content: space-between;
    
    @media ${device.tabletPort} {
        grid-column: 1 / -1
    }

    .filter {
        display: none;
        font-size: 3rem;
        cursor: pointer;

        @media ${device.tabletPort} {
            display: block;
        }
    }


`