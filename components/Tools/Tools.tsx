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
      <div className='items-center gap-x-10 gap-y-6 grid grid-cols-3'>
        {tools.map((tool, index) => (
          <div
            key={index}
            className='flex flex-col items-center shadow-lg rounded-lg overflow-hidden'
          >
            <div className={`flex justify-center items-center w-full  `}>
              <div
                className={` bg-cover bg-center rounded-t-lg w-full h-[200px] `}
                style={{
                  backgroundImage: `url(/tool${index + 1}.png)`,
                  backgroundColor: `${
                    index === tools.length - 1 ? '#fff' : 'transparent'
                  }`,
                }}
              />
            </div>
            <div className='flex justify-center items-center bg-[#004720] w-full h-[72px]'>
              <h2>{tool}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Tools
