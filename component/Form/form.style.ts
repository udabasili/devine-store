import { device } from '@/utils/responsiveBreakpoints'
import styled from 'styled-components'
import {ErrorMessage, Field, Form } from 'formik';


export const FormContainer = styled(Form).attrs({})`
    grid-column: 1  / -1;
`

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
    font-weight: 600;
    color: rgb(239 68 68);
    font-size: 10px;
    line-height: 20px;

`

export const FormInput = styled(Field).attrs({})`
    font-size: 1.3rem;
    width: 100%;
    padding: .9rem 1rem;
    color: black;
    display: block;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
        rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    background: #f5f8fb;

    &::placeholder {
        color: gray;
    }

    &:focus {
        box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
            rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
        -webkit-transition: all 150ms ease;
        transition: all 150ms ease;
    }

`

export const FormLabel = styled.label`
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 10px;
    font-family: 'Josefin Sans', sans-serif;
    color: black;
`

export const FormError = styled(ErrorMessage).attrs({})`
    font-weight: 600;
    color: rgb(239 68 68);
    font-size: 20px;
    line-height: 20px;
`

export const FormButtonContainer = styled.button`
    text-transform: uppercase;
        display: flex;
        cursor: pointer;
        border-style: solid;
        border-width: 0px 0px 0px 0px;
        align-items: center;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: bold;
        text-align: center;
        display: flex;
        justify-content: center;
        padding: 10px 20px;
        align-self: flex-end;
        background-color:${({ theme }) => theme.colors.secondaryDark};
        color: #fff;

        &:hover {
            background-color:  ${({ theme }) => theme.colors.secondaryLight};
            color:  ${({ theme }) => theme.colors.secondaryDark};
        }
`