import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import axios, { AxiosResponse } from "axios";
import Error from "next/error";
import { ProductType } from "../../components/common/ProductCard";
import Rating from "../../components/common/Rating";
import ProductReviews from "../../components/product/ProductReviews";
import WriteAReview from "../../components/product/WriteAReview";

const reviews = [
  {username: 'John Doe', rating: 5, date: 'Yesterday', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus at? Repellat a quis ullam laudantium veritatis doloremque. Adipisci facilis commodi recusandae corrupti corporis animi numquam aspernatur quisquam libero praesentium.', userImage: 'https://avatars.dicebear.com/api/identicon/tommy.svg'},
  {username: 'Jane Eod', rating: 3.5, date: '4 days ago', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus at? Repellat a quis ullam laudantium veritatis doloremque. Adipisci facilis commodi recusandae corrupti corporis animi numquam aspernatur quisquam libero praesentium.', userImage: 'https://avatars.dicebear.com/api/identicon/jane.svg'},
  {username: 'Enaj Eod', rating: 2.5, date: '4/12/2022', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus at? Repellat a quis ullam laudantium veritatis doloremque. Adipisci facilis commodi recusandae corrupti corporis animi numquam aspernatur quisquam libero praesentium.', userImage: 'https://avatars.dicebear.com/api/identicon/enaj.svg'},
  {username: 'John Doe', rating: 5, date: '3/12/2022', comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, possimus at? Repellat a quis ullam laudantium veritatis doloremque. Adipisci facilis commodi recusandae corrupti corporis animi numquam aspernatur quisquam libero praesentium.', userImage: 'https://avatars.dicebear.com/api/identicon/john.svg'},
]

function Product(response: {
  data: ProductType;
  status: number;
  statusText: string;
}) {
  //If no data show error page
  if (!response.data)
    return (
      <Error statusCode={response.status == 200 ? 404 : response.status} />
    );

  return (
    <div className="grid gap-4 p-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="mx-auto">
          {/* Product info */}
          <Image
            src={response.data.image}
            alt={response.data?.title}
            height={400}
            width={400}
            className="w-full h-auto max-w-sm mx-auto"
          />
        </div>
        <div className="py-4">
          <p className="text-gray-600 font-bold py-4"> {response.data.category} </p>
          <h1 className="text-2xl md:text-3xl font-bold py-4"> {response.data.title} </h1>
          <p className="text-2xl font-lato font-bold py-4">Tk {response.data.price*70} </p>
          <p className="py-6">{response.data.description}</p>
          {/* Add to Cart */}
          <div className="py-6 grid grid-cols-3 gap-4 justify-between items-center">
            <input type='number' className="p-3 border shadow rounded-md col-span-1 font-bold outline-none focus:brightness-95" defaultValue={1}/>
            <button className="p-3 text-white bg-red-500 rounded-md shadow col-span-2 hover:bg-red-600"> Add to Cart </button>
          </div>

        </div>
      </div>
      
      <hr />
      <div className="py-4">
        <h2 className="py-4 text-2xl font-bold font-lato"> Customer reviews </h2>
        <Rating rating={response.data.rating.rate} className="w-8 h-auto mx-2" />
        <div className="py-8 grid md:grid-cols-2 gap-4 items-start">
          <ProductReviews reviews={reviews}/>
          <div className="py-8">
            <WriteAReview />
          </div>
        </div>
      </div>
    </div>
  );
}

//Get product info from the server
export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const res = await axios.get(
      `https://fakestoreapi.com/products/${encodeURIComponent(
        context?.params?.product_id as string
      )}`
    );
    return {
      props: { data: res.data, status: res.status, statusText: res.statusText },
    };
  } catch (error) {
    return {
      props: {
        data: "",
        status: 500,
        statusText: " I think we messed up something ",
      },
    };
  }
}

export default Product;
