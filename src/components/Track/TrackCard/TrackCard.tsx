import { TrackCardProps } from "./TrackCardProps";

function TrackCard({ track, positionNumber }: TrackCardProps) {
  return (
    <div className="flex items-center justify-center w-full p-2">
      <div className="flex items-center w-11/12 bg-stone-700 border-stone-500 border-solid border-2 overflow-hidden shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
        <div className="flex-none w-1/12 p-2 text-center text-gray-600">
        <div className="text-sm text-stone-300">{positionNumber}</div>
        </div>
        <img className="w-auto h-12 object-cover" src={track?.album?.images?.[0]?.url} alt={track?.name} />
        <div className="flex-grow p-2">
          <h3 className="text-sm font-bold mb-1 text-stone-100">{track?.name}</h3>
          <div className="text-white text-xs">
           {track?.artists[0]?.name}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackCard;
