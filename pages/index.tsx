import Head from "next/head";
import Link from "next/link";
import Category from "../components/common/Category";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import Product from "../components/common/ProductCard";
import Loader from "../components/common/Loader";
import IconContent from "../components/Home/IconContent";


export default function Home() {
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products?limit=8",
    fetcher
  );
  return (
    <>
      <Head>
        <title>E-store</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="md:flex gap-4 mt-12">
        <Category />

        <div className="w-full">

          <div className="shadow rounded-md relative overflow-hidden">
            <img className="w-full" src="/assets/carousel-img-1.png" alt="Hero section" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8">
            ⛄ Winter Collection
          </h2>

          <div className="hero-section hs-2 my-8 shadow rounded-md py-16 md:py-24 px-4 bg-[#cc0023] text-white">
            <h2 className="font-bolder md:text-5xl text-4xl">
              <span className="bg-slate-50-300">WINTER</span> IS
              <br /> <del className="DEL">COMING</del> HERE.
            </h2>
          </div>


          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8">
            💯 Exclusive
          </h2>

          <div className="hero-section hs-1 my-8 shadow rounded-md py-16 md:py-24 px-4 bg-slate-100 text-right">
            <h2 className="font-bolder md:text-5xl text-4xl">
              LET'S EXPLORE <br />
              <span className="bg-yellow-300">UNIQUE</span> <br /> CLOTHES.
            </h2>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8">
            🔥 Hot sale
          </h2>
          <div className="p-4">
            <img className="w-full shadow rounded-md" src="/assets/carousel-img-2.png" alt="new jordan"/>
          </div>

          <div className="my-12">
            <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-8">
              💖 Popular
            </h2>
            <div className="text-center">{isLoading ? <Loader /> : ""}</div>
            <div className="w-full py-8 grid gap-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {data?.map((product: any) => (
                <Product
                  key={product.title + product.id}
                  id={product.id}
                  title={product.title}
                  category={product.category}
                  image={product.image}
                  price={product.price*80}
                  rating={product.rating.rate}
                />
              ))}
            </div>
            <IconContent />
          </div>
        </div>
      </div>
    </>
  );
}
