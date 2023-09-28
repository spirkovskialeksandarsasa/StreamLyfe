import Logo from "./Logo/Logo";
import Search from "./Search/Search";
import UserInfo from "./UserInfo/UserInfo";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logoutProps } from "./Navbar.types";

function Navbar({ onLogout }: logoutProps) {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const [visibility, setVisibility] = useState(false);
  function toggleVisibility() {
    setVisibility((prevVisibility) => !prevVisibility);
  }
  return (
    <>
      <div className="flex items-center justify-between p-2">
        <span className="w-30">
          <Link to="/">
            <Logo />
          </Link>
        </span>
        
        <span className="flex justify-center">
          <Search search={search} onSearch={handleSearchChange} />
        </span>
        <span
          className="flex items-center hover:cursor-pointer ml-2 flex-col"
          onClick={toggleVisibility}
        >
          <UserInfo />
          {visibility && (
            <div className="flex absolute mt-12">
            <button
              className="animate-fade-up w-16 flex right-1/5 h-6 bg-stone-600 hover:bg-gray-600 text-white text-left px-1 rounded"
              onClick={onLogout}
            >
              Logout
            </button>
            </div>
          )}
        </span>
      </div>
    </>
  );
}

export default Navbar;
