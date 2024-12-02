'use client'

import Form from '@/components/shared/Form'
import { Info, TriangleAlert } from 'lucide-react'
import React, { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0); //forces page to start at the top
    }, []); //empty dependency array so that this this only runs on page load
  return (
    <div className="wrapper flex flex-col items-center justify-center">
        <div className="h-fit flex w-fit px-4 rounded-lg flex-row p-3 bg-lime-50">
            <TriangleAlert className='text-lime-500 flex-row' height={20} width={20}/>
            <p className="p-medium-14 pl-1 flex-row text-lime-500">
                Secure your spot now! Early access is limited.
            </p>
        </div>

        <div className=" wrapper flex-col flex items-center justify-center w-full pt-10 h-fit bg-white">
            <h1 className="h1-medium w-full text-center align-middle pb-4">
                Join 500+ people excited to try us.</h1>

            <Form />
        </div>
        {/* Button */}
        <div>
        
        </div>
        {/* Button */}
    </div>
  )
}