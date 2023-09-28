import { TrackListProps } from "../../../types/Track.types";
import TrackCard from "../TrackCard/TrackCard";
import TrackSmallCard from "../TrackSmallCard/TrackSmallCard";

function TrackList({ tracks, useSmallCard}: TrackListProps) {
  return (
    <div>
      {useSmallCard ? (
        tracks?.map((track, index) => (
          <TrackSmallCard
            key={track?.id}
            track={track}
            positionNumber={index +1}
          />
        ))
      ) : (
        tracks?.map((track, index) => (
          <TrackCard
            key={track?.id}
            track={track}
            positionNumber={index + 1}
          />
        ))
      )}
      
    </div>
  );
}

export default TrackList;
