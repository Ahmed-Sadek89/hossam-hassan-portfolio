import React from 'react'

const NavContent = () => {
  return (
    <div className='flex flex-col items-start gap-y-6 textwhite'>
      <span className='px-[25.49px] py-[12.75px] border-[1.27px] border-primary rounded-[38.24px]'>
        Hello!
      </span>
      <div className='flex flex-col items-start gap-y-1'>
        <h1 className='font-bold text-[70px] text-primary'>Hossam Hassan</h1>
        <h2 className='font-bold text-[50px]'>Football Analyst</h2>
      </div>
      <div className='flex flex-col items-start gap-y-7'>
        <p className='font-light text-[#E4E3E3] text-[25px]'>
          Hi, I'm Hossam Hassan Football analyst specializing in identifying
          gaps within football tactical analysis and software tools, with a
          focus on advancing methodologies for performance evaluation and
          decision-making support
        </p>
        <button className='py-[16px] border border-[#9C9C9C] rounded-md w-[278px] text-[25px]'>Read More</button>
      </div>
    </div>
  )
}

export default NavContent
