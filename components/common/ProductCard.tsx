import Image from "next/image";
import Rating from "./Rating";
import { FaOpencart } from "react-icons/fa";
import Link from "next/link";
import { useCart } from "../../context/cart";
import { toast } from "react-toastify";

export type ProductType = {
  id?: string;
  image: string;
  title: string;
  description?: string;
  category: string;
  price: number;
  rating: {rate: number, count:number};

};

function ProductCard({ id, image, title, category, price, rating }: ProductType) {
  const {addToCart, cart} = useCart()
  
  const toCart = () => {
    addToCart({ product_id: id, image, title,price, quantity: 1  })
    toast.info("1 item added to the cart 🛒", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      })
  }

  return (
    <div className="shadow rounded-md w-[calc(100%)] p-4 overflow-hidden">
      <Link href={`product/${id}`}>
        <Image className="pt-4 h-[300px] w-auto mx-auto" src={image} alt={title} height={200} width={200}  />
        <div className="pt-8">
          <Rating rating={rating.rate} />
            <h2 className="py-4 font-bold text-xl overflow-hidden text-ellipsis whitespace-nowrap"> {title} </h2>
          <p className="py-2"> {category} </p>
          <p className="py-2 font-bold"> BDT: {price} </p>
        </div>
      </Link>
      <button onClick={() => toCart()} className="my-4 p-2 bg-red-500 rounded-md text-white flex items-center justify-center shadow gap-4 w-full"> <FaOpencart /> <span> Add to cart </span></button>
    </div>
  );
}

export default ProductCard;
