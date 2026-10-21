import axios, { AxiosInstance, isAxiosError } from "axios";
import { Artist } from "./types/Artist.types";
import { UserProps } from "./components/ui/Navbar/UserInfo/Userinfo.types";
import { Track } from "./types/Track.types";
import { Album } from "./types/Album.types";
import { getAccessToken } from "./auth";
import { useAppStore } from "./store";

const spotifyApi: AxiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});
spotifyApi.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
spotifyApi.interceptors.response.use(undefined, (error: Error) => {
  if (isAxiosError(error) && error.response?.status === 401) {
    useAppStore.getState().expireSession();
  }
  return Promise.reject(error);
});

export async function fetchTopArtists() {
  try {
    const response = await spotifyApi.get<{ items: Artist[] }>(
      "me/top/artists?time_range=long_term&limit=4"
    );

    return response.data.items;
  } catch (error) {
    console.error("Error fetching four top artists data:", error);
    throw error;
  }
}

export async function fetchTopTracks() {
  try {
    const response = await spotifyApi.get<{ items: Track[] }>(
      "me/top/tracks?time_range=long_term&limit=5"
    );

    return response.data.items;
  } catch (error) {
    console.error("Error fetching five top tracks data:", error);
    throw error;
  }
}
export async function fetchFollowedArtists() {
  try {
    const response = await spotifyApi.get<{
      artists: { items: Artist[] };
    }>("me/following?type=artist&limit=4");

    return response.data.artists.items;
  } catch (error) {
    console.error("Error fetching four followed artists data:", error);
    throw error;
  }
}

export async function fetchUserProfile() {
  try {
    const response = await spotifyApi.get<UserProps>("me");
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
}
export async function fetchAllTopArtists() {
  try {
    const response = await spotifyApi.get<{ items: Artist[] }>(
      "me/top/artists?time_range=short_term"
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching top artists data:", error);
    throw error;
  }
}

export async function fetchAllTopTracks() {
  try {
    const response = await spotifyApi.get<{ items: Track[] }>(
      "me/top/tracks?time_range=short_term"
    );

    return response.data.items;
  } catch (error) {
    console.error("Error fetching top tracks data:", error);
    throw error;
  }
}

export async function fetchAllFollowedArtists() {
  try {
    const response = await spotifyApi.get<{
      artists: { items: Artist[] };
    }>("me/following?type=artist");

    return response.data.artists.items;
  } catch (error) {
    console.error("Error fetching followed artists data:", error);
    throw error;
  }
}
export async function fetchArtistById(artistId: string) {
  try {
    const response = await spotifyApi.get<Artist>(`artists/${artistId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching artist's data:", error);
    throw error;
  }
}

export async function fetchDiscography(artistId: string) {
  try {
    const response = await spotifyApi.get<{ items: Album[] }>(
      `artists/${artistId}/albums?include_groups=album%2Csingle&market=from_token&limit=6`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching artist discography:", error);
    throw error;
  }
}

export async function checkFollowage(artistId: string) {
  try {
    const response = await spotifyApi.get<boolean[]>("me/library/contains", {
      params: { uris: `spotify:artist:${artistId}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error checking artist followage", error);
    throw error;
  }
}

export async function followArtist(artistId: string) {
  try {
    await spotifyApi.put("me/library", null, {
      params: { uris: `spotify:artist:${artistId}` },
    });
  } catch (error) {
    console.error("Error following artist", error);
    throw error;
  }
}

export async function unfollowArtist(artistId: string) {
  try {
    await spotifyApi.delete("me/library", {
      params: { uris: `spotify:artist:${artistId}` },
    });
  } catch (error) {
    console.error("Error unfollowing artist", error);
    throw error;
  }
}

export async function searchArtists(query: string) {
  try {
    const response = await spotifyApi.get<{
      artists: {
        items: Artist[];
      };
    }>("search", { params: { q: query, type: "artist", limit: 10 } });
    return response.data.artists.items;
  } catch (error) {
    console.error("Error searching for artists:", error);
    throw error;
  }
}

export async function fetchTracksByArtist(artist: Artist) {
  try {
    const response = await spotifyApi.get<{ tracks: { items: Track[] } }>(
      "search",
      {
        params: {
          q: `artist:"${artist.name}"`,
          type: "track",
          market: "from_token",
          limit: 10,
        },
      }
    );

    return response.data.tracks.items.filter((track) =>
      track.artists.some((trackArtist) => trackArtist.id === artist.id)
    );
  } catch (error) {
    console.error("Error fetching artist tracks:", error);
    throw error;
  }
}

export default spotifyApi;
