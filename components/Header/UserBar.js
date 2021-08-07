import { Fragment } from 'react'
import { GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid"
import { Menu, Transition } from '@headlessui/react'

export default function UserBar({ textColor, backgroundFill }) {
  return (
    <div className="flex items-center justify-end space-x-1 ">

      <div className={`translate-x-2 hidden md:inline cursor-pointer items-center p-3 rounded-full transition transform duration-200 text-sm hover:bg-white hover:bg-opacity-10 ${backgroundFill}  ${textColor}`}>
        Become a host
      </div>

      <div className={`cursor-pointer items-center p-3 rounded-full transition transform duration-200 hover:bg-opacity-10 ${backgroundFill} ${textColor}`}>
        <GlobeAltIcon className="h-6" />
      </div>

      <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center space-x-2 bg-white text-gray-500 border border-gray-100 p-1 rounded-full transition transform duration-200 hover:shadow-md">
          <MenuIcon className="h-5 ml-2 cursor-pointer" />
          <UserCircleIcon className="h-8 cursor-pointer" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-60 mt-3 py-2 origin-top-right bg-white text-gray-800 rounded-xl drop-shadow-lg text-sm focus:outline-none">
          <Menu.Item>
            <a href="#" className="">
              <div className="p-3 hover:bg-gray-100">
                Sign up
              </div>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#" className="">
              <div className="p-3 hover:bg-gray-100">
                Log in
              </div>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#" className="">
              <div className="p-3 hover:bg-gray-100">
                Host your home
              </div>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#" className="">
              <div className="p-3 hover:bg-gray-100">
                Host an experience
              </div>
            </a>
          </Menu.Item>
          <Menu.Item>
            <a href="#" className="">
              <div className="p-3 hover:bg-gray-100">
              Help
              </div>
            </a>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  )
}


