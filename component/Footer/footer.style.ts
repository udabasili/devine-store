import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: ${({theme}) => theme.colors.primaryDark };
    grid-column: full-start / full-end;
    padding: 8rem;

    .copyright {
        font-size: 1.4rem;
        margin-top: 6rem;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
        width: 70%;
    }
`

export const FooterList = styled.footer`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 2rem;
    align-items: center;
`

export const FooterItem = styled.footer`

`
export const FooterLink = styled.footer`
    &,
    &:link,
    &:visited {
        font-size: 1.4rem;
        cursor: pointer;
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        text-align: center;
        padding: 1.5rem;
        display: block;
        transition: all .2s;
    }

    &:hover {
        background-color: rgba(#fff, .05);
        transform: translateY(-3px);
    }
`