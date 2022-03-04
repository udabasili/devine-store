import styled from 'styled-components'

export const ButtonComponent = styled.button`
    text-transform: uppercase;
    display: flex;
    cursor: pointer;
    border-style: solid;
    border-width: 0px 0px 0px 0px;
    align-items: center;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;

    & > * {
        margin-right: 2px;
    }


    &.sm {
        padding: 4px 15px;
        font-size: 1.2rem;
    }

    &.md {
        padding: 6px 20px;
        font-size: 1.4rem;
    }

    &.lg {
        padding: 10px 30px;
        font-size: 1.7rem;
    }

    &.primary {
        background-color:${({ theme }) => theme.colors.secondaryDark};
        color: #fff;

        &:hover {
            background-color:  ${({ theme }) => theme.colors.secondaryLight};
            color:  ${({ theme }) => theme.colors.secondaryDark};
        }
    }

    &.inverse {
        background-color: #fff;
        color:  ${({ theme }) => theme.colors.secondaryDark};

        &:hover {
            background-color: ${({ theme }) => theme.colors.secondaryDark};
            color:  #fff
        }
    }

    &.danger {
        background-color: #df373b;
        color: #fff;

        &:hover {
            background-color: rgb(254 242 242);
            color:  #df373b
        }
    }

    &.dark {
        background-color: black;
        color: #fff;

        &:hover {
            background-color: rgb(75 85 99);
            color:  white
        }
    }

    &.success {
        background-color: rgb(132 204 22);
        color: #fff;

        &:hover {
            background-color: rgb(220 252 231);
            color: black;
        }
    }
`