import AllFollowedArtistsCards from "../components/Artist/FollowedArtistCard/AllFollowedArtists";
import BackToTopButton from "../components/ui/BackToTopButton/BackToTopButton";

function FollowedArtistsPage() {
  return (
    <>
    <div className="animate-fade-up animate-once animate-delay-200">
      <h1 className="transform transition-colors mt-12 text-3xl text-stone-300 text-bold mb-12 flex justify-center items-center">
        Artists you follow
      </h1>

          <AllFollowedArtistsCards />
          

    </div>
    <BackToTopButton/>
    </>
  );
}

export default FollowedArtistsPage;
