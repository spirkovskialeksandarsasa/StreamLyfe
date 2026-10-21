import { ArtistProps } from "../../../types/Artist.types";
import FollowButton from "../../ui/FollowButton/FollowButton";

function ArtistProfile({ artist }: ArtistProps) {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="flex justify-end">
          <FollowButton />
        </div>
        <h1 className="text-3xl mx-auto mb-6 font-bold">{artist.name}</h1>
        <img
          className="rounded-full sm:w-80 sm:h-80 shadow-xl mx-auto "
          src={artist.images?.[0]?.url || 'https://i.scdn.co/image/ab6761610000e5eba1b1a48354e9a91fef58f651'}
          alt={artist.name}
        ></img>
        <p className="mx-auto mt-6 text-xl text-white mb-2 uppercase font-bold">
          {artist.genres?.[0] ?? "unknown genre"}
        </p>
        {artist.followers && (
          <div className="flex justify-center">
            <h1 className="text-xl text-green-300">
              {artist.followers.total.toLocaleString()} followers
            </h1>
          </div>
        )}
        <div className="flex justify-center mt-4">
          <a
            href={artist.external_urls?.spotify ?? `https://open.spotify.com/artist/${artist.id}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center text-sm font-semibold text-white border border-white px-4 py-2 rounded-full hover:bg-green-600 hover:border-transparent"
          >
            <img src="/spotify-logo.png" alt="" className="h-5 mr-2" />
            OPEN IN SPOTIFY
          </a>
        </div>
      </div>
    </>
  );
}

export default ArtistProfile;
