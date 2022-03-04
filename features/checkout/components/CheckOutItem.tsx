import { CartItems } from '@/features/cart/components/cart.style';
import { CartItemProp } from '@/features/cart/types';
import Image from 'next/image';
import React from 'react';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import useSWR, { useSWRConfig } from 'swr'
import { itemProps } from '../type';
import { CheckOutItemContainer, CheckOutItemImage, CheckOutItemName, CheckOutItemQuantity } from './checkout.style';
import { auth } from '@/lib/firebaseClient'
import clearItemFromCart from '@/features/cart/api/clearItemFromCart';
import addToCart from '@/features/cart/api/addToCart';
import removeOneItemFromCart from '@/features/cart/api/removeOneItemFromCart';

type Props  = {
  item: CartItemProp
} 

const CheckOutItem = ({item }: Props) => {
    const {itemId, itemName, imageUrl, price, quantity, size } = item;
    const { mutate } = useSWRConfig()
 
    const clearItemFromCartHandler = async () => {
        try {
            await clearItemFromCart(itemId)
            mutate('/api/cart')
        } catch (error) {
            const errorObject = error as Error
            toast.error(errorObject.message);
        }
    }

    async function removeItemFromCart () {
      try {
        await removeOneItemFromCart(itemId)
        mutate('/api/cart')
      } catch (error) {
        const errorObject = error as Error
        toast.error(errorObject.message);
      }
    }
    
    return (
      <CheckOutItemContainer>
        <div
          onClick={clearItemFromCartHandler}
          className="remove-button"

        >
          <FaTimes size="20px"/>
        </div>
        <CheckOutItemImage>
          <Image 
            src={imageUrl}
            layout="fill"
            objectFit="cover" 
            alt="item" />
        </CheckOutItemImage>
        <CheckOutItemName>{itemName}</CheckOutItemName>
        <CheckOutItemQuantity>

          <span className="value">{quantity} Items</span>
        </CheckOutItemQuantity>
        <span className="price">
          ${price}
        </span>
  
      </CheckOutItemContainer>
    );
  };
  
export default CheckOutItem