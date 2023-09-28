import { fetchFollowedArtists } from "../../../spotifyApi";
import { useEffect, useState } from "react";
import { Artist } from "../../../types/Artist.types";
import ArtistList from "../ArtistList/ArtistList";
import ErrorMessage from "../../generic/ErrorMessage/ErrorMessage";
import { useErrorHandling } from "../../generic/ErrorMessage/ErrorLogic";

function FollowedArtistsCards() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const { error, handleError} = useErrorHandling();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const followedArtists = await fetchFollowedArtists();
        setArtists(followedArtists);
      } catch (error) {
        console.log("ERROR FETCHING FOLLOWED ARTISTS");
        handleError();
      }
    };
    if (token) {
      fetchData().catch((error) => {
        console.log("ERROR FETCHING FOLLOWED ARTISTS", error);
      });
    }
  }, []);

  return (
    <>
      {error && ( 
      <ErrorMessage text="There was a problem connecting to Spotify. Please refresh the page or try again later."/>) }
      <div className="grid w-full h-2/5 grid-cols-4 gap-4">
        <ArtistList artists={artists} />
      </div>
      {artists.length === 0 && (
        <ErrorMessage text="You currently aren't following any artists." />
      )} 
      
    </>
  );
}
export default FollowedArtistsCards;
