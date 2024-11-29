import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'

const Form = () => {
  return (
    <div className='contact-container p-medium-16 flex-col flex items-center justify-center wrapper w-[350px]'>
        <form action="" className='contact-left items-center justify-center'>
            <input type='text' name='name' placeholder='Your Name (required)' className='w-[350px] contact-inputs 
            rounded-lg' required></input>
            <input type='text' name='username' placeholder='Your Social Media handle (required)' 
            className='w-[350px] contact-inputs rounded-lg' required></input>
            <input type='text' name='email' placeholder='Your Email' className='w-[350px] contact-inputs rounded-lg'></input>
            <button type='submit' className='rounded-lg py-4 px-4 text-white w-[350px] 
            lg:w-full bg-black'>Get early access</button>

            <p className='p-medium-12 w-[350px] text-center justify-center text-gray-400'>
                We only use this information to contact you and may send you updates on Directicket. 
                By click 'Get early access' you agree to our Terms and Privacy Policy. Contact us @directicket for more info.
                </p>
        </form>
    </div>
  )
}

export default Form