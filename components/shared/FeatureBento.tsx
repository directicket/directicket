import Image from 'next/image'
import React from 'react'

const FeatureBento = () => {
  return (
    <>
      <div className="rounded-2xl flex flex-col lg:flex-row items-start justify-start w-full h-fit bg-gray-100">
        {/* HEADER */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 overflow-hidden'>
          <div className="relative lg:ml-auto lg:w-full lg:h-[700px] w-full max-h-[500px] rounded-tl-2xl rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tl-2xl lg:rounded-br-none lg:rounded-tr-none overflow-hidden">
            <Image alt='img' className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500" width={2000} height={2000}
              src='/contents/about/badson1.jpg'/>
          </div>
          <h2 className="px-8 lg:h2-medium p-medium-24 w-full lg:w-[520px] text-left align-top pb-12 pt-8 text-black">
            Free from fees forever.
            <br/>
            <br/>
            <span className='text-gray-400'>Directicket is the only platform that pays organizers  
            100% of the profit from tickets, 100% of the time.</span>
          </h2>
        </div>
      </div>

<br/>

      <div className="rounded-2xl flex flex-col lg:flex-row items-start justify-start w-full h-fit bg-gray-100">
        {/* HEADER */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 overflow-hidden'>
          <div className="relative lg:ml-auto lg:w-full lg:h-[700px] w-full max-h-[500px] rounded-tl-2xl rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tl-2xl lg:rounded-br-none lg:rounded-tr-none overflow-hidden">
            <Image alt='img' className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500" width={2000} height={2000}
              src='/contents/about/badson1.jpg'/>
          </div>
          <h2 className="px-8 lg:h2-medium p-medium-24 w-full lg:w-[520px] text-left align-top pb-12 pt-8 text-black">
            Every ticket is special.
            <br/>
            <br/>
            <span className='text-gray-400'>
                Give each ticket a custom 
                webpage where attendees can 
                make purchases.
            </span>
          </h2>
        </div>
      </div>

<br/>

      <div className="rounded-2xl flex flex-col lg:flex-row items-start justify-start w-full h-fit bg-gray-100">
        {/* HEADER */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 overflow-hidden'>
          <div className="relative lg:ml-auto lg:w-full lg:h-[700px] w-full max-h-[520px] rounded-tl-2xl rounded-tr-2xl lg:rounded-bl-2xl lg:rounded-tl-2xl lg:rounded-br-none lg:rounded-tr-none overflow-hidden">
            <Image alt='img' className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500" width={2000} height={2000}
              src='/contents/about/badson1.jpg'/>
          </div>
          <h2 className="px-8 lg:h2-medium p-medium-24 w-full lg:w-[520px] text-left align-top pb-12 pt-8 text-black">
            Control access to tickets.
            <br/>
            <br/>
            <span className='text-gray-400'>Over 80% of people make purchases faster when 
                there are clear time constraints. Access Limit gives you control over 
                the exact second your tickets go off sale.
            </span>
          </h2>
        </div>
      </div>
    </>
  )
}

export default FeatureBento
