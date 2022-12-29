import React from "react";
import Link from "next/link";

function Category() {
  return (
    <div className="px-2 md:max-w-[300px] w-screen-p-4 md:w-full md:sticky top-[10px] self-start">
      <h2 className="text-3xl font-bold mb-4 md:mb-8"> Categories </h2>
      <ul className="overflow-x-auto flex md:list-item w-full text-sm hide-scroll text-center md:text-left">
        <li className="py-4">
          <Link className="min-w-[120px] px-4 flex md:flex-row flex-col gap-4 hover:underline" href="/"><span>⚡</span> New</Link>
        </li>
        <li className="py-4">
          <Link className="min-w-[100px] px-4 flex md:flex-row flex-col gap-4 hover:underline" href="/"><span>👚</span> Clothings</Link>
        </li>
        <li className="py-4">
          <Link className="min-w-[100px] px-4 flex md:flex-row flex-col gap-4 hover:underline" href="/"><span>👠</span> Shoes</Link>
        </li>
        <li className="py-4">
          <Link className="min-w-[100px] px-4 flex md:flex-row flex-col gap-4 hover:underline" href="/"><span>⌚</span> Watches</Link>
        </li>
        <li className="py-4">
          <Link className="min-w-[100px] px-4 flex md:flex-row flex-col gap-4 hover:underline" href="/"><span>👜</span> Accessories</Link>
        </li>
        <li className="py-4">
          <Link className="min-w-[100px] px-4 flex md:flex-row flex-col gap-4 hover:underline" href="/"><span>💾</span> Electronic Devices</Link>
        </li>
      </ul>
    </div>
  );
}

export default Category;
