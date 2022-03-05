import Tabs from '@/components/Elements/Tabs/Tabs'
import MainLayout from '@/components/Layout/MainLayout'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import style from '../styles/checkout.module.css'
import { MdOutlineLocalShipping, MdPayments } from "react-icons/md";
import Stripe from '@/components/Stripe/Stripe'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import config from '../config'
import CheckOutForm from '@/features/checkout/components/CheckOutForm'

const stripePromise = loadStripe(config.publicKey as string);

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

const Checkout = () => {
  return (
    <MainLayout title='Checkout' description={''}>
      <div className={style.content}>
        <Tabs tabs={tabs}/>
        <div className={style.checkoutContainer}>
          <CheckOutForm/>
          <Elements stripe={stripePromise} >
          <Stripe/>
        </Elements>
        </div>
        
      </div>
    </MainLayout>
  )
}

export default Checkout