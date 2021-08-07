import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid"

function UserBar() {
  return (
    <div className="flex items-center justify-end space-x-1 text-gray-500">

      <div className="hidden md:inline cursor-pointer items-center p-3 rounded-full transition transform duration-200 text-sm text-black hover:bg-gray-50 ">
        Become a host
      </div>

      <div className="cursor-pointer items-center p-3 rounded-full transition transform duration-200 hover:bg-gray-50 ">
        <GlobeAltIcon className="h-6" />
      </div>

      <div className="flex items-center space-x-2 border-2 p-1 rounded-full transition transform duration-200 hover:shadow-md">
        <MenuIcon className="h-5 ml-2 cursor-pointer" />
        <UserCircleIcon className="h-8 cursor-pointer" />
      </div>
    </div>
  )
}

export default UserBar
