import React from 'react'
import Image from 'next/image'
import { ProductCardContainer, ProductCardName, ProductCardPrice } from './product.style'
import Badge from '@/components/Elements/Badge/Badge'
import { ProductCardProps } from '../types'
import { useRouter } from 'next/router'

const ProductCard = ({
    name,
    imageUrl,
    id,
    price
}: ProductCardProps) => {

    const router = useRouter()
    function handlerRoute() {
        router.push(`/products/${id}`)
    }
    return (
        <ProductCardContainer image={imageUrl} onClick={() => handlerRoute()}>
            <Image
                alt={name}
                src={imageUrl}
                layout="responsive"
                width={300}
                height={300}
                objectFit="cover"
            /> 
            <Badge variant="success">
                New
            </Badge>
            <Badge variant="primary">
                20% off
            </Badge>
            <ProductCardName>
                {name}
            </ProductCardName>
            <ProductCardPrice>
                ${price}
            </ProductCardPrice>
        </ProductCardContainer>
    )
}

export default ProductCard