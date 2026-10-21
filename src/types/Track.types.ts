import { Image } from "./Artist.types";

export interface TrackArtist {
  id: string;
  name: string;
}

export interface Album {
  images: Image[];
}

export interface Track {
  id: string;
  name: string;
  uri: string;
  duration_ms: number;
  album: Album;
  artists: TrackArtist[];
}

export interface TrackProps {
  track: Track;
  positionNumber: number;
}

export interface TrackListProps {
  tracks: Track[];
  useSmallCard: boolean;
}
