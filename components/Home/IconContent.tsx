import {FaBox, FaShippingFast} from 'react-icons/fa'
import {BiSupport} from 'react-icons/bi'
import {MdHighQuality} from 'react-icons/md'

export default function IconContent() {
  return (
    <div className="py-10 mx-auto">
        <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 justify-evenly items-center bg-zinc-50 py-4 px-2 w-full gap-4 rounded-md">
            <div className='grid justify-center items-center text-center'>
                <FaShippingFast className='w-11 h-11 mx-auto' />
                <h3 className='font-bold py-2'> Fast Delivery </h3>
                <p className='text-sm text-zinc-500'>Free worldwide shipping on all orders over  tk. 8000</p>
            </div>
            <div className='grid justify-center items-center text-center'>
                <BiSupport className='w-11 h-11 mx-auto' />
                <h3 className='font-bold py-2'> 24/7 Support </h3>
                <p className='text-sm text-zinc-500'>Need advice? Ask us! Or call us on: +45 3 4564 2355 </p>
            </div>
            <div className='grid justify-center items-center text-center'>
                <FaBox className='w-11 h-11 mx-auto' />
                <h3 className='font-bold py-2'> 30 Days Return </h3>
                <p className='text-sm text-zinc-500'>Returning your order for free is easy: just send us an email</p>
            </div>
            <div className='grid justify-center items-center text-center'>
                <MdHighQuality className='w-11 h-11 mx-auto' />
                <h3 className='font-bold py-2'> High Quality </h3>
                <p className='text-sm text-zinc-500'> Made from fine materials </p>
            </div>
        </div>
    </div>
  )
}
