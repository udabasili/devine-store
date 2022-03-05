import Tabs from '@/components/Elements/Tabs/Tabs'
import MainLayout from '@/components/Layout/MainLayout'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import style from '../styles/shopping-cart.module.css'
import { MdOutlineLocalShipping, MdPayments } from "react-icons/md";
import CheckOutItem from '@/features/checkout/components/CheckOutItem'
import FullScreenLoader from '@/components/FullScreenLoader/FullScreenLoader'
import { auth } from '@/lib/firebaseClient'
import useSwr from '@/hooks/useSwr'
import { toast } from 'react-toastify'
import { CartItemProp } from '@/features/cart/types'

const tabs = [
    {
      label: 'shopping cart',
      link: '/shopping-cart',
      icon: <FaShoppingBag/>
    },
    {
      label: 'payment',
      link: '/checkout',
      icon: <MdPayments/>
    },
    {
      label: 'Order Tracking',
      link: '/tracking',
      icon: <MdOutlineLocalShipping/>
    },
]


const ShoppingCartPage = () => {

  let cartItems: CartItemProp[] = []
  const { data, isError, isLoading } = useSwr<CartItemProp[]>("/api/cart");

    if (isLoading){
        return <FullScreenLoader/>
    }

    if (isError) {
        toast.error(isError)
        return <></>
    }

    if (data) {
      console.log(data)
      cartItems = data
    }

  if (isError) {
    toast.error(isError)
  }

  if (isLoading) {
    return <FullScreenLoader/>
  }

  if (data) {
    cartItems = data
  }
  
  return (
    <MainLayout title='Shopping Cart' description={''}>
      <div className={style.content}>
        <Tabs tabs={tabs}/>
        <div className={style.checkout}>
            <div className={style.checkoutHeader}>
            </div>
            {
            cartItems.map((cartItem) => (
                <CheckOutItem key={cartItem.itemId} item={cartItem}  />
            ))}
            <div className={style.checkoutTotal}>
            <span>
                TOTAL: $100
            </span>
            </div>
        </div>
      </div>
    </MainLayout>
  )
}



export default ShoppingCartPage

