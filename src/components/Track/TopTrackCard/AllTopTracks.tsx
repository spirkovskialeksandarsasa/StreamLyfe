
import { useEffect, useState } from "react";
import { Track } from "../../../types/Track.types.ts";
import { fetchAllTopTracks } from "../../../spotifyApi.ts";
import TrackList from "../TrackList/TrackList.tsx";
import ErrorMessage from "../../generic/ErrorMessage/ErrorMessage.tsx";
import { useErrorHandling } from "../../generic/ErrorMessage/ErrorLogic.ts";

function AllTopTracks() {
  const [tracks, setTracks] = useState<Track[]>([]);
const {error, handleError} = useErrorHandling();
  useEffect(() => {
    const token = window.localStorage.getItem("token");

    const fetchData = async () => {
      try {
        const topTracks = await fetchAllTopTracks();
        setTracks(topTracks);
      } catch (error) {
        console.log("ERROR FETCHING ALL TOP TRACKS");
        handleError();
      }
    };
    
    if (token) {
      fetchData().catch((error) => {
        console.log("ERROR FETCHING ALL TOP TRACKS", error);
      });
    }
  }, []);

  return (
    <>
      <div className="flex flex-span relative justify-center">
        <div className="relative overflow-y-scroll w-3/5 max-h-[800px] md:max-h-[500px] mb-20">
        <TrackList tracks={tracks} useSmallCard={false} positionNumber={0}/>
        </div>
      </div>
      {error && ( 
        <ErrorMessage text="There was a problem connecting to Spotify. Please refresh the page or try again later."/>) }
    </>
  );
}

export default AllTopTracks;
