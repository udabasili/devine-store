import { auth } from '@/lib/firebaseClient'
import Image from 'next/image'
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { useSWRConfig } from 'swr'
import clearItemFromCart from '../api/clearItemFromCart'
import { CartItemProp } from '../types'
import { CartItemContainer, CartItemImage, CartItemName, CartItemPrice, CartItemQuantity } from './cart.style'

const CartItem = (props: CartItemProp) => {

    const { itemName, itemId, price, quantity, size, imageUrl} = props
    const { mutate } = useSWRConfig()
    
    const removeItemFromCart = async () => {
        try {
            const token = await auth.currentUser?.getIdToken(true)as string
            await clearItemFromCart({itemId, token })
            mutate('/api/cart')
        } catch (error) {
            const errorObject = error as Error
            toast.error(errorObject.message);
        }
    }

    return (
        <CartItemContainer>
            <AiFillCloseCircle size="2rem" className="remove" onClick={removeItemFromCart}/>
            <CartItemImage >
                <Image
                    src={imageUrl}
                    alt="CartItem"
                    layout="fill"
                    objectFit="cover"
                />
            </CartItemImage>
            <CartItemName>
                {itemName}
            </CartItemName>
            <CartItemQuantity>
                <span>
                    Quantity: {quantity}
                </span>
                <span>
                    Size: {size}
                </span>
            </CartItemQuantity>
            <CartItemPrice>
                ${price}
            </CartItemPrice>
        </CartItemContainer>
    )
}


export default CartItem