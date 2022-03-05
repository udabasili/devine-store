import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'

export const Article = styled.div`
    display: grid;
    grid-template-columns: inherit;
    grid-column: full-start / full-end;


    h2 {
        grid-column: 1 / -1;
        text-align: center;
        padding: 2rem 5vh ;
        padding-top: 15vh ;
    }
`

export const ArticleMainImage = styled.div`
    display: grid;
    position: relative;
    padding-top: 5vh ;
    grid-column: center-start / center-end;
    height: 40vh;

    span {
        width: 100%;
        grid-column: 1 / -1;
    }

    
 
`

export const ArticleText = styled.div`
    padding: 4rem;
    padding-top: 10rem ;
    grid-column: col-start 3 / full-end;
    grid-row: 3 ;

    @media ${device.tabletPort} {
        grid-column: 1 / -1;

    }

`

export const ArticleOtherImages = styled.div`
    position: relative;
    grid-template-columns: 1fr;
    display: grid;
    grid-column: full-start / col-end 2;
    grid-template-rows: repeat(2, min-content);
    padding: 6rem;
    gap: 8rem;
    grid-row: 3 ;

    @media ${device.tabletPort} {
        grid-column: 1 / -1;
        grid-row: unset ;

    }
`