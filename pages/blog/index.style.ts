import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'

export const Article = styled.div`
    display: grid;
    grid-template-columns: inherit;
    grid-column: full-start / full-end;


    h2 {
        grid-column: 1 / -1;
        text-align: center;
    }
`

export const ArticleMainImage = styled.div`
    display: grid;
    position: relative;
    grid-column: center-start / center-end;
    height: 40vh;

    span {
        width: 100%;
        grid-column: 1 / -1;
    }

    
 
`

export const ArticleText = styled.div`
    grid-column: col-start 3 / full-end;
`

export const ArticleOtherImages = styled.div`
    position: relative;
    grid-template-columns: 1fr;
    display: grid;
    grid-column: full-start / col-end 2;
    grid-template-rows: repeat(2, min-content);
    padding: 6rem;
    gap: 8rem;
`