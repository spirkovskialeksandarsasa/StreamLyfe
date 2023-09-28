import { useEffect, useState } from "react";
import { Album } from "../../../types/Album.types";
import { fetchDiscography } from "../../../spotifyApi";
import { useParams } from "react-router-dom";
import AlbumList from "../AlbumList/AlbumList";

function AlbumSection() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const { id } = useParams();
  console.log(albums);
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const fetchData = async () => {
      try {
        if(id){
        const discography = await fetchDiscography(id);
        setAlbums(discography);
        }
      } catch (error) {
        console.log("ERROR FETCHING ALBUMS");
      }
    };
    if (token) {
      void fetchData();
    }
  }, [id]);

  

  return (
    <div className="">
      <h1 className="text-3xl mx-auto mb-6 font-bold">Discography</h1>
      <AlbumList albums={albums} />
      {!albums.length && <h1 className="mx-auto text-3xl font-bold">This artist has no albums.</h1> }
    </div>
  );
}

export default AlbumSection;
