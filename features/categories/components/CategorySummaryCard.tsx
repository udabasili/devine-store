import React from 'react'
import Image from 'next/image'
import { category } from '@/data/category'
import { CategorySummaryCardContainer, CategorySummaryCardImage, CategorySummaryCardLink } from './category.style'
import { Header3 } from 'global.style'
import Link from 'next/link'
import { useRouter } from 'next/router'

type CategorySummaryCardProps = {
    title: string,
    imageUrl: string,
    id: number,
    linkUrl: string
}
const CategorySummaryCard = ({
    title,
    imageUrl,
    id,
    linkUrl
}: CategorySummaryCardProps) => {

    const route = useRouter()

    const navigation = (url: string, category: string) => {
        route.push({
            pathname: url,
            query: {
                state: category
            }
        })
    }

    return (
        <CategorySummaryCardContainer>
            <CategorySummaryCardImage>  
                <Image
                    alt={title}
                    src={imageUrl}
                    layout="responsive"
                    width={200}
                    height={200}
                />
            </CategorySummaryCardImage>
            <div 
                className="u-margin-top-medium"
            >
                <CategorySummaryCardLink onClick={() => navigation(linkUrl, title)}>
                    {title}
                </CategorySummaryCardLink>
            </div>       
        </CategorySummaryCardContainer>
    )
}

export default CategorySummaryCard