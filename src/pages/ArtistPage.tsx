import ArtistProfile from "../components/Artist/ArtistProfile/ArtistProfile";
import { useEffect, useState } from "react";
import { fetchArtistById, fetchTracksByArtist } from "../spotifyApi";
import { useParams } from "react-router-dom";
import { Artist } from "../types/Artist.types";
import ArtistSection from "../components/HomeAuthorized/ArtistSection/ArtistSection";
import RelatedArtistCards from "../components/Artist/RelatedArtist/RelatedArtistCards";
import BackToTopButton from "../components/ui/BackToTopButton/BackToTopButton";
import AlbumSection from "../components/Album/AlbumSection/AlbumSection";
import { Track } from "../types/Track.types";
import TrackFromArtistList from "../components/Track/TrackFromArtist/TrackFromArtist";

function ArtistPage() {
  const { id } = useParams();
  const [artist, setArtist] = useState<Artist>();
  const [tracks, setTracks] = useState<Track>();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
  
    const fetchData = async () => {
      try {
        if (id) {
          const artistById = await fetchArtistById(id);
          const tracksOfArtist = await fetchTracksByArtist(id);
          setArtist(artistById);
          setTracks(tracksOfArtist);
        }
      } catch (error) {
        console.log("ERROR FETCHING ARTIST BY ID", error);
      }
    };
  

    if (token) {
      fetchData().catch((error) => {
        console.log("ERROR FETCHING ARTIST BY ID", error);
      });
     
    }
  }, [id]);
 

  return (
    <>
      <div className="h-screen flex flex-col lg:flex-row">
        <div className="lg:h-2/3 h-1/3 flex flex-col relative justify-center lg:justify-top mt-36 lg:m-12 mx-auto w-2/4  animate-fade-left animate-once animate-delay-[500ms]">
          
         {artist && <ArtistProfile artist={artist} /> }
        </div>
        <div className="h-2/3 flex w-full mx-auto mt-36 lg:mt-12 relative justify-center lg:w-2/4 m-12  animate-fade-left animate-delay-[1000ms]">
          <AlbumSection />
        </div>
        
      </div>
      <div className="mt-64 lg:mt-0">
      <div className="w-5/5 lg:w-3/5 mx-auto mb-8 overflow-y-hidden max-h-[328px]">
      <TrackFromArtistList tracks={tracks}/>
      </div>
      </div>
      <h1 className="text-center text-3xl  flex justify-center lg:mt-0">
        Similar Artists
      </h1>
     
      <div className=" flex mx-auto justify-center h-fit w-full mb-10">
        <ArtistSection
          content={<RelatedArtistCards />}
          linkIns=""
          title=""
          showLink={false}
        />

       
      </div>
      
      <BackToTopButton />
    </>
  );
}

export default ArtistPage;
