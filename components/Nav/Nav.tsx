import React from 'react'
import NavContent from './NavContent'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav className='py-14 container'>
      <div className='items-center grid grid-cols-2 w-full'>
        <NavContent />
        <div className='flex justify-center items-center w-full'>
          <div
            style={{
              background:
                'linear-gradient(180deg, rgba(116, 255, 179, 0.1) 0%, rgba(172, 172, 172, 0.1) 100%)'
            }}
            className='flex justify-center items-center shadow-lg p-4 rounded-full w-[500px] h-[500px]'
          >
            <Image
              src='/hossam-hassan.jpg'
              alt='Hossam Hassan'
              width={460}
              height={460}
              className='rounded-full w-[460px] h-[460px] object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
