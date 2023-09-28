import AlbumCard from "../AlbumCard/AlbumCard";
import { AlbumListProps } from "../../../types/Album.types";

function AlbumList({ albums }: AlbumListProps) {

  return (
    <div className="grid w-full h-2/5 gap-x-8 grid-cols-3">
      {albums.map((album) => (
        <AlbumCard key={album?.id} album={album} />
      ))}
    </div>
  );
}

export default AlbumList;
