import Cart from "@/features/cart/components/Cart";
import { CartItemProp } from "@/features/cart/types";
import useSwr from "@/hooks/useSwr";
import { Context } from "@/store/appContext";
import React, { useContext } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { toast } from "react-toastify";
import { Badge, CartDropDownContainer, CartIcon } from "./cart.style";

type CartDropDownProps = {
  cartValues: CartItemProp[];
};
function CartDropDown(props: CartDropDownProps) {
  const { cartValues } = props;
  const { setShowDropDown, showDropDown } = useContext(Context);

  return (
    <>
      <CartIcon>
        <BsCart size="2rem" onClick={() => setShowDropDown(true)} />
        {cartValues.length !== 0 && <Badge>{cartValues.length}</Badge>}
        {showDropDown && (
          <CartDropDownContainer id="cart">
            <div className="cart-header">
              <AiFillCloseCircle
                size="2rem"
                onClick={() => setShowDropDown(false)}
              />
            </div>
            <Cart cartItems={cartValues} />
          </CartDropDownContainer>
        )}
      </CartIcon>
    </>
  );
}

export default CartDropDown;
