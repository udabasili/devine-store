import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'

export const SlideShowContainer = styled.div`
  background-color: transparent;
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
`

export const SlideButtons = styled.div`
    height: 10rem;
    position: absolute;
    display: flex;
    right: 50%;
    bottom: 0;
    transform: translate(50%, 50%);
`


export const SlideButton = styled.div`
    width: 10px;
    height: 10px;
    margin-right: 4px;
    margin-left: 4px;
    background-color: white;
    cursor: pointer;
    border-radius: 50%;

    &.active {
        background-color: black
    }
`



export const SlideContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;

    @media ${device.mobile} {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;

    }

    .image {
        @media ${device.mobile} {
            display: none;
        }
    }

`
export const SlideContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 4rem 6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color:  ${({ theme }) => theme.colors.primaryLight};

    @media ${device.mobile} {
        display: none;
    }
  
`

export const SlideDescription = styled.div`
  margin-bottom: 4rem;
  color:  ${({ theme }) => theme.colors.primaryDark};
  font-size: 1.6rem;
  float: left;

`