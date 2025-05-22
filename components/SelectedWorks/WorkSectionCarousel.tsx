'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { useRef } from 'react'
import './style.css'
import SliderBtns from './SliderBtns'
import { imageCarouselSettings, videoCarouselSettings } from './data'

type props = {
  children: React.ReactNode
  media: 'video' | 'image'
}
const WorkSectionCarousel = ({ children, media }: props) => {
  const sliderRef = useRef<Slider>(null)

  const settings =
    media === 'video' ? videoCarouselSettings : imageCarouselSettings
  return (
    <div
      className={`${
        media === 'video' ? 'md:hidden block' : ''
      } relative slider-container`}
    >
      <Slider {...settings} ref={sliderRef}>
        {children}
      </Slider>
      <SliderBtns sliderRef={sliderRef} />
    </div>
  )
}

export default WorkSectionCarousel
