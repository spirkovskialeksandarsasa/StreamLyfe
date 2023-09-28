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
function App() {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      const accessTokenParam = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"));
      token = accessTokenParam?.split("=")[1] ?? "";
      window.location.hash = "";
      window.localStorage.setItem("token", token);
      setToken(token);
    }
    console.log(token);

    setLoading(false);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };

  const [expiredToken, setExpiredToken] = useState(false);
  function tokenExpiry() {
    setExpiredToken(true);
    setToken("");
    window.localStorage.removeItem("token");
  }
  const timeoutInterval = 3600 * 1000; // 1h
  setTimeout(tokenExpiry, timeoutInterval);

  if (loading) return <LoadingSpinner />;
  const activeToken = window.localStorage.getItem("token");
  return (
    <>
      {activeToken && <Navbar onLogout={logout} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topartists" element={<TopArtistsPage />} />
        <Route path="/toptracks" element={<TopTracksPage />} />
        <Route path="/following" element={<FollowedArtistsPage />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />

      {activeToken && (
        <div className="sticky bottom-0">
          <SpotifyPlayer
            token={activeToken}
            magnifySliderOnHover={true}
            initialVolume={0.5}
            name={"StreamLyfe"}
            uris={["spotify:playlist:62olrSGEXBQFymtqG2dyRc"]}
            persistDeviceSelection={true}
            showSaveIcon={true}
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
