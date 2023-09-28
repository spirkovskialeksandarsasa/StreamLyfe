import { useEffect, useState } from "react";
import { fetchTopArtists } from "../../../spotifyApi.ts";
import ArtistList from "../ArtistList/ArtistList.tsx";
import { Artist } from "../../../types/Artist.types.ts";
import ErrorMessage from "../../generic/ErrorMessage/ErrorMessage.tsx";
import { useErrorHandling } from "../../generic/ErrorMessage/ErrorLogic.ts";

function TopArtistCards() {
  function tokenExpiry() {
    window.localStorage.removeItem("token");
  }
  const [artists, setArtists] = useState<Artist[]>([]);
const {error, handleError} = useErrorHandling();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    
    const fetchData = async () => {
      try {
        const topArtists = await fetchTopArtists();
        setArtists(topArtists);
      } catch (error) {
        console.log("ERROR FETCHING TOP ARTISTS");
        tokenExpiry();
        handleError();
      }
    };

    if (token) {
      fetchData().catch((error) => {
        console.log("ERROR FETCHING TOP ARTISTS", error);
      });
    }
  }, []);



  return (
    <>
      <div className="grid w-full h-2/5 grid-cols-4 gap-4 ">
        <ArtistList artists={artists} />
      </div>

      {error && (
        <ErrorMessage text="There was a problem connecting to Spotify. Please refresh the page or try again later." />
      )}
    </>
  );
}
export default TopArtistCards;
