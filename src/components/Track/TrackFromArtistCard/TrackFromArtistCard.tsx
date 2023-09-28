import { TrackFromArtistCardProps } from "./TrackFromArtistCardProps";

function TrackFromArtistCard({ track, positionNumber }: TrackFromArtistCardProps) {
    const date = new Date(track?.duration_ms);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds().toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center w-full p-2">
      <div className="flex items-center w-11/12 bg-transparent overflow-hidden shadow-md  hover:shadow-lg hover:bg-gray-700">
        <div className="flex-none w-1/12 p-2 text-center text-gray-600">
        <div className="text-sm text-stone-300">{positionNumber}</div>
        </div>
        <img className="w-auto h-12 object-cover" src={track?.album?.images?.[0]?.url} alt={track?.name} />
        <div className="flex-grow p-2">
          <h3 className="text-sm font-bold mb-1 text-stone-100">{track?.name}</h3>
        </div>
        <p className="text-sm mb-1 text-gray-400 mr-2">
        {minutes}:{seconds}
        </p>
      </div>
    </div>
  );
}

export default TrackFromArtistCard;
