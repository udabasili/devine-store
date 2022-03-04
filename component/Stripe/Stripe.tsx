import {
  CardNumberElement, 
  useElements, 
  useStripe,
} from '@stripe/react-stripe-js';
import { StripeCardNumberElement } from '@stripe/stripe-js';
import { FormEvent, FormEventHandler, useMemo } from 'react';
import { toast } from 'react-toastify';
import Button from '../Elements/Button/Button';
import { CardCvcElementCustom, CardExpiryElementCustom, CardNumberElementCustom, StripeContainer, StripeHeader, StripeLabel } from './stripe.style';

const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",          
        },
        invalid: {
          color: "#9e2146"
        },
        focus: {
          color: "#9e2146"

        }
      }
    }),
    []
  );

  return options;
};

const  Stripe = () => {
    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const handleSubmit = async (event: FormEvent<HTMLFormElement> ) => {
      event.preventDefault();
      try {
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }
        const payload = await stripe.createPaymentMethod({
          type: "card",
          card: elements.getElement(CardNumberElement) as StripeCardNumberElement
        });
        if (payload.error) {
          throw new Error(payload.error.message)
        }
        console.log("[PaymentMethod]", payload);
      } catch (error) {
        const errorMessage  = (error as Error).message
        toast.error(errorMessage)
      }
            
    };

  return (
        <StripeContainer onSubmit={handleSubmit}>
          <StripeHeader>
            <span>total</span>
            <span>200</span>
          </StripeHeader>
           <StripeLabel>
              Card number
            <CardNumberElementCustom
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={event => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </StripeLabel>
          <StripeLabel>
            Expiration date
            <CardExpiryElementCustom
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={event => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </StripeLabel>
          <StripeLabel>
            CVC
            <CardCvcElementCustom
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={event => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </StripeLabel>
          <Button disabled={!stripe || !elements} type="button" size="md" variant="primary">
              Pay
          </Button>
        </StripeContainer>
  );
};

export default Stripe;

