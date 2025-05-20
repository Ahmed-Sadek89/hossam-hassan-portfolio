import Image from 'next/image'
import React from 'react'

const Philosophy = () => {
  return (
    <section className='space-y-5 py-20 container' id="philosophy">
      <Image
        src={'/analysis.svg'}
        alt='analysis'
        width={700}
        height={100}
        className='object-fill'
      />
      <div className='relative w-full'>
        <div className='z-10 absolute inset-0 bg-black/60'></div>
        <div className="z-0 absolute inset-0 bg-[url('/analyitcs.png')] bg-cover bg-no-repeat bg-center"></div>
        <ul className='z-20 relative flex flex-col justify-center items-center gap-y-20 px-16 py-20 font-normal text-[24px] list-disc'>
          <li className='leading-[150%]' style={{ letterSpacing: '2%' }}>
            I am an analyst who approaches analysis as a reverse-engineering
            process. Every detail counts, and football is not a game of
            chance—it is a structured, evolving science. Each match is a step
            toward realizing the manager’s intended style of play. Analysis
            should serve as an augmented feedback mechanism, where gaps are
            identified based on the sequence of play and the progression of the
            game
          </li>
          <li className='leadeing-[150%]' style={{ letterSpacing: '2%' }}>
            With diverse experience across Egypt, the UK, and the UAE, I believe
            that football analysis—whether qualitative or quantitative—holds the
            key to answering the "why" and "how" behind every moment in the
            game.
          </li>
          <li className='leadeing-[150%]' style={{ letterSpacing: '2%' }}>
            My analysis process begins by identifying the patterns that define
            each phase of the game. From there, I construct a qualitative
            interpretation grounded in football knowledge. Then, I move to
            visualization and data analysis to assess how closely the
            data-driven perspective aligns with my own insights—striving to find
            common ground between the two in order to deliver the most
            meaningful and enhanced feedback possible.
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Philosophy
