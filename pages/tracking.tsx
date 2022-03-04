import Tabs from '@/components/Elements/Tabs/Tabs'
import MainLayout from '@/components/Layout/MainLayout'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import style from './tracking.module.css'
import { MdOutlineLocalShipping, MdPayments } from "react-icons/md";

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

const OrderTracking = () => {
  return (
    <MainLayout title='Order Tracking' description={''}>
      <div className={style.content}>
        <Tabs tabs={tabs}/>
      </div>
    </MainLayout>
  )
}

export default OrderTracking