export interface Artist {
  id: string;
  name: string;
  images: Image[];
  genres: string[];
  popularity: number;
}

export interface Image {
  url: string;
}

export interface ArtistCardProps {
  artist: Artist;
  showDetails?: boolean;
}

export enum PopularityEnum {
  PopularityLow = "Emerging",
  PopularityMedium = "Up-and-Coming",
  PopularityHigh = "Mainstream",
  PopularityVeryHigh = "Superstar",
}
