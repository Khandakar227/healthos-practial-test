import Image from "next/image";
import Rating from "./Rating";

export type ProductType = {
  id?: string;
  image: string;
  name: string;
  description?: string;
  category: string;
  price: number;
  rating: number;

};

function ProductCard({ image, name, category, price, rating }: ProductType) {

  return (
    <div className="shadow rounded-md w-[calc(100%)] p-4 overflow-hidden">
      <Image className="pt-4 h-[300px] w-auto mx-auto" src={image} alt={name} height={200} width={200}  />
      <div className="pt-8">
        <Rating rating={rating} />
          <h2 className="py-4 font-bold text-xl overflow-hidden text-ellipsis whitespace-nowrap"> {name} </h2>
        <p className="py-2"> {category} </p>
        <p className="py-2 font-bold"> BDT: {price} </p>
      </div>
    </div>
  );
}

export default ProductCard;
