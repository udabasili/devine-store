import Tabs from '@/components/Elements/Tabs/Tabs'
import MainLayout from '@/components/Layout/MainLayout'
import PageHeader from '@/components/PageHeader/PageHeader'
import React from 'react'
import style from '../styles/profile.module.css'


const Profile = () => {
  return (
    <MainLayout title='Profile' description={''}>
        <PageHeader title="Profile"/>
        <div className={style.content}>
            
        </div>

    </MainLayout>
  )
}

export default Profile