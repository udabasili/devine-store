import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'

export const FiltersContainer = styled.div`
    grid-column: full-start / col-end 2;
    grid-row: 1 /  -1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 6rem 3rem;
    background-color: white;

    @media ${device.tabletPort} {
        position: fixed;
        top: 0;
        padding: 0;
        right: 0;
        width: 40vw;
        transform: translateX(40vw);
        overflow-y: auto;
        transition: all 1s;
        z-index: 50;
    }

    @media ${device.mobile} {
        position: fixed;
        top: 0;
        right: 0;
        width: 70vw;
        transform: translateX(70vw);
        transition: all 1s;
        z-index: 50;
    }

    &.open {
        @media ${device.tabletPort} {
            transform: translateX(0);
        }
    }

`

export const FilterHeader = styled.div`

    height: 10vh;
    width: 100%;
    background-color: black;
    display: none;
    justify-content: flex-start;
    align-items: center;
    padding: 2rem;

    @media ${device.tabletPort} {
        display: flex;
    }

    svg {
        cursor: pointer;
    }
`

export const FilterContainer = styled.div`
    width: 100%;
    margin-bottom: 4rem;

    .prices {
        font-weight: 600;
        font-size: 1.5rem;
        font-style: italic;
        margin-bottom: 30px;
    }

    @media ${device.tabletPort} {
        margin: unset;
        padding: 2rem;
    }


`

export const FilterList = styled.ul`
    width: 100%;


`

export const FilterItem = styled.li`
    font-size: 1.5rem;
    display: flex;
    list-style-type: none;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: .5rem 1rem;


    &.selected {
        background-color: ${({ theme }) => theme.colors.secondaryLight};

    }
    .label {
        text-transform: capitalize;
    }

    .label-color {
        display: flex;

        span:first-child {
            width: 20px;
            height: 20px;
            margin-right: 15px;
            display: block;
        }
    }

    .value {
        width: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 25px;
        border-radius: 50%;
        background-color: #f1f1f1;
    }

`
