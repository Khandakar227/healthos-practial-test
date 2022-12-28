import { InputHTMLAttributes } from "react";

function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`my-3 p-4 rounded-xl bg-gray-100 outline-none hover:bg-slate-200 focus:bg-slate-200 w-full ${className}`}
      {...props}
    />
  );
}

export default Input;
