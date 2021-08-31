import Logo from "./Logo"
import UserBar from "./UserBar"
import Banner from "./Banner"
import { useState, useEffect} from "react"
import { SearchIcon, UsersIcon } from "@heroicons/react/solid"

import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range"
import { useRouter } from "next/dist/client/router"

export default function Header({ searchPage, showBanner, placeholder }) {
  const [scrolled, setScrolled] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)
  const [showResults, setShowResults] = useState(false)

  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const resetInput = () => {
    setSearchInput("");
    setShowResults(false);
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
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  const showHideDatePicker = () => setShowResults(true)

  const search = () => {
    const divWrapper = document.querySelector(".divWrapper")

    if (searchInput) {
      router.push({
        pathname: "/search",
        query: {
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          noOfGuests,
        }
      })

      divWrapper.classList.remove("bg-red-50", "border-red-500")
      setShowResults(false)
      resetInput()
    } else {
      divWrapper.classList.add("bg-red-50", "border-red-500")
    }
  }

  return (
    <>
      <header className={scrolled || searchInput || !showBanner || showResults ? 'fixed w-full top-0 z-50 bg-white shadow-md transition transform duration-200' : 'fixed w-full top-0 z-50 transition transform duration-200'}>
        <div className={`flex items-start justify-between ${searchPage ? 'p-3.5 px-6' : 'max-w-screen-2xl mx-auto p-3.5 px-10 lg:px-20'}`}>
          <Logo backgroundFill={scrolled || searchInput || !showBanner || showResults ? '#FF385C' : '#fff'} />

          <div className="flex-grow lg:flex-grow-0 lg:w-[40%]">
            <div className="divWrapper flex flex-grow items-center rounded-full py-2 border border-gray-300 transition transform duration-200 drop-shadow hover:shadow-md bg-white">
              <input
                value={searchInput}
                onClick={showHideDatePicker}
                onChange={(e) => {setSearchInput(e.target.value)}}
                className="flex-grow pl-5 outline-none text-sm text-black placeholder-black font-medium bg-transparent"
                type="text"
                placeholder={placeholder || "Start your search"}
              />

              <SearchIcon className="h-8 md:mx-2 bg-red-500 text-white rounded-full p-2 mr-2 transition transform duration-200" />
            </div>

            {(searchInput || showResults) ? (
              <>
                <div className="flex">
                  <div className="flex flex-col col-span-3 mx-auto mt-3">
                    <DateRangePicker
                      ranges={[selectionRange]}
                      onChange={handleSelect}
                      minDate={new Date()}
                      rangeColors={["#fd5961"]}


                      // editableDateInputs={true}
                      // onChange={item => setState([item.selection])}
                      // moveRangeOnFirstSelection={false}
                      // ranges={state}
                    />
                    <div className="flex items-center border-b">
                      <h2 className="text-xl flex-grow font-semibold">Number of Guests</h2>
                      <UsersIcon className="h-5" />
                      <input
                        className="w-12 pl-2 text-lg outline-none text-red-400"
                        value={noOfGuests}
                        onChange={e => setNoOfGuests(e.target.value)}
                        type="number"
                        min={1}
                      />
                    </div>
                    <div className="flex my-3 space-x-5">
                      <button
                        className="shadow-md flex-grow text-gray-500 cursor-pointer rounded-md p-2 hover:bg-red-400 hover:text-white"
                        onClick={resetInput}
                      >
                        Cancel
                      </button>
                      <button
                        className="shadow-md flex-grow text-red-500 cursor-pointer rounded-md p-2 hover:bg-red-400 hover:text-white"
                        onClick={search}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              null
            )}
          </div>

          <UserBar
            textColor={scrolled || searchInput || !showBanner || showResults ? 'text-black' : 'text-white'}
            backgroundFill={scrolled || searchInput || !showBanner || showResults ? 'hover:bg-gray-400' : 'hover:bg-white'}
          />
        </div>


      </header>

      {showBanner && <Banner />}
    </>
  )
}
