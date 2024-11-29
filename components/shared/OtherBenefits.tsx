import { BadgeCheck, Heart, ShieldMinus, Shirt, Wrench } from 'lucide-react'
import React from 'react'

const OtherBenefits = () => {
  return (
    <>
      <div className="slide-in-from-bottom-96 rounded-2xl flex flex-col lg:flex-row items-start justify-start w-full h-fit bg-black">

        {/* HEADER */}
        <div className='flex-auto'>
          <h2 className="px-8 text-6xl h1-medium w-full lg:w-[520px] text-left align-top pb-2 pt-8 text-white">
            Take a look at what else makes Directicket great for your event.
          </h2>

          {/* CONTENT */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
            
            {/* BENTO START */}
            <div className='flex flex-col items-start px-8 pt-8 lg:col-span-1'>
              <Heart className='text-red-700 p-3 bg-red-300 rounded-xl'
                width={50} height={50}/>
              <h2 className='p-medium-20 lg:p-medium-24 text-left pt-4 pb-2 text-white'>
                For the love of connection.
              </h2>
              <p className='text-gray-500 p-medium-18 pb-8 text-left'>
                In an increasingly digital world, Directicket's mission is to drive
                offline events that bring people from all backgrounds together.
              </p>
            </div>
            {/* BENTO END */}


            {/* BENTO START */}
            <div className='flex flex-col items-start px-8 pt-8 lg:col-span-1'>
            <BadgeCheck className='text-blue-950 p-3 bg-blue-300 rounded-xl'
                width={50} height={50}/>
              <h2 className='p-medium-20 lg:p-medium-24 text-left pt-4 pb-2 text-white'>
                Verification saves lives.
              </h2>
              <p className='text-gray-500 p-medium-18 pb-8 text-left'>
                We are the only platform that verifies ticket details to prevent
                scammers from ripping you off and putting you in harms way.
              </p>
            </div>
            {/* BENTO END */}


            {/* BENTO START */}
            <div className='flex flex-col items-start px-8 pt-8 lg:col-span-1'>
            <Shirt className='text-blue-600 p-3 bg-blue-950 rounded-xl'
                width={50} height={50}/>
              <h2 className='p-medium-20 lg:p-medium-24 text-left pt-4 pb-2 text-white'>
                Team members at every event.
              </h2>
              <p className='text-gray-500 p-medium-18 pb-8 text-left'>
              We deploy team members to events that sell tickets through 
              Directicket to help with event operations.
              </p>
            </div>
            {/* BENTO END */}


            {/* BENTO START */}
            <div className='flex flex-col items-start px-8 pt-8 lg:col-span-1'>
            <ShieldMinus className='text-gray-500 p-3 bg-gray-700 rounded-xl'
                width={50} height={50}/>
              <h2 className='p-medium-20 lg:p-medium-24 text-left pt-4 pb-2 text-white'>
                A community built on trust, is built to last.
              </h2>
              <p className='text-gray-500 p-medium-18 pb-8 text-left'>
              At Directicket, we respect your data's confidentiality. 
              Directicket will never sell your data for anything. Ever.
              </p>
            </div>
            {/* BENTO END */}


          </div>
        </div>
      </div>
    </>
  )
}

export default OtherBenefits
