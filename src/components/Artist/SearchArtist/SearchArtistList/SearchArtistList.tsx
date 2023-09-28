import { ArtistListProps } from "../../../../types/Artist.types";
import SearchArtistCard from "../SearchArtistCard/SearchArtistCard";

function SearchArtistList({ artists }: ArtistListProps) {
  return (
    <div
      className='flex flex-col w-full h-2/5' 
    >
      {artists.map((artist) => (
        <SearchArtistCard
          key={artist?.id}
          artist={artist}
          showDetails={false}
        />
      ))}
    </div>
  );
}

export default SearchArtistList;
