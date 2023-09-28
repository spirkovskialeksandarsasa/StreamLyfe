import { useEffect, useState } from "react";
import { Artist } from "../../../types/Artist.types.ts";
import { fetchAllTopArtists } from "../../../spotifyApi.ts";
import ArtistListAll from "../ArtistListAll/ArtistListAll.tsx";
import ErrorMessage from "../../generic/ErrorMessage/ErrorMessage.tsx";
import { useErrorHandling } from "../../generic/ErrorMessage/ErrorLogic.ts";

function AllTopArtists() {
  const [artists, setArtists] = useState<Artist[]>([]);
const {error, handleError} = useErrorHandling();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    const fetchData = async () => {
      try {
        const topArtists = await fetchAllTopArtists();
        setArtists(topArtists);
      } catch (error) {
        console.log("ERROR FETCHING TOP ARTISTS");
        handleError();
      }
    };

    
    if (token) {
      fetchData().catch((error) => {
        console.log("ERROR FETCHING ALL TOP ARTISTS", error);
      });
    }
  }, []);


  return (
    <>
    <div className="p-2 mb-8">
        <ArtistListAll artists={artists}/>
        {error && ( 
        <ErrorMessage text="There was a problem connecting to Spotify. Please refresh the page or try again later."/>) }
    </div>
      </>
     
  );
}

export default AllTopArtists;
