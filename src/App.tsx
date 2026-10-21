import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/ui/Footer/Footer";
import { useEffect, useState } from "react";
import Navbar from "./components/ui/Navbar/Navbar";
import LoadingSpinner from "./components/ui/LoadingSpinner/LoadingSpinner";
import ReauthPropmt from "./components/ui/ReauthPrompt/ReauthPropmt";
import TopArtistsPage from "./pages/TopArtistsPage";
import TopTracksPage from "./pages/TopTracksPage";
import FollowedArtistsPage from "./pages/FollowedArtistsPage";
import SpotifyPlayer from "react-spotify-web-playback";
import ArtistPage from "./pages/ArtistPage";
import NotFoundPage from "./pages/NotFoundPage";
import CallbackPage from "./pages/CallbackPage";
import PrivacyPage from "./pages/PrivacyPage";
import { getAccessToken } from "./auth";
import { useAppStore } from "./store";

function App() {
  const token = useAppStore((state) => state.token);
  const setToken = useAppStore((state) => state.setToken);
  const logout = useAppStore((state) => state.logout);
  const expiredToken = useAppStore((state) => state.sessionExpired);
  const expireSession = useAppStore((state) => state.expireSession);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      if (useAppStore.getState().token) {
        const accessToken = await getAccessToken();
        if (accessToken) {
          setToken(accessToken);
        } else {
          expireSession();
        }
      }
      setLoading(false);
    };
    void checkSession();
  }, [setToken, expireSession]);

  const getOAuthToken = async (callback: (token: string) => void) => {
    const accessToken = await getAccessToken();
    if (accessToken) {
      callback(accessToken);
    } else {
      expireSession();
    }
  };

  if (loading) return <LoadingSpinner />;
  return (
    <>
      {token && <Navbar onLogout={logout} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="/topartists" element={<TopArtistsPage />} />
        <Route path="/toptracks" element={<TopTracksPage />} />
        <Route path="/following" element={<FollowedArtistsPage />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />

      {token && (
        <div className="sticky bottom-0">
          <SpotifyPlayer
            token={token}
            getOAuthToken={getOAuthToken}
            magnifySliderOnHover={true}
            initialVolume={0.5}
            name={"StreamLyfe"}
            uris={["spotify:playlist:62olrSGEXBQFymtqG2dyRc"]}
            persistDeviceSelection={true}
            syncExternalDevice={true}
            styles={{
              activeColor: "#fff",
              bgColor: "black",
              color: "#fff",
              loaderColor: "#fff",
              sliderColor: "#1cb954",
              trackArtistColor: "#ccc",
              trackNameColor: "#fff",
              sliderTrackColor: "#808080",
              sliderHandleColor: "#fff",
            }}
          />
        </div>
      )}

      {expiredToken && <ReauthPropmt />}
    </>
  );
}

export default App;
