import { ArtistProps } from "../../../types/Artist.types";
import FollowButton from "../../ui/FollowButton/FollowButton";

function ArtistProfile(artist : ArtistProps) {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex justify-end">
          <FollowButton />
        </div>
        <h1 className="text-3xl mx-auto mb-6 font-bold">{artist?.artist?.name}</h1>
        <img
          className="rounded-full sm:w-80 sm:h-80 shadow-xl mx-auto "
          src={artist?.artist?.images[0]?.url || 'https://i.scdn.co/image/ab6761610000e5eba1b1a48354e9a91fef58f651'}
          alt={artist?.artist?.name}
        ></img>
        <p className="mx-auto mt-6 text-xl text-white mb-2 uppercase font-bold">
          {artist?.artist?.genres[0] ? artist?.artist?.genres[0] : "unknown genre"}
        </p>
        <div className="flex justify-center">
          <h1 className="text-xl text-green-300">
            {artist?.artist?.followers.total.toLocaleString()} followers
          </h1>
        </div>
      </div>
    </>
  );
}

export default ArtistProfile;
