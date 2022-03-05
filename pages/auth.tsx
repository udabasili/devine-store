import FullScreenLoader from '@/components/FullScreenLoader/FullScreenLoader'
import MainLayout from '@/components/Layout/MainLayout'
import { Context } from '@/context/appContext'
import Login from '@/features/auth/components/Login'
import Register from '@/features/auth/components/Register'
import { withAuthUser, AuthAction } from 'next-firebase-auth'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import style from '../styles/auth.module.css'

const Auth = () => {
  const {isAuthenticated} = useContext(Context)
  const router = useRouter();

  useEffect(() => {

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

export default withAuthUser({
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenAuthedBeforeRedirect: AuthAction.SHOW_LOADER,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER,
  LoaderComponent: FullScreenLoader,
})(Auth)