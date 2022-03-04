import Tabs from '@/components/Elements/Tabs/Tabs'
import MainLayout from '@/components/Layout/MainLayout'
import PageHeader from '@/components/PageHeader/PageHeader'
import React from 'react'
import style from './wishlist.module.css'


const Wishlist = () => {
  return (
    <MainLayout title='Wishlist' description={''}>
        <PageHeader title="Wishlist"/>
        <div className={style.content}>
            
        </div>

    </MainLayout>
  )
}

export default Wishlist