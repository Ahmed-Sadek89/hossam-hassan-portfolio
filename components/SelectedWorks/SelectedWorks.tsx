import Image from 'next/image'
import React from 'react'
import WorkSection from './WorkSection'
import { videoSectionsData } from './videoSectionsData'
import Scouting from './Scouting'
import ImageWorksCarousel from './ImageWorksCarousel'

const SelectedWorks = () => {
  return (
    <section className='space-y-10 py-16 container' id='philosophy'>
      <div className=''>
        <Image
          src={'/selected-work.svg'}
          alt='selected-work'
          width={700}
          height={100}
          className='w-full max-w-[600px] md:max-w-[700px] object-contain'
        />
      </div>
      <div className='space-y-10'>
        <p className='font-light text-[#E4E3E3]'>
          Preformance Analysis - Individual Needs Analysis - Scouting -
          Biomechanics & Data Analysis
        </p>
        {videoSectionsData.map((section, index) => (
          <WorkSection
            key={index}
            videoUrl={section.videoUrl}
            title={section.title}
          />
        ))}
        <Scouting />
        <ImageWorksCarousel />
      </div>
    </section>
  )
}

export default SelectedWorks
