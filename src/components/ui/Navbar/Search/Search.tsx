import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { searchArtists } from "../../../../spotifyApi";

import { searchProps } from "./Search.types";
import { useState, useEffect } from "react";
import { Artist } from "../../../../types/Artist.types";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import SearchArtistList from "../../../Artist/SearchArtist/SearchArtistList/SearchArtistList";

function Search({ search, onSearch }: searchProps) {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | null>(null);
  const [showSearchResult, setShowSearchResult] = useState(false);

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      const newTimeoutId = setTimeout(() => {
        void fetchData();
      }, 400);
      setTimeoutId(newTimeoutId);
    }
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [search]);

  const fetchData = async () => {
    try {
      const artistResults = await searchArtists(search);
      setArtists(artistResults);
      setShowSearchResult(true);
    } catch (error) {
      console.log("ERROR FETCHING RELATED ARTISTS");
    }
  };

  const handleClickAway = () => {
    setShowSearchResult(false);
  };
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (search) {
      e.stopPropagation();
      setShowSearchResult(true);
    }
  };

  return (
    <div className="flex justify-start w-fit">
      <div onClick={handleClick} className="flex items-start relative mb-2 mt-3 mr-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
      <input
        className="w-32 xl:w-72 md:w-48 h-10 bg-stone-700 flex justify-center mt-0 rounded-full border border-gray-400 p-5 font-bold"
        type="search"
        placeholder="Search..."
        value={search}
        onChange={onSearch}
        onClick={handleClick}
      ></input>
    {search && showSearchResult && (
  <ClickAwayListener onClickAway={handleClickAway}>
    <div className="absolute h-60 bg-black z-10 mt-12 ml-8 w-40 md:w-52 xl:w-fit overflow-y-scroll">
      <div onClick={handleClickAway}>
        <SearchArtistList artists={artists} />
      </div>
    </div>
  </ClickAwayListener>
)}
    </div>
  );
}

export default Search;
