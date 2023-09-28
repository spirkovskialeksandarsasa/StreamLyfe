import { SearchArtistProps } from "./SearchArtistCardProps";
import { Link } from "react-router-dom";

function SearchArtistCard({ artist }: SearchArtistProps) {
  const backToTop = () => {
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <Link to={`/artist/${artist.id}`} onClick={backToTop}>
      <div className="flex items-center justify-center m-2">
        <div className="w-64 h-16 bg-stone-700 border-stone-500 border-solid border-2 overflow-hidden shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
          <div className="flex flex-row">
            <img
              className="w-14 h-16 object-center"
              src={artist?.images[2]?.url || 'https://i.scdn.co/image/ab6761610000e5eba1b1a48354e9a91fef58f651'}
              alt={artist?.name}
            />
            <div className="p-4 w-2/3">
              <h3 className="text-sm font-bold mb-2">{artist?.name}</h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SearchArtistCard;