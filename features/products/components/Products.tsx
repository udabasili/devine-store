import Pagination from '@/components/Elements/Pagination/Pagination'
import { Context } from '@/context/appContext'
import { category } from '@/data/category'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { ProductCardProps } from '../types'
import { ProductsContainer } from './product.style'
import ProductCard from './ProductCard'

const ITEM_PER_PAGE = 9


type ProductProps = {
  category?: 'hats' | 'jackets' | 'sneakers' | 'womens' | 'mens'
}


const Products = ({
  category
}: ProductProps) => {

  const { clothes } = useContext(Context)
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemTotal, setItemTotal] = useState(null);
  const [clothingItems, setClothingItems] = useState<Array<ProductCardProps>>(() => setClothingItemsHandler())

  useEffect(() => {
    const getClothesResult = setClothingItemsHandler()
    setClothingItems(getClothesResult)

  }, [category, itemOffset, ITEM_PER_PAGE, clothes])
  
  
  function setClothingItemsHandler () {
    const endOffset = itemOffset + ITEM_PER_PAGE;
    let items;
    setPageCount(Math.ceil(clothes.length / ITEM_PER_PAGE));
    setItemTotal(clothes.length)
    items =  clothes.slice(itemOffset, endOffset)

    return items

  }



  // Invoke when user click to request another page.
  const handlePageClick = (e: { selected: number; }) => {
    const { selected } = e
    const newOffset = (selected * ITEM_PER_PAGE) % itemTotal;
    setItemOffset(newOffset);
    setItemTotal(newOffset / ITEM_PER_PAGE);
  };
  
  return (
    <ProductsContainer>
      {
        clothingItems.map((item) => (
            <ProductCard key={item.id} {...item}/>
        ))
      }

      <Pagination 
        pageCount={pageCount} 
        handlePageClick={handlePageClick}/>
    </ProductsContainer>
  )
}

export default Products