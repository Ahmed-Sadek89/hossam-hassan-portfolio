import Image from 'next/image'
import React from 'react'
import { videoSectionsData } from './data'
import Scouting from './Scouting'
import VideoFrame from './VideoFrame'
import WorkSectionCarousel from './WorkSectionCarousel'

const SelectedWorks = () => {
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
            <VideoFrame videoUrl={section.videoUrl} />
          </div>
        ))}
        <WorkSectionCarousel media='video'>
          {videoSectionsData.map((vid, index) => (
            <VideoFrame key={index} videoUrl={vid.videoUrl} />
          ))}
        </WorkSectionCarousel>
        {/* <Scouting /> */}
        {/* <ImageWorksCarousel /> */}
        <WorkSectionCarousel media='image'>
          {[1, 2, 3, 4, 5, 6].map(card => (
            <Image
              key={card}
              src={`/slide${card}.png`}
              alt={'image-slider'}
              width={1000}
              height={400}
              className='rounded-md object-contain scale-100 hover:scale-105 transition duration-300'
            />
          ))}
        </WorkSectionCarousel>
      </div>
    </section>
  )
}

export default SelectedWorks
