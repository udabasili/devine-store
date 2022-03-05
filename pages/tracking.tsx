import Tabs from '@/components/Elements/Tabs/Tabs'
import MainLayout from '@/components/Layout/MainLayout'
import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'
import style from '../styles/tracking.module.css'
import { MdOutlineLocalShipping, MdPayments } from "react-icons/md";
import FullScreenLoader from '@/components/FullScreenLoader/FullScreenLoader'
import { withAuthUser, AuthAction } from 'next-firebase-auth'

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

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth',
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: FullScreenLoader,
})(OrderTracking)
