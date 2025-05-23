'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { videoSectionsData } from './data'
// import Scouting from './Scouting'
import VideoFrame from './VideoFrame'
import WorkSectionCarousel from './WorkSectionCarousel'
import Slider from 'react-slick'
import ImagesFrame from './ImagesFrame'

const SelectedWorks = () => {
  const sliderRef = useRef<Slider>(null)
  return (
    <section className='space-y-10 py-16 container' id='philosophy'>
      <div className='space-y-1'>
        <Image
          src={'/selected-work.svg'}
          alt='selected-work'
          width={700}
          height={100}
          className='w-full max-w-[600px] md:max-w-[700px] object-contain'
        />
        <p className='font-light text-[#E4E3E3]'>
          Preformance Analysis - Individual Needs Analysis - Scouting -
          Biomechanics & Data Analysis
        </p>
      </div>
      <div className='space-y-10'>
        {videoSectionsData.map((section, index) => (
          <div className='hidden md:block w-full' key={index}>
            <VideoFrame videoUrl={section.videoUrl} imgBg={section.imgBg} />
          </div>
        ))}
        <WorkSectionCarousel media='video' sliderRef={sliderRef}>
          {videoSectionsData.map((section, index) => (
            <VideoFrame
              key={index}
              videoUrl={section.videoUrl}
              imgBg={section.imgBg}
            />
          ))}
        </WorkSectionCarousel>
        {/* <Scouting /> */}
        <div className='md:hidden block' style={{ marginBottom: '100px' }} />
        <WorkSectionCarousel media='image' sliderRef={sliderRef}>
          <ImagesFrame />
        </WorkSectionCarousel>
      </div>
    </section>
  )
}

export default SelectedWorks
