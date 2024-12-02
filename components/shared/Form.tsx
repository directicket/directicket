import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import Link from 'next/link'

const Form = () => {
  return (
    <div className='contact-container p-medium-16 flex-col flex items-center justify-center wrapper w-[350px]'>
        <form action="https://api.web3forms.com/submit" method="POST" className='contact-left items-center justify-center'>
            <input type="hidden" name="access_key" value="e85da356-df4d-4824-9b02-75f750084417"></input>
            <input type='text' name='name' placeholder='Your Full Name (required)' className='w-[350px] contact-inputs 
            rounded-lg' required></input>
            <input type='text' name='username' placeholder='Your Social Media Username (required)' 
            className='w-[350px] contact-inputs rounded-lg' required></input>
            
            <select name="platform" required className='w-[320px] md:w-[330px] p-4 bg-white rounded-lg'>
                <option value="" disabled className='w-[350px] p-2 bg-white hover:blue-button p-medium-16'>Where can we find you?</option>
                <option value='snapchat' className='w-[350px] p-2 bg-white p-medium-16'>Snapchat</option>
                <option value='instagram' className='w-[350px] p-2 bg-white p-medium-16'>Instagram</option>
                <option value='twitter' className='w-[350px] p-2 bg-white p-medium-16'>X/Twitter</option>
            </select>

            <input type='text' name='email' placeholder='Your Email' className='w-[350px] contact-inputs rounded-lg'></input>
            <button type='submit' className='rounded-lg py-4 px-4 text-white w-[350px] 
            lg:w-full bg-black' >Get early access</button>

            <p className='p-medium-12 w-[300px] text-center justify-center text-gray-400'>
                We only use this information to contact you and may send you updates on Directicket. 
                By clicking on 'Get early access' you agree to our Terms and Privacy Policy. Contact us{' '}@
                <a href="https://instagram.com/directickets" className='underline'>directicket</a> for more info.
                </p>
        </form>
    </div>
  )
}

export default Form