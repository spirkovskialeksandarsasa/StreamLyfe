export interface AlbumProps {
    name: string;
    album_type: string;
    release_date: string;
    id: string;
    images: {
      url: string;
    }[];
  }
  
  export interface Album {
    album: AlbumProps;
  }
export interface AlbumListProps {
    albums: Album[];
  }
  