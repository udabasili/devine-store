import { device } from '@/utils/responsiveBreakpoints'
import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement } from '@stripe/react-stripe-js'
import styled from 'styled-components'

export const StripeContainer = styled.form`
    display: grid;
    grid-column: center-start / center-end;
    width: 60%;
    justify-self: center;
    padding: 30px 40px;
    border: 1px solid #f5f8fb;
    box-shadow: -1px 6px 11px 0px rgba(0,0,0,.29);
    -webkit-box-shadow: -1px 6px 11px 0px rgba(0,0,0,.29);
    -moz-box-shadow: -1px 6px 11px 0px rgba(0,0,0,.29);
    border-radius: 10px;
    height: 70vh;

    @media ${device.tabletLand} {
        width: 90%;
    }


`

export const StripeHeader = styled.div`
    display: flex;
    font-size: 3rem;
    margin-top: 2rem;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    justify-content: space-between;
    font-weight: bold;
    width: 100%;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
    border-bottom: 1px solid darkgrey;

`

export const StripeForm = styled(CardElement).attrs({})`
    display: flex;
    flex-direction: column;

    @media ${device.tabletLand} {
        width: 90%;
    }
`


export const StripeLabel = styled.label`
    font-size: 1.4rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: black;
    font-family: 'Josefin Sans', sans-serif;
    
    @media ${device.tabletLand} {
        width: 100%;
      
    }

`

export const CardNumberElementCustom = styled(CardNumberElement).attrs({})`
    display: block;
    margin: 10px 0 20px 0;
    max-width: 500px;
    padding: 10px 14px;
    font-size: 1em;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
        rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    background: #f5f8fb;

    @media ${device.tabletLand} {
        width: 100%;
        max-width: unset;
      
    }

`

export const CardExpiryElementCustom = styled(CardExpiryElement).attrs({})`
     display: block;
    margin: 10px 0 20px 0;
    max-width: 500px;
    padding: 10px 14px;
    font-size: 1em;
    font-family: "Source Code Pro", monospace;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
        rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    background: #f5f8fb;

    @media ${device.tabletLand} {
        width: 100%;
        max-width: unset;
      
    }

`

export const CardCvcElementCustom = styled(CardCvcElement).attrs({})`
    display: block;
    margin: 10px 0 20px 0;
    max-width: 500px;
    padding: 10px 14px;
    font-size: 1em;
    box-shadow: rgba(50, 50, 93, 0.14902) 0px 1px 3px,
        rgba(0, 0, 0, 0.0196078) 0px 1px 0px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    background: #f5f8fb;
    
    @media ${device.tabletLand} {
        width: 100%;
        max-width: unset;
      
    }

    input::placeholder {
        color: red;
    }

    &:focus,
    &--focus {
        background-color: red;
        box-shadow: rgba(50, 50, 93, 0.109804) 0px 4px 6px,
            rgba(0, 0, 0, 0.0784314) 0px 1px 3px;
        -webkit-transition: all 150ms ease;
        transition: all 150ms ease;
    }

`
