import Logo from "./Logo"
import SearchBar from "./SearchBar"
import UserBar from "./UserBar"
import Banner from "./Banner"
import { useState, useEffect} from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function() {
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  return (
    <>
      <header className={scrolled ? 'fixed w-full top-0 z-50 bg-white shadow-md transition transform duration-200' : 'fixed w-full top-0 z-50 transition transform duration-200'}>
        <div className="max-w-screen-2xl mx-auto grid grid-cols-3 p-3.5 px-10 lg:px-20">
          <Logo backgroundFill={scrolled ? '#FF385C' : '#fff'} />
          <SearchBar />
          <UserBar
            textColor={scrolled ? 'text-black' : 'text-white'}
            backgroundFill={scrolled ? 'hover:bg-gray-400' : 'hover:bg-white'}
          />
        </div>
      </header>

      <Banner />
    </>
  )
}
