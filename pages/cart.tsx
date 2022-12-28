import Link from "next/link"
import {useCart} from '../context/cart'
function Cart() {
  const {cart} = useCart()
  if (!cart.length)
  return (
    <div>
        <p className="p-4 rounded-md shadow bg-zinc-600 text-white my-4"> Your cart is currently empty. </p>
        <Link href="/"><button className="p-4 border rounded-md border-black hover:bg-black hover:text-white transition-all"> Return to Shop </button></Link>
    </div>
  )
  return (
    <>
    <div className="py-4 font-bold text-lg">
      <h1> Cart </h1>
    </div>
    {
      
    }
    </>
  )
}

export default Cart