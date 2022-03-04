import React from 'react'
import Image from 'next/image'
import { SlideContainer, SlideContent, SlideDescription } from './slide.styles'
import { Header1, Header2, Header3 } from 'global.style'
import { ImagesProps } from '@/types/index'
import Button from '../Elements/Button/Button'
import { AiTwotoneWallet } from 'react-icons/ai'
import { useRouter } from 'next/router'

type SlideProps = {
  slideData: {
    image: string;
    title: string;
    description: string;
  },
  imageProps: ImagesProps
}
const Slide = ({
    slideData,
    imageProps
}: SlideProps) => {

  const route = useRouter()

  const navigation = (url: string) => {
    route.push({
        pathname: url,
    })
  }

  return (
    <SlideContainer>
        <Image {...imageProps} placeholder="blur" layout="responsive" objectFit="cover" className="image"/>
        <SlideContent>
          <Header1>
            {slideData.title}
          </Header1>
          <SlideDescription>
            <span>
              {slideData.description}
            </span>
          </SlideDescription>
          
          <Button variant="primary" size="lg" onClickHandler={() => navigation('/products')} type="button">See more</Button>
        </SlideContent>
    </SlideContainer>
  )
}

export default Slide