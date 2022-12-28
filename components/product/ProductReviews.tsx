import Rating from "../common/Rating";

type ReviewType = {
  username: string;
  date: string;
  comment: string;
  userImage: string;
  rating: number;
};

function ProductReviews({ reviews=[] }: { reviews: ReviewType[] }) {
  return (
    <div>
      <div className="p-4 rounded shadow">
        {reviews.map((review) => (
          <Review
            key={`review ${review.date}`}
            username={review.username}
            date={review.date}
            userImage={review.userImage}
            comment={review.comment}
            rating={review.rating}
          />
        ))}
      </div>
    <button className="p-4 rounded-md border border-red-500 w-full my-2 hover:bg-red-500 hover:text-white transition-all"> Load more reviews </button>
    </div>
  );
}

export default ProductReviews;

export const Review = ({ username, date, comment, userImage, rating }: ReviewType) => {
  return (
    <div className="p-3 rounded shadow">
        <div className="lg:grid grid-cols-4 gap-4 justify-between">
            <div className="gap-4 flex items-start col-span-3">
                <img
                    src={userImage}
                    className="w-8 h-8 rounded-full shadow"
                    alt={username}
                />
                <div>
                    <h3 className="font-bold font-lato"> {username} </h3>
                    <p className="text-gray-500"> {date} </p>
                </div>
            </div>
            <div className="col-span-1">
                <Rating rating={rating} />
            </div>
        </div>
      <p className="py-4"> {comment} </p>
    </div>
  );
};
