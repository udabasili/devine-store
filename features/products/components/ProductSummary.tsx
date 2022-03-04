import { clothing } from '@/data/clothing'
import React, { useCallback, useMemo } from 'react'
import { ProductSummaryContainer } from './product.style'
import ProductCard from './ProductCard'

const ProductSummary = () => {

  return (
    <ProductSummaryContainer>
        {
            clothing.hats.items.filter((item, index) => index < 3).map(Product => (
                <ProductCard key={Product.id} {...Product}/>
            ) )
        }
    </ProductSummaryContainer>
  )
}

export default ProductSummary