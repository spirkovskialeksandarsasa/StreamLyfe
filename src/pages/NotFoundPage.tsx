import { Link } from "react-router-dom"
function NotFoundPage() {
  return (
    <>
  <div className="w-full h-screen relative">
    <img className="w-full h-full z-0" src="https://www.wallpaperflare.com/static/812/523/719/piano-musical-instrument-broken-glass-black-wallpaper.jpg" alt="Background" />
    <h1 className="text-7xl text-white absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Oops, you're lost!</h1>
    <Link to='/'><button className="text-4xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Back to home</button>
</Link>
  </div>
</>

  )
}

export default NotFoundPage