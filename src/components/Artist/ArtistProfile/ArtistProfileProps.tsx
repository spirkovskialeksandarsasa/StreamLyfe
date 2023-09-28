export interface Artist {
    id: string;
    name: string;
    images: Image[];
    genres: string[];
    popularity: number;
    followers: {
      href: string;
      total: number;
    };
  }
  
  export interface Image {
    url: string;

  }
  
  export interface ArtistProfileProps {
    artist: Artist;

  }

  