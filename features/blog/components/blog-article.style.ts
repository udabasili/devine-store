import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'

export const Blogs = styled.div`
    display: grid;
    grid-column: col-start 4 / full-end;
    row-gap: 5rem;
    grid-row: 1 /  12;
`

export const Blog = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr repeat(3, min-content);
    justify-content: flex-start;

    a {
        justify-self: flex-start;
    }

    h3 {
        margin-bottom: 1rem;
    }
`

export const BlogImage = styled.div`
    position: relative;
    grid-column: 1 / -1;
    width: 100%;
    height: 40vh;
`


export const BlogDetail = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;


    span {
        margin-left: 10px
    }
    
`

export const BlogSummary = styled.div`
    margin-bottom: 2.2rem;
    
`