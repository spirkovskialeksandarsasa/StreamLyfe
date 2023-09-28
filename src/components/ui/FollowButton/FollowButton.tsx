import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  checkFollowage,
  followArtist,
  unfollowArtist,
} from "../../../spotifyApi";

function FollowButton() {
  const { id } = useParams();
  const [isFollowing, setFollowing] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const fetchData = async () => {
      try {
        if(id){
        const followageResponse = await checkFollowage(id);
        const isFollowing = followageResponse[0];
        setFollowing(isFollowing);
        }
      } catch (error) {
        console.log("ERROR FETCHING ALL TOP TRACKS");
      }
    };
  
    if (token) {
      void fetchData();
    }
  }, [id]);


  async function toggleFollowArtist(artistId: string, isFollowing: boolean) {
    try {
      if (isFollowing) {
        await unfollowArtist(artistId);
        return false;
      } else {
        await followArtist(artistId);
        return true;
      }
    } catch (error) {
      console.error("Error toggling follow status", error);
      throw error;
    }
  }
 const handleFollowToggle = async () => {
    if(id){
    const newFollowStatus = await toggleFollowArtist(id, isFollowing);
    setFollowing(newFollowStatus);
    }
  };
  console.log(isFollowing);
  return (
    <button
      type="button"
      onClick={() => void handleFollowToggle()}
      className="text-green-300 border border-green-300 focus:ring-1 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2
       shadow-md transform transition-transform hover:scale-105 hover:shadow-lg
      w-24"
    >
      {isFollowing ? <h1>Unfollow</h1> : <h1>Follow</h1>}
    </button>
  );
}

export default FollowButton;
