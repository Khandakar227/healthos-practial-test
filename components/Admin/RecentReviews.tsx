import Rating from "../common/Rating";

export type Review = {
  productName:string;
  productImage:string;
  rating:number;
  username:string;
  productId?: string;
  userId?: string;
}

export default function RecentReviews({reviews}:{reviews:Review[]}) {
  return (
    <div className="bg-white p-4 rounded-md shadow font-lato grid items-center">
      <h2 className="font-bold py-4 text-xl"> Recent reviews </h2>
      <hr />
      <div className="py-8">
        {
          reviews.map((review, i) => (
            <Review productName={review.productName} productImage={review.productImage} rating={review.rating} username={review.username} key={`review ${i}`} />
          ))
        }
      </div>
    </div>
  );
}

export const Review = ({
  productName,
  productImage,
  rating,
  username,
}: {
  productName: string;
  rating: number;
  username: string;
  productImage:string;
}) => {
  return (
    <div className="py-2 grid gap-4 lg:grid-cols-6 justify-between items-center px-4 ext-left shadow rounded-md w-[calc(100%)]">
      
      <div className="w-full flex items-center gap-4 justify-left overflow-x-hidden col-span-4">
        <img className="h-10 w-auto max-w-[3rem]" src={productImage} alt={productName}/>
        <div className="overflow-x-hidden">
          <h2 className="font-bolder overflow-x-hidden text-ellipsis whitespace-nowrap"> {productName} </h2>
          <p className="text-sm text-gray-500"> Reviewed by {username} </p>
        </div>
      </div>

      <div className="w-[100px] col-span-2">
        <Rating rating={rating} />
      </div>

    </div>
  );
};
