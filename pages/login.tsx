import React from 'react'
import Link from 'next/link'
import {FcGoogle } from 'react-icons/fc'
import {FaFacebookSquare } from 'react-icons/fa'

function Login() {
  return (
    <div className='grid justify-center items-center w-full h-full p-4'>
        <div className='md:p-16 p-4 rounded-xl shadow max-w-[500px] border'>
            <div className='flex justify-between items-center rounded-xl bg-gray-100 border'>
                <button className=' bg-white px-4 md:px-8 py-4 border rounded-xl font-bold flex-auto text-center'> Login </button>
                <Link className='px-4 md:px-8 py-4 rounded-xl font-bold flex-auto text-center' href="/register"> Register </Link>
            </div>

            {/* Login Form */}

            <form>
                <input className='my-3 p-4 rounded-xl bg-gray-100 outline-none hover:bg-slate-200 focus:bg-slate-200 w-full' type='number' name='phone' placeholder='Phone Number'/>
                <input className='my-3 p-4 rounded-xl bg-gray-100 outline-none hover:bg-slate-200 focus:bg-slate-200 w-full' type='password'  name='password' placeholder='Password'/>
                <button className='my-3 font-bold bg-black rounded-xl text-white w-full py-4 px-8'> Login </button>
            </form>
            <button className='mt-8 font-bold'> Forgot Password? </button>
            <div className='flex items-center justify-center gap-4 mt-16 my-8'>
                <hr className='w-full' />
                <span className='w-[250px] text-center'> Login with </span>
                <hr className='w-full'/>
            </div>

            {/* Sign in with other credentials */}
         
            <div className='md:flex gap-4 justify-evenly items-center'>
                <button className='w-full px-8 py-4 my-4 border rounded-xl font-lato flex gap-2 items-center justify-center'> <FcGoogle className='w-8 h-8'/><span> Google </span> </button>
                <button className='w-full px-8 py-4 my-4 border rounded-xl font-lato flex gap-2 items-center justify-center'> <FaFacebookSquare fill="blue" className='w-8 h-8'/><span> Facebook </span> </button>
            </div>
        </div>
    </div>
  )
}

export default Login