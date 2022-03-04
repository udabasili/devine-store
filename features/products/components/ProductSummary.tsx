import { clothing } from '@/data/clothing'
import React, { useCallback, useMemo } from 'react'
import { ProductCardProps } from '../types'
import { ProductSummaryContainer } from './product.style'
import ProductCard from './ProductCard'

const ProductSummary = () => {

  return (
    <ProductSummaryContainer>
        {
            clothing.hats.items.filter((item: any, index: number) => index < 3).map((Product: ProductCardProps) => (
                <ProductCard key={Product.id} {...Product}/>
            ) )
        }
    </ProductSummaryContainer>
  )
}

export default ProductSummary