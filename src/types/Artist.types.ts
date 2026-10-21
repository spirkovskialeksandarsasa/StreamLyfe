export interface Image {
  url: string;
  width?: number | null;
  height?: number | null;
}

export interface Artist {
  id: string;
  name: string;
  uri: string;
  images: Image[];
  genres?: string[];
  popularity?: number;
  followers?: {
    total: number;
  };
  external_urls?: {
    spotify: string;
  };
}

export interface ArtistProps {
  artist: Artist;
}

export interface ArtistListProps {
  artists: Artist[];
}

export enum PopularityEnum {
  PopularityLow = "Emerging",
  PopularityMedium = "Up-and-Coming",
  PopularityHigh = "Mainstream",
  PopularityVeryHigh = "Superstar",
}
