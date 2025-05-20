import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Work = () => {
  return (
    <div
      className='items-center grid grid-cols-3 bg-cover bg-no-repeat bg-center w-full h-[458px] overflow-hidden text-white'
      style={{
        backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.9), rgba(17, 17, 17, 0.9)), url("/work1.png")`
      }}
    >
      <div className='flex flex-col items-start gap-y-6 col-span-2 p-6'>
        <h2 className='font-bold text-[60px]'>My Work</h2>
        <div className='flex items-start'>
          <Image
            src='/work-line.svg'
            width={1000}
            height={100}
            alt='line'
            className='w-[387px] h-[5px] object-cover'
          />
        </div>
        <p className='font-[400] text-[#E4E3E3] text-[20px] leading-relaxed'>
          This is a sample of my reports, case studies, and coaching throw-in
          session analyses I have done through my various experiences, where you
          will see skills in video illustration, tracking, tagging,
          communicating, and visualization, which contributes to augmented
          feedback.
        </p>

        {/* Drive Button */}
        <Link
          href='#'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-x-6 text-green-400 hover:text-green-300 transition'
        >
          <Image
            width={60}
            height={60}
            src='/drive.svg'
            alt='Drive'
            className='object-contain'
          />
          <span className='font-normal underline'>Press Me</span>
        </Link>
      </div>

      <div>
        <Image
          src='/work2.png'
          width={700}
          height={700}
          alt='Work example'
          className='w-full h-[458px] object-fill'
        />
      </div>
    </div>
  )
}

export default Work
