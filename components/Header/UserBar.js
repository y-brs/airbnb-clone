import { GlobeAltIcon, MenuIcon, UserCircleIcon, UserIcon } from "@heroicons/react/solid"

function UserBar() {
  return (
    <div className="flex items-center justify-end space-x-4 text-gray-500">
      <p className="hidden md:inline cursor-pointer">Become a host</p>
      <GlobeAltIcon className="h-6" />

      <div className="flex space-x-2 border-2 p-2 rounded-full">
        <MenuIcon className="h-6" />
        <UserCircleIcon className="h-6" />
      </div>
    </div>
  )
}

export default UserBar
