import { TrackProps } from "../../../types/Track.types";

function TrackSmallCard({ track }: TrackProps) {
  return (
    <div className="flex items-center gap-x-4 p-2 mb-2 2xl:p-6 2xl:ml-10">
      <img
        className="flex-none xl:h-18 xl:w-18 h-14 w-14 rounded-md overflow-hidden"
        src={track?.album?.images[0]?.url} 
        alt={`${track?.name} Album Cover`}
      />
      <div className="flex flex-col">
        <p className="text-lg font-bold">{track?.name}</p>
        <div className="inline-block"> 
         <p className="text-lg"> {track.artists[0].name}</p>
        </div>
      </div>
    </div>
  );
}

export default TrackSmallCard;
