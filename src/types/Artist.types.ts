export interface ArtistProps {
  id: string;
  name: string;
  images: Image[];
  genres: string[];
  popularity: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
}

export interface Artist {
  artist: ArtistProps;
  showDetails?: boolean;
  isTopArtist?: boolean;
}

export enum PopularityEnum {
  PopularityLow = "Emerging",
  PopularityMedium = "Up-and-Coming",
  PopularityHigh = "Mainstream",
  PopularityVeryHigh = "Superstar",
}
