import Image from 'next/image'

const Tools = () => {
  const tools = [
    'Hudl Sports',
    'Live TAG PRO',
    'Python',
    'Wyscout',
    'Veo System',
    'tacticalista',
    'Microsoft 365',
    'Opta',
    'kinovea'
  ]

  return (
    <section className='space-y-5 py-20 container'>
      <Image
        src={'/tool-title.svg'}
        alt='tool'
        width={700}
        height={100}
        className='object-fill'
      />

      <div className='gap-6 grid grid-cols-2 lg:grid-cols-3'>
        {tools.map((tool, index) => (
          <div
            key={index}
            className='group flex flex-col items-center shadow-lg rounded-lg overflow-hidden transition duration-300'
          >
            <div className='flex justify-center items-center w-full h-[180px] md:h-[200px] overflow-hidden'>
              <div
                className='bg-cover bg-center rounded-t-lg w-full h-full scale-100 group-hover:scale-105 transition duration-300'
                style={{
                  backgroundImage: `url(/tool${ index + 1}.${'png'})`,
                  backgroundColor: `${
                    index === tools.length - 1 ? '#fff' : 'transparent'
                  }`,
                }}
              />
            </div>

            <div className='flex justify-center items-center bg-[#004720] group-hover:bg-white px-2 w-full h-[60px] md:h-[72px] text-[16px] text-white md:text-[18px] group-hover:text-[#004720] text-center transition duration-300'>
              <h2>{tool}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tools
