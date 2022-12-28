import React from 'react'
import Link from 'next/link'
import {FcGoogle } from 'react-icons/fc'
import {FaFacebookSquare } from 'react-icons/fa'
import Input from '../components/common/Input'

export default function Register() {
  return (
    <div className='grid justify-center items-center w-full h-full p-4'>
        <div className='md:p-16 p-4 rounded-xl shadow max-w-[500px] border'>
            <div className='flex justify-between items-center rounded-xl bg-gray-100 border'>
                <Link className='px-4 md:px-8 py-4 rounded-xl font-bold flex-auto' href="/login"> Login </Link>
                <button className=' bg-white px-4 md:px-8 py-4 border rounded-xl font-bold flex-auto'> Register </button>
            </div>

            {/* Register Form */}
            
            <form>
                <Input type='text' name='firstname' placeholder='First Name' />
                <Input type='text' name='lastname' placeholder='Last Name' />
                <Input type='number' name='phone' placeholder='Phone Number' />
                <Input type='password' name='password' placeholder='Password' />
                <Input type='password' name='confirm_password' placeholder='Confirm Password' />
                <button className='my-3 font-bold bg-black rounded-xl text-white w-full py-4 px-8'> Login </button>
            </form>
            <div className='flex items-center justify-center gap-4 mt-16 my-8'>

            {/* Sign in with other credentials */}

                <hr className='w-full' />
                <span className='w-[320px] text-center'> Register with </span>
                <hr className='w-full'/>
            </div>
            <div className='md:flex gap-4 justify-evenly items-center '>
                <button className='w-full px-8 py-4 my-4 border rounded-xl font-lato flex gap-2 items-center justify-center'> <FcGoogle className='w-8 h-8'/><span> Google </span> </button>
                <button className='w-full px-8 py-4 my-4 border rounded-xl font-lato flex gap-2 items-center justify-center'> <FaFacebookSquare fill="blue" className='w-8 h-8'/><span> Facebook </span> </button>
            </div>
        </div>
    </div>
  )
}
