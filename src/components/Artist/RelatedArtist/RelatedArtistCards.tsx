import { fetchRelatedArtists } from "../../../spotifyApi";
import { useEffect, useState } from "react";
import { Artist } from "../../../types/Artist.types";
import ArtistListAll from "../ArtistListAll/ArtistListAll";
import ErrorMessage from "../../generic/ErrorMessage/ErrorMessage";
import { useParams } from "react-router-dom";
import { useErrorHandling } from "../../generic/ErrorMessage/ErrorLogic";

function RelatedArtistCards() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const { id } = useParams();
  const { error, handleError } = useErrorHandling();
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const fetchData = async () => {
      try {
        if(id){
           const relatedArtists = await fetchRelatedArtists(id);
          setArtists(relatedArtists);
        }
       
      } catch (error) {
        console.log("ERROR FETCHING RELATED ARTISTS");
        handleError();
      }
    };

    if (token) {
      fetchData().catch((error) => {
        console.log("ERROR FETCHING RELATED ARTISTS", error);
      });
    }
  }, [id]);


  return (
    <>
      {error && (
        <ErrorMessage text="There was a problem connecting to Spotify. Please refresh the page or try again later." />
      )}
      <div>
        {!artists.length && (
          <h1 className="mx-auto text-3xl font-bold">
            This artist isn't known enough to have similar artists.
          </h1>
        )}
        <ArtistListAll artists={artists} />
      </div>
    </>
  );
}
export default RelatedArtistCards;
