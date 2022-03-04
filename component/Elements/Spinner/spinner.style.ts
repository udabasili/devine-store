import styled from 'styled-components'

export const SpinnerContainer = styled.div`
    border-style: solid;
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid black; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;

    &.sm {
        width: 1.6rem;
        height:  1.6rem;
        border-width: 8px;
    }

    &.md {
        width: 3.2rem;
        height:  3.2rem;
    }

    &.lg {
        width: 4.8rem;
        height:  4.8rem;
    }

    &.xl {
        width: 6.4rem;
        height:  6.4rem;
    }

    &.dark {
        color: black;
    }

    &.light {
        color: white;
    }

    &.primary {
        color: ${({ theme }) => theme.colors.primary};
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`