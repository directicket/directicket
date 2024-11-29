import Form from '@/components/shared/Form'
import { Info, TriangleAlert } from 'lucide-react'
import React from 'react'

export default function Home() {
  return (
    <div className="wrapper flex flex-col items-center justify-center">
        <div className="h-fit flex w-fit px-4 rounded-lg flex-row p-3 bg-yellow-50 cursor-pointer">
            <TriangleAlert className='text-yellow-500 flex-row' height={20} width={20}/>
            <p className="p-medium-14 pl-1 flex-row text-yellow-500">
                Hurry! Early access is limited and closes soon.
            </p>
        </div>

        <div className="flex-col flex items-center justify-center w-full pt-10 h-fit bg-white">
            <h1 className="h1-medium w-full text-center align-middle pb-4">
                Create exciting expereinces.</h1>
            <p className="text-gray-400 sm:w-96 md:w-96 p-medium-16 md:p-medium-18 text-center pb-8">
                We're giving you the chance to try Directicket before it becomes open to everyone. <br/>
                Avaialble for a limited time only.
            </p>

            <Form />
        </div>
        {/* Button */}
        <div>
        
        </div>
        {/* Button */}
    </div>
  )
}