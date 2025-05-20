import Image from 'next/image'
import React from 'react'

const Experience = () => {
  const experiences = [
    'B Sport - Tactics Writer',
    'Aletihad - Tactics Writer',
    'Zamalek SC - Scout',
    'Team Sunderland - Analyst',
    'Farringdon Detached FC - Analyst',
    'Ashbrooke SC - Football PR & Data Intern',
    'Washington FC - Analyst'
  ]
  return (
    <section className='space-y-5 py-20 container'>
      <Image
        src={'/experience.svg'}
        alt='experience'
        width={700}
        height={100}
        className='object-fill'
      />
      <div className='items-center gap-10 grid grid-cols-4'>
        {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
          <div
            key={index}
            className='group flex flex-col justify-center items-center gap-y-5 bg-white py-2 rounded-md w-full h-[300px] text-[#121212]'
          >
            <Image
              src={`/ex${item}.png`}
              alt='experience'
              width={200}
              height={100}
              className='w-[150px] h-[150px] object-contain scale-100 group-hover:scale-110 transition duration-300'
            />
            <h6 className='px-5 font-[500] text-[20px] text-center'>{experiences[index]}</h6>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
