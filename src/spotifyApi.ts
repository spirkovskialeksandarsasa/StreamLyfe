import axios, { AxiosInstance } from "axios";
import { Artist } from "./types/Artist.types";
import { UserProps } from "./components/ui/Navbar/UserInfo/Userinfo.types";
import { Track } from "./types/Track.types";
import { Album } from "./types/Album.types";

const spotifyApi: AxiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});
spotifyApi.interceptors.request.use((config) => {
  const token = window.localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
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

export async function fetchRelatedArtists(artistId: string) {
  try {
    const response = await spotifyApi.get<{ artists: Artist[] }>(
      `artists/${artistId}/related-artists`
    );
    return response.data.artists;
  } catch (error) {
    console.error("Error fetching related artists:", error);
    throw error;
  }
}
export async function fetchDiscography(artistId: string) {
  try {
    const response = await spotifyApi.get<{ items: Album[] }>(
      `artists/${artistId}/albums?include_groups=album%2Csingle&market=MK&limit=6`
    );
    return response.data.items;
  } catch (error) {
    console.error("Error fetching artist discography:", error);
    throw error;
  }
}

export async function checkFollowage(artistId: string) {
  try {
    const response = await spotifyApi.get<boolean[]>(
      `/me/following/contains?type=artist&ids=${artistId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error checking artist followage", error);
    throw error;
  }
}

export async function followArtist(artistId: string) {
  try {
    await spotifyApi.put(`/me/following?type=artist&ids=${artistId}`);
  } catch (error) {
    console.error("Error following artist", error);
    throw error;
  }
}

export async function unfollowArtist(artistId: string) {
  try {
    await spotifyApi.delete(`/me/following?type=artist&ids=${artistId}`);
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
    }>(`search?q=${query}&type=artist`);
    return response.data.artists.items;
  } catch (error) {
    console.error("Error searching for artists:", error);
    throw error;
  }
}

export async function fetchTracksByArtist(artistId: string) {
  try {
    const response = await spotifyApi.get<{ tracks: Track[] }>(
      `artists/${artistId}/top-tracks?market=MK`
    );

    return response.data.tracks;
  } catch (error) {
    console.error("Error fetching top tracks data:", error);
    throw error;
  }
}


export default spotifyApi;
