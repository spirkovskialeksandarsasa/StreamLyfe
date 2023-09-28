import { Link } from "react-router-dom";
import LoginButton from "../ui/LoginButton/LoginButton";
import Logo from "../ui/Navbar/Logo/Logo";

const SCOPES = import.meta.env.VITE_REACT_APP_SCOPES as string;

function HomeUnauthorized() {
  const CLIENT_ID = import.meta.env.VITE_REACT_APP_CLIENT_ID as string;
  const REDIRECT_URI = "http://localhost:5173/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div className="h-screen flex items-center justify-center bg-[url('/background.jpg')] bg-cover">
      <div className="flex flex-wrap justify-center gap-4">
        <div
          className="flex absolute justify-center top-0 mt-12 sm:ml-8  sm:visible sm:flex sm:absolute sm:top-0 sm:left-1/4 sm:mt-8
        md:ml-8 md:visible md:flex md:absolute md:top-0 md:left-1/4 md:mt-16
        lg:ml-0 lg:visible lg:flex lg:absolute lg:mt-24 lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 
        transition-transform duration-300 hover:scale-110 "
        >
          <Logo />
        </div>
        <div
          className="flex select-none text-white 
        text-2xl md:text-3xl 
        lg:text-4xl 
        2xl:text-5xl 
        font-bold transition-transform duration-300 hover:scale-110
        animate-fade-up animate-once animate-alternate
        "
        >
          EXPLORE MUSIC TODAY
        </div>
        <div
          className="select-none flex absolute items-center justify-center mt-20
        2xl:mt-32"
        >
          <Link
            to={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(
              SCOPES
            )}`}
          >
            <LoginButton />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeUnauthorized;
