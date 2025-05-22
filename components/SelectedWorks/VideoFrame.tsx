import React from 'react'

const VideoFrame = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div className='relative bg-black rounded-lg overflow-hidden'>
      <div className='relative pb-[56.25%] h-0'>
        <iframe
          src={videoUrl}
          allow='autoplay; encrypted-media'
          allowFullScreen
          className='top-0 left-0 absolute w-full h-full'
        />
      </div>
    </div>
  )
}

export default VideoFrame
