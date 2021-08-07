import Logo from "./Logo"
import SearchBar from "./SearchBar"
import UserBar from "./UserBar"

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white p-3.5 px-10 shadow-md lg:px-20">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-3">
        <Logo />
        <SearchBar />
        <UserBar />
      </div>
    </header>

  )
}

export default Header
