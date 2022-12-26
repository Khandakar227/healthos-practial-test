import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

function Search({text}:{text?:string}) {
  return (
    <div className="flex items-center gap-2 flex-auto">
        <AiOutlineSearch className="scale-150" />
        <input
          className="flex-auto p-3 outline-none focus:border-b w-full"
          name="search"
          placeholder={text || "Search for products, brands or more"}
        />
      </div>
  )
}

export default Search