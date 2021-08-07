import { SearchIcon } from "@heroicons/react/solid"

function SearchBar() {
  return (
    <div className="flex items-center rounded-full py-2 border border-gray-100 transition transform duration-200 shadow-sm hover:shadow-md bg-white">
      <input className="flex-grow ml-1 pl-5 outline-none text-sm text-black placeholder-gray-500" type="text" placeholder="Start your search" />
      <SearchIcon className="hidden h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer mxa-auto transition transform duration-200 md:inline-flex md:mx-2 hover:bg-red-600" />
    </div>
  )
}

export default SearchBar
