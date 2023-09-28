import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-zinc-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="/streamlyfe-logo.png"
                className="h-8 mr-3"
                alt="Streamlyfe Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Based on 
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="https://open.spotify.com/" className="hover:underline">
                    Spotify
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://developer.spotify.com/documentation/web-api"
                    className="hover:underline"
                  >
                    API Docs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to="https://github.com/spirkovskialeksandarsasa"
                    className="hover:underline "
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/aleksandarsasaspirkovski10/"
                    className="hover:underline"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link to='/' className="hover:underline">
              Streamlyfe™
            </Link>
            . Created by Aleksandar Sasa Spirkovski
            <p className="text-gray-400 text-left">
            This app utilizes Spotify's metadata to enhance your music experience. By using this app, you agree to the collection and use of Spotify's data solely for purposes like generating statistics and showcasing your top artists.
            </p>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
