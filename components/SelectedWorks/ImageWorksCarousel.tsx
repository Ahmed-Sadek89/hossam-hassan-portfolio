'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Image from 'next/image'

const ImageSlider = () => {
  return (
    <div className='relative py-10'>
      {/* Custom Nav Buttons */}
      <div className='top-1/2 -left-4 z-10 absolute'>
        <button className='swiper-button-prev'></button>
      </div>
      <div className='top-1/2 -right-4 z-10 absolute'>
        <button className='swiper-button-next'></button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1.2}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        breakpoints={{
          768: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
      >
        {[1, 2, 3, 4, 5, 6].map(card => (
          <SwiperSlide key={card}>
            <Image
              src={`/slide${card}.jpg`}
              alt={'image-slider'}
              width={400}
              height={400}
              className='border border-gray-300 rounded-md w-full h-[300px] lg:h-[600px] object-fill scale-100 hover:scale-105 transition duration-300'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageSlider
