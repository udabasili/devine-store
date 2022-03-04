import React, { Dispatch, SetStateAction } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { SlideButton, SlideButtons } from './slide.styles'
import style from './slide.module.css'

type SlideControllersProps = {
    setCurrentSlideIndex: Dispatch<SetStateAction<number>>
    currentSlideIndex: number
    arrayLength: number
}

const SlideControllers = ({
        setCurrentSlideIndex,
        currentSlideIndex,
        arrayLength
    }: SlideControllersProps)  => {

        function slideButtonController(direction: 'right'| 'left') {
            if (direction  === 'left' ) {
                if (currentSlideIndex === 0) {
                    setCurrentSlideIndex(2)
                } else {
                    setCurrentSlideIndex( currentSlideIndex - 1 )
                }
            }

            if (direction  === 'right') {
                if (currentSlideIndex === 2) {
                    setCurrentSlideIndex(0)
                } else {
                    setCurrentSlideIndex( currentSlideIndex + 1)
                }
            }

        }
        return (
            <>
                <FaArrowAltCircleLeft 
                    className={`
                        ${style.leftButton}
                        ${style.button}
                    `} onClick={() => slideButtonController('left')}/>
                <FaArrowAltCircleRight className={`
                        ${style.rightButton}
                        ${style.button}
                    `} onClick={() => slideButtonController('right')}/>
                <SlideButtons>
                    {
                        [...Array(arrayLength)].map((item, index) => (
                            <SlideButton 
                                key={index}
                                onClick={() =>  setCurrentSlideIndex(index)}
                                className={`${index === currentSlideIndex ? 'active' : ''}`}/>

                        ))
                    }
                </SlideButtons>
            </>
        )
}

export default SlideControllers
