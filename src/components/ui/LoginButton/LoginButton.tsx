
function LoginButton() {

  return (
    <button
      className="bg-transparent  hover:bg-green-600 text-white-700 font-semibold py-2 px-4 border border-white-500  2xl:w-96 hover:border-transparent transition-transform duration-300 hover:scale-110"
    >
      <img
        src="spotify-logo.png "
        className="h-6 bg-transparent inline mr-2 2xl:h-9 2xl:mb-1"
      />
      <p className="inline mr-1 2xl:text-2xl">SIGN IN WITH SPOTIFY</p>
    </button>
  );
}

export default LoginButton;
