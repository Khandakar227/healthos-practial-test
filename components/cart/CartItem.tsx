import { RiDeleteBin6Fill } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import { HiMinus } from "react-icons/hi";
import { useCart } from "../../context/cart";
import { toast } from "react-toastify";
import Link from "next/link";
import { useState } from "react";

export type CartProps = {
  product_id: string | number | any;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

const CartItem = ({
  cartItem,
  index,
}: {
  cartItem: CartProps;
  index: number;
}) => {
  const { removeFromCart, updateQuantity } = useCart();

  function remove() {
    removeFromCart(cartItem.product_id);
    toast.success("1 item removed from the cart 🗑️", { theme: "colored" });
  }

  function changeQt(_index: number, quantity: number) {
    if (cartItem.quantity == 0 && quantity < 0) return;
    updateQuantity(_index, quantity);
}

  return (
    <div className="p-4 shadow rounded flex gap-4 justify-start items-start">
      <Link href={`/product/${cartItem.product_id}`}>
        <img className="w-20 h-20" src={cartItem.image} alt={cartItem.title} />
      </Link>
      <Link href={`/product/${cartItem.product_id}`}>
        <div className="grid gap-4">
          <h2 className="text-xl font-bold py-2"> {cartItem.title} </h2>
          <p className="text-red-500">TK. {cartItem.price} </p>
          <p className="text-zinc-500">Quantity: {cartItem.quantity} </p>
        </div>
      </Link>
      <div className="grid items-center h-full flex-auto justify-end px-4 gap-4">
        <button title="Remove from cart" className="mx-auto" onClick={remove}>
          <RiDeleteBin6Fill className="w-7 h-7" />
        </button>
        <div className="flex gap-2 rounded border">
          <button onClick={() => changeQt(index, 1)} className="p-1">
            <BsPlusLg />
          </button>
          <span className="p-2"> {cartItem.quantity} </span>
          <button onClick={() => changeQt(index, -1)} className="p-1">
            <HiMinus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
