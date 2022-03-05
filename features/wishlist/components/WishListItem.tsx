import Button from '@/components/Elements/Button/Button'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { WishListItemProps } from '../types'
import { WishListItemButtons, WishListItemContainer, WishListItemDetails, WishListItemImage } from './wishlist.style'


const WishListItem = (props: WishListItemProps) => {
  const { itemId, itemName, price, imageUrl } = props
  const router = useRouter()

  function navigate () {
    router.push(`/products/${itemId}`)
  }

  return (
    <WishListItemContainer>
      <WishListItemImage>
      <Image
        src={imageUrl}
        layout="responsive"
        width="100%"
        height="100%"
      />
      </WishListItemImage>
      <WishListItemDetails>
        <span className="name">{itemName}</span>
        <span className="price"> {price}</span>
      </WishListItemDetails>
      <WishListItemButtons>
        <Button onClickHandler={navigate} type="button" variant='dark' size='sm'>
          View
        </Button>
      </WishListItemButtons>
    </WishListItemContainer>
  )
}

export default WishListItem