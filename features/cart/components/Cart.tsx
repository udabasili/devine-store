import Button from "@/components/Elements/Button/Button";
import { useRouter } from "next/router";
import React from "react";
import { CartButtons, CartContainer, CartItems, CartTotal } from "./cart.style";
import CartItem from "./CartItem";
import "firebase/firestore";
import { CartItemProp } from "../types";

interface CartProps {
  cartItems: CartItemProp[]
}

const Cart = (props: CartProps) => {
  const { cartItems } = props
    const router = useRouter();
    

  const navigate = (path: string) => {
    router.push(path);
  };

  return (
    <CartContainer>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.itemId} {...item} />
        ))}
      </CartItems>

      <CartTotal>
        <span className="label">total</span>
        <span className="value">$90</span>
      </CartTotal>
      <CartButtons>
        <Button
          variant="primary"
          size="md"
          type="button"
          onClickHandler={() => navigate("/shopping-cart")}
        >
          View Cart
        </Button>
        <Button
          variant="dark"
          size="md"
          onClickHandler={() => navigate("/checkout")}
          type="button"
        >
          Checkout
        </Button>
      </CartButtons>
    </CartContainer>
  );
};

export default Cart;
