
import AllTopTracks from '../components/Track/TopTrackCard/AllTopTracks.tsx'

function TopTracksPage() {
    const currMonth = new Date().toLocaleString([], {
        month: 'long',
      });
    return(
      <div className="animate-fade-up animate-once animate-delay-200">
        <div className="flex justify-center items-center">
        <h1 className="transform transition-colors text-3xl mt-12 text-stone-300 text-bold mb-12">
              Your most streamed tracks for &nbsp; <p className="text-green-300 animate-pulse">{ currMonth}</p>
          </h1>
          </div>
    <AllTopTracks/>
   </div>
   
      );
      
      
  }

export default TopTracksPage