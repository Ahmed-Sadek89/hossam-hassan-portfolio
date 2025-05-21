'use client'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const NavContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='flex flex-col items-start lg:items-start gap-y-6 text-white lg:text-left text-center'
    >
      <motion.span
        whileHover={{ scale: 1.1 }}
        animate={{ x: [0, -10, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'easeInOut'
        }}
        className='px-[25.49px] py-[12.75px] border border-primary rounded-[38.24px]'
      >
        Hello!
      </motion.span>

      <div className='flex flex-col items-start lg:items-start gap-y-1'>
        <h1 className='font-bold text-[40px] text-primary md:text-[55px] lg:text-[70px]'>
          Hossam Hassan
        </h1>
        <h2 className='font-bold text-[30px] md:text-[40px] lg:text-[50px]'>
          Football Analyst
        </h2>
      </div>

      <div className='flex flex-col items-start lg:items-start gap-y-7'>
        <p className='font-light text-[#E4E3E3] text-[18px] md:text-[22px] lg:text-[25px]'>
          Hi, I'm Hossam Hassan Football analyst specializing in identifying
          gaps within football tactical analysis and software tools, with a
          focus on advancing methodologies for performance evaluation and
          decision-making support
        </p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href={'#philosophy'}
            className='hover:bg-primary px-20 py-[16px] border border-[#9C9C9C] hover:border-primary rounded-md w-full text-[20px] md:text-[22px] lg:text-[25px] hover:text-white text-center transition duration-300'
          >
            Read More
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default NavContent
