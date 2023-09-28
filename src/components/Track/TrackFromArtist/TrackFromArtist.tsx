import TrackFromArtistCard from "../TrackFromArtistCard/TrackFromArtistCard";
import { TrackFromArtistListProps } from "./TrackFromArtistListProps";

function TrackFromArtistList({ tracks}: TrackFromArtistListProps) {
  return (
    <div>
      {(
        tracks?.map((track, index) => (
          <TrackFromArtistCard
            key={track?.id}
            track={track}
            positionNumber={index +1}
          />
        ))
      )}
      
    </div>
  );
}

export default TrackFromArtistList;
