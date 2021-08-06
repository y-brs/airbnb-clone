import { SearchIcon } from "@heroicons/react/solid"

function SearchBar() {
  return (
    <div className="flex items-center rounded-full py-2 md:shadow-sm md:border-2">
      <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search" />
      <SearchIcon className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mxa-auto md:inline-flex md:mx-2" />
    </div>
  )
}

export default SearchBar
