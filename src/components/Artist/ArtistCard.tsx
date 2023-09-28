import { ArtistCardProps, PopularityEnum } from "./ArtistCardProps";
import { Link } from "react-router-dom";

function ArtistCard({ artist, showDetails }: ArtistCardProps) {
  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const popularityFinal = (popularity: number): PopularityEnum => {
    if (popularity >= 0 && popularity <= 20) {
      return PopularityEnum.PopularityLow;
    } else if (popularity >= 21 && popularity <= 50) {
      return PopularityEnum.PopularityMedium;
    } else if (popularity >= 51 && popularity <= 90) {
      return PopularityEnum.PopularityHigh;
    } else if (popularity >= 91 && popularity <= 100) {
      return PopularityEnum.PopularityVeryHigh;
    } else {
      return PopularityEnum.PopularityLow;
    }
  };
  return (
    <Link to={`/artist/${artist.id}`} onClick={backToTop}>
      <div className="flex flex-col items-center">
        <div className="2xl:w-40 2xl:h-52 w-36 h-40 lg:w-30 lg:h-40 m-4 bg-stone-700 border-stone-500 border-solid border-2 overflow-hidden shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
          <img
            className="w-full h-24 2xl:h-32 object-cover"
            src={
              artist?.images[2]?.url ||
              "https://i.scdn.co/image/ab6761610000e5eba1b1a48354e9a91fef58f651"
            }
            alt={artist?.name}
          />
          <div className="p-4 ">
            <h3 className="text-sm font-bold mb-2 ">{artist?.name}</h3>
          </div>
        </div>
        {showDetails && (
          <div className="w-32 h-6">
            <p className="text-white text-center">
              {artist?.genres[0] ? artist.genres[0] : "unknown genre"}
            </p>
            <p className="text-green-300 italic text-xs text-center">
              {popularityFinal(artist.popularity)}
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}

export default ArtistCard;
