import { category } from '@/data/category'
import React from 'react'
import { CategorySummaryContainer } from './category.style'
import CategorySummaryCard from './CategorySummaryCard'

const CategorySummary = () => {
  return (
    <CategorySummaryContainer>
        {
            category.map(category => (
                <CategorySummaryCard key={category.id} {...category}/>
            ) )
        }
    </CategorySummaryContainer>
  )
}

export default CategorySummary