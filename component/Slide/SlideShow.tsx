import React, { useState } from 'react'
import { ImagesProps } from '@/types/index'
import Slide from './Slide'
import { SlideShowContainer } from './slide.styles'
import SlideControllers from './SlideControllers'
import { jewelryData } from '@/data/slideData'

type SlideShowProps = {
    images: ImagesProps[]
    jewelryData: typeof jewelryData
}

const SlideShow = ({
    images,
    jewelryData
}: SlideShowProps) => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
    return (
        <SlideShowContainer>
            <Slide slideData={jewelryData[currentSlideIndex]} imageProps={images[currentSlideIndex]}/>
            <SlideControllers 
                currentSlideIndex={currentSlideIndex}
                arrayLength={images.length}
                setCurrentSlideIndex={setCurrentSlideIndex}/>
        </SlideShowContainer>
    )
}

export default SlideShow