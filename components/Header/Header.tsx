import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-[#1A1A1A80] shadow-md py-7'>
      <div className='container'>
        <div className='flex justify-between items-center w-full'>
          <Image
            src={'/logo.svg'}
            alt='logo'
            width={100}
            height={100}
            className='object-contain'
          />
          <div className='flex items-center gap-x-4 p-2 border border-primary rounded-full'>
            <Link
              href={'#'}
              className='bg-primary px-[40px] py-[20px] rounded-full text-[20px] text-white'
            >
              Home
            </Link>
            <Link
              href={'#'}
              className='hover:bg-[#3B395280] px-[40px] py-[20px] rounded-full text-[20px] text-white transition duration-300'
            >
              My Experience
            </Link>
            <Link
              href={'#'}
              className='hover:bg-[#3B395280] px-[40px] py-[20px] rounded-full text-[20px] text-white transition duration-300'
            >
              About
            </Link>
            <Link
              href={'#'}
              className='hover:bg-[#3B395280] px-[40px] py-[20px] rounded-full text-[20px] text-white transition duration-300'
            >
              Protfolio
            </Link>
            <Link
              href={'#'}
              className='hover:bg-[#3B395280] px-[40px] py-[20px] rounded-full text-[20px] text-white transition duration-300'
            >
              Contact
            </Link>
          </div>
          <div className='flex items-center gap-x-4'>
            <Link
              href={'#'}
              className='flex justify-center items-center bg-[#3B395280] rounded-full w-[42px] h-[42px]'
            >
              <Image
                src={'/linkedin.svg'}
                alt='linkedin'
                width={20}
                height={20}
              />
            </Link>
            <Link
              href={'#'}
              className='flex justify-center items-center bg-[#3B395280] rounded-full w-[42px] h-[42px]'
            >
              <Image
                src={'/twitter.svg'}
                alt='twitter'
                width={20}
                height={20}
              />
            </Link>
            <Link
              href={'#'}
              className='flex justify-center items-center bg-[#3B395280] rounded-full w-[42px] h-[42px]'
            >
              <Image
                src={'/instagram.svg'}
                alt='instagram'
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
