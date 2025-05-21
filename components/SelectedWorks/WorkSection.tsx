import Image from 'next/image'
import Link from 'next/link'

type props = {
  videoUrl: string
  title: string
}

const VideoSection = ({ videoUrl, title }: props) => {
  return (
    <div className='items-center gap-7 grid grid-cols-1 lg:grid-cols-3'>
      {/* Video */}
      <div className='lg:col-span-2 w-full'>
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
      </div>

      {/* Side Content */}
      <div className='flex flex-col justify-center items-center gap-y-6 bg-[#24453333] px-5 py-10 rounded-lg h-full lg:h-[565px]'>
        <Link
          href={'#'}
          className='bg-white hover:bg-primary px-6 py-4 rounded-md w-full text-primary hover:text-white text-sm sm:text-base text-center transition duration-300'
        >
          {title}
        </Link>
        <Link
          href={'#'}
          className='flex items-center gap-x-5 text-primary hover:text-green-300 transition duration-300'
        >
          <Image src={'/drive.svg'} alt='drive' width={40} height={40} />
          <span className='font-light text-sm sm:text-base underline'>
            Press For Full Report
          </span>
        </Link>
      </div>
    </div>
  )
}

export default VideoSection
