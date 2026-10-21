import { AlbumCardProps } from "./AlbumCardProps";

function AlbumCard({ album }: AlbumCardProps) {
  const truncatedName = album?.name?.substring(0, 20) + "...";
  return (
    <div className="bg-transparent w-30 h-42 sm:w-40 sm:h-56 mb-4 shadow-lg text-center hover:bg-gray-700">
      <img
        className="w-fit h-fit p-4 shadow-md"
        src={album?.images?.[0]?.url}
        alt={`Album Cover - ${album?.name}`}
      />
      <h2 className="mt-3 text-sm font-semibold text-white text-left ml-2">
        {album?.name?.length > 20 ? truncatedName : album?.name}
      </h2>
      <p className="top-2/5 absolute text-sm text-gray-400 uppercase text-left ml-2 sm:block hidden">
        {album?.album_type} ◦ {album?.release_date}
      </p>
    </div>
  );
}

export default AlbumCard;
