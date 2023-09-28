import TopTrackCards from "../../Track/TopTrackCard/TopTrackCards";
import { Link } from "react-router-dom";

function TopTracks() {
  return (
    <div className="flex flex-col relative m-10 h-2/5 w-2/5  justify-between">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-white font-bold xl:text-xl 2xl:text-4xl 2xl:ml-12 p-4">Your favorite tracks</h1>
        <Link to="toptracks" className="flex items-end text-sm text-gray-300 xl:text-md 2xl:text-xl">
          Show all
        </Link>
      </div>
      <TopTrackCards />
    </div>
  );
}

export default TopTracks;
