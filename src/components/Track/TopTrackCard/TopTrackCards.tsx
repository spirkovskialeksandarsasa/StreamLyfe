

import { useState } from "react";
import { useEffect } from "react";
import { fetchTopTracks } from "../../../spotifyApi";
import { Track } from "../../../types/Track.types";
import  TrackList from "../TrackList/TrackList";
import ErrorMessage from "../../generic/ErrorMessage/ErrorMessage";
import { useErrorHandling } from "../../generic/ErrorMessage/ErrorLogic";

function TopTrackCards() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const {error, handleError} = useErrorHandling();
  console.log(tracks)
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const topTracks = await fetchTopTracks();
        setTracks(topTracks);
      } catch (error) {
        console.log("ERROR FETCHING TOP TRACKS");
        handleError();
      }
    };
  
    if (token) {
      fetchData().catch((error) => {
        console.log("ERROR FETCHING TOP TRACKS", error);
      });
    }
  }, []);


  return (
    <div>
      <TrackList tracks={tracks} useSmallCard={true} positionNumber={0}/>
      {error && ( 
        <ErrorMessage text="There was a problem connecting to Spotify. Please refresh the page or try again later."/>) }
    </div>
    
  );
}

export default TopTrackCards;
