import ArtistCard from "../ArtistCard";
import { ArtistListProps } from "../../../types/Artist.types";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import classNames from "classnames";

function ArtistList({ artists }: ArtistListProps) {
  const isSmallScreen = useMediaQuery("(max-width:1023px)");
  const isSuperSmallScreen = useMediaQuery("(max-width: 649px)");

 
  return (
    <div
      className={classNames(
        "grid w-full h-2/5 gap-x-40 2xl:gap-x-52",
        isSuperSmallScreen ? 'grid-cols-2' : isSmallScreen ? 'grid-cols-3' : 'grid-cols-4'
      )}
    >
      {artists.map((artist) => (
        <ArtistCard key={artist?.id} artist={artist} showDetails={false} />
      ))}
    </div>
  );
}

export default ArtistList;
