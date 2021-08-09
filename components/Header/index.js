import Logo from "./Logo"
import UserBar from "./UserBar"
import Banner from "./Banner"
import { useState, useEffect} from "react"
import { SearchIcon, UsersIcon } from "@heroicons/react/solid"

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range"

export default function Header({ showBanner }) {
  const [scrolled, setScrolled] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOGuests, setNoOGuests] = useState(1)

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const resetInput = () => {
    setSearchInput("");
  }

  useEffect(() => {
    window.onscroll = function() {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  const handleSelect = (ranges) => {
    console.log(ranges);

    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <>
      <header className={scrolled || searchInput || !showBanner ? 'fixed w-full top-0 z-50 bg-white shadow-md transition transform duration-200' : 'fixed w-full top-0 z-50 transition transform duration-200'}>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-3 p-3.5 px-10 lg:px-20">
          <Logo backgroundFill={scrolled || searchInput || !showBanner ? '#FF385C' : '#fff'} />

          <div className="flex items-center rounded-full py-2 border border-gray-300 transition transform duration-200 drop-shadow hover:shadow-md bg-white">
            <input
              value={searchInput}
              onChange={(e) => {setSearchInput(e.target.value)}}
              className="flex-grow ml-1 pl-5 outline-none text-sm text-black placeholder-black font-medium"
              type="text"
              placeholder="Start your search"
            />
            <SearchIcon className="hidden h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer mxa-auto transition transform duration-200 md:inline-flex md:mx-2 hover:bg-red-600" />
          </div>

          <UserBar
            textColor={scrolled || searchInput || !showBanner ? 'text-black' : 'text-white'}
            backgroundFill={scrolled || searchInput || !showBanner ? 'hover:bg-gray-400' : 'hover:bg-white'}
          />
        </div>

        {searchInput &&
          <div className="flex flex-col">
            <DateRangePicker
              ranges={[selectionRange]}
              onChange={handleSelect}
              minDate={new Date()}
              rangeColors={["#fd5b61"]}
            />
            <div className="flex items-center border-b mb-4">
              <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
              <UsersIcon className="h-5" />
              <input
                value={noOGuests}
                onChange={e => setNoOGuests(e.target.value)}
                type="number"
                min={1}
                className="w-12 pl-2 text-lg outline-none text-red-400"
              />
            </div>
            <div className="flex mb-5">
              <button
                onClick={resetInput}
                className="flex-grow text-gray-500 cursor-pointer"
              >
                Cancel
              </button>
              <button
                className="flex-grow text-red-500 cursor-pointer"
              >
                Search
              </button>
            </div>
          </div>
        }
      </header>

      {showBanner && <Banner />}
    </>
  )
}
