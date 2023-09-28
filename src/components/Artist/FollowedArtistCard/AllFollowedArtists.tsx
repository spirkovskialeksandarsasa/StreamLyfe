import { fetchAllFollowedArtists } from "../../../spotifyApi";
import { useEffect, useState } from "react";
import ArtistListAll from "../ArtistListAll/ArtistListAll";
import ErrorMessage from "../../generic/ErrorMessage/ErrorMessage";
import { Artist } from "../../../types/Artist.types";
import { useErrorHandling } from "../../generic/ErrorMessage/ErrorLogic";

function AllFollowedArtistsCards() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const { error, handleError } = useErrorHandling();
  
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const fetchData = async () => {
    try {
      const followedArtists = await fetchAllFollowedArtists();
      setArtists(followedArtists);
    } catch (error) {
      console.log("ERROR FETCHING ALL FOLLOWED ARTISTS");
      handleError();
    }
  };

    if (token) {
      fetchData().catch((error) => {
        console.log("ERROR FETCHING ALL FOLLOWED ARTISTS", error);
      });
    }
  }, []);


  return (
    <>
      {error && (
        <ErrorMessage text="There was a problem connecting to Spotify. Please refresh the page or try again later." />
      )}
      <div className="p-2 mb-8">
        <ArtistListAll artists={artists} />
      </div>

      {artists.length === 0 && (
        <ErrorMessage text="You currently aren't following any artists." />
      )}
    </>
  );
}
export default AllFollowedArtistsCards;
