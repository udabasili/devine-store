import styled from 'styled-components'

export const BadgeContainer = styled.div`
    border-radius: 3px;
    padding: 5px 15px;
    font-size: 14px;
    color: white;

    &.primary {
        background-color: ${({theme}) => theme.colors.secondaryDark};
    }

    &.success {
        background-color: #006400
    }

    &.danger {
        background-color: red
    }

    &.inverse {
        background-color: #b7b7b7
    }

`