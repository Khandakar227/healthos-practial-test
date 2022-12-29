import Link from "next/link";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../context/cart";
import CheckOut from "../components/cart/CheckOut";
import { MdArrowBackIosNew } from "react-icons/md";

function Cart() {
  const { cart } = useCart();
  if (!cart.length)
    return (
      <div>
        <p className="p-4 rounded-md shadow bg-zinc-600 text-white my-4">
          Your cart is currently empty.
        </p>
        <Link href="/">
          <button className="p-4 border rounded-md border-black hover:bg-black hover:text-white transition-all">
            Return to Shop
          </button>
        </Link>
      </div>
    );
  return (
    <div>
      <div className="py-4 font-bold text-xl bg-black text-white rounded">
        <h1 className="py-8 px-4"> Your Cart </h1>
      </div>
      <Link href={'/'}>
        <button className="p-3 rounded-md border border-black my-3 flex justify-between items-center hover:bg-black hover:text-white transition-all">
          <MdArrowBackIosNew />
          <span>Continue Shopping</span>
        </button>
      </Link>
      <div className="py-8">
        {cart.map((item, i) => (
          <CartItem key={item.product_id} cartItem={item} index={i} />
        ))}
      </div>
      <CheckOut />
    </div>
  );
}

export default Cart;
