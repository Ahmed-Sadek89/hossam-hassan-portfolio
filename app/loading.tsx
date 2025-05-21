import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center bg-red w-full h-screen'>
        <Image
          src="/logo.svg"
          alt="Loading..."
          width={1000}
          height={1000}
          className="mx-auto" />
    </div>
  )
}

export default Loading