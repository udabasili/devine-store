import Tabs from '@/components/Elements/Tabs/Tabs'
import FullScreenLoader from '@/components/FullScreenLoader/FullScreenLoader'
import MainLayout from '@/components/Layout/MainLayout'
import PageHeader from '@/components/PageHeader/PageHeader'
import WishListItem from '@/features/wishlist/components/WishListItem'
import { WishListItemProps } from '@/features/wishlist/types'
import useSwr from '@/hooks/useSwr'
import { AuthAction, withAuthUser } from 'next-firebase-auth'
import React from 'react'
import { toast } from 'react-toastify'
import style from '../styles/wishlist.module.css'


const Wishlist = () => {

  const { data, isError, isLoading } = useSwr<WishListItemProps[]>("/api/wishlist");
    let wishListITems: WishListItemProps[] = [];
  
    if (isError) {
      toast.error(isError);
      return <></>;
    }

    if (isLoading) {
        return <FullScreenLoader/>
    }
  
    if (data) {
      wishListITems = data;
    }
    
  return (
    <MainLayout title='Wishlist' description={''}>
        <PageHeader title="Wishlist"/>
        <div className={style.content}>
        {
            wishListITems.map((item, i) => (
              <WishListItem {...item}/>
            ))
          }
        </div>

    </MainLayout>
  )
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth',
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  LoaderComponent: FullScreenLoader,
})(Wishlist)


