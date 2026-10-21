import { Image } from "./Artist.types";

export interface Album {
  id: string;
  name: string;
  album_type: string;
  release_date: string;
  images: Image[];
}

export interface AlbumCardProps {
  album: Album;
}

export interface AlbumListProps {
  albums: Album[];
}
