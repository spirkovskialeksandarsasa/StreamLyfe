import TopTracks from "./TopTracksSection/TopTracks";
import ArtistSection from "./ArtistSection/ArtistSection";
import TopArtistCards from "../Artist/TopArtistCard/TopArtistCards";
import FollowedArtistsCards from "../Artist/FollowedArtistCard/FollowedArtistsCards";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

function HomeAuthorized() {
  const isSmallScreen = useMediaQuery("(max-width:1023px)");
  return (
    <div className="flex flex-col h-fit lg:flex-row top-0 animate-fade animate-duration-[2000ms] animate-delay-300" >
      {!isSmallScreen && <TopTracks />}
      <div className="lg:flex-col relative lg:m-12 lg:h-4/5 lg:w-4/5 md:w-5/5 md:h-5/5 items-center justify-center ml-32 sm:ml-52">
        <ArtistSection
          content={<TopArtistCards />}
          linkIns="/topartists"
          title="Your favorite artists"
          showLink={true}
        />
        <div className="mt-12 md:mt-8">
          <ArtistSection
            content={<FollowedArtistsCards />}
            linkIns="/following"
            title="Following"
            showLink={true}
          />
        </div>
      </div>
      {isSmallScreen && (
  <>
    <div className="flex justify-center items-center mt-10">
      <TopTracks />
    </div>
  </>
)}
    </div>
  );
}

export default HomeAuthorized;
