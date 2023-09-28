
import { Artist } from "../../../types/Artist.types";
export interface Track {
  name: string;
  image: string;
  album: Album;
  id:string;
  artists: Artist[];
  duration_ms:number;
}

export interface Album {
  images: Image[];
}

export interface Image {
  url: string;

}


export interface TrackListProps {
  tracks: Track[];
  useSmallCard: boolean;
  positionNumber: number;
}


