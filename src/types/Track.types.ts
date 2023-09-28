
import { Artist } from "./Artist.types";
export interface Track {
  name: string;
  image: string;
  album: Album;
  id:string;
  artists: Artist[];
  duration: number;
}

export interface Album {
  images: Image[];
}

export interface Image {
  url: string;
  width?: number;
  height?: number;
}

export interface TrackProps {
  track: Track;
  positionNumber: number;
}

export interface TrackListProps {
  tracks: Track[];
  useSmallCard: boolean;
  positionNumber: number;
}


