import { SelectHTMLAttributes } from "react";

function GiveRating({
  className,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="pr-4  my-3 px-4 border rounded-xl bg-gray-100 outline-none hover:bg-slate-200 focus:bg-slate-200">
        <select
        className={`w-full py-4 ${className} bg-transparent outline-none`}
        placeholder="Give us a rating"
        required
        >
            <option value={1}>1</option>
            <option value={1.5}>1.5</option>
            <option value={2}>2</option>
            <option value={2.5}>2.5</option>
            <option value={3}>3</option>
            <option value={3.5}>3.5</option>
            <option value={4}>4</option>
            <option value={4.5}>4.5</option>
            <option value={5}>5</option>
        </select>
    </div>
  );
}

export default GiveRating;
