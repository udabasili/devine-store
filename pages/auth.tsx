import MainLayout from '@/components/Layout/MainLayout'
import { Context } from '@/context/appContext'
import Login from '@/features/auth/components/Login'
import Register from '@/features/auth/components/Register'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import style from './auth.module.css'

const Auth = () => {
  const {isAuthenticated} = useContext(Context)
  const router = useRouter();

  useEffect(() => {
      // redirect to home if already logged in
      if (isAuthenticated) {
          router.push('/');
      }

  }, []);
  


  return (
    <MainLayout title='Authenticate' description={''}>
      <div className={style.content}>
          <Login/>
          <Register/>
      </div>
    </MainLayout>
  )
}

export default Auth
