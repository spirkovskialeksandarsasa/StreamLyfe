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

  export interface ArtistListProps {
    artists: Artist[];
  }
  