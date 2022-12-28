import Input from "../common/Input";
import GiveRating from "./GiveRating";

function WriteAReview() {
  return (
    <div className="border shadow rounded-md p-4 bg-zinc-200">
      <h2 className="pt-4 pb-6 font-bold text-2xl"> Write a review </h2>
      <form>
        <label className="font-bold"> Name </label>
        <Input
          type="text"
          value="John Doe"
          name="name"
          className="border"
          readOnly
        />
        <label className="font-bold"> Email </label>
        <Input
          type="text"
          value="johndoe.example@gmail.com"
          name="email"
          className="border"
          readOnly
        />
        <label className="font-bold"> Rate </label>
        <GiveRating />
        <label className="font-bold"> Description </label>
        <textarea
          placeholder="Write a description"
          name="description"
          className="min-h-[180px] my-3 p-4 rounded-xl bg-gray-100 outline-none hover:bg-slate-200 focus:bg-slate-200 w-full border"
          required
        />
        <button className="w-full my-3 shadow rounded-xl bg-red-500 text-white p-4 hover:brightness-90"> Submit </button>
      </form>
    </div>
  );
}

export default WriteAReview;
