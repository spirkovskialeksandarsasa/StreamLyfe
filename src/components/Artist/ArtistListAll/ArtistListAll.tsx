import ArtistCard from "../ArtistCard";
import { ArtistListProps } from "../../../types/Artist.types";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import classNames from "classnames";

function ArtistListAll({ artists }: ArtistListProps) {
  const isSmallScreen = useMediaQuery("(max-width:900px)");
  const isMobileScreen = useMediaQuery("(max-width: 440px)");

  return (
    <div className="p-2">
         <div
      className={classNames(
        "grid gap-y-10",
        isMobileScreen ? 'grid-cols-2' : isSmallScreen ? 'grid-cols-3' : 'grid-cols-5'
      )}
    >
        {artists?.map((artist) => (
          <ArtistCard
            key={artist?.id}
            artist={artist}
            showDetails={true}
          />
        ))}
      </div>
    </div>
  );
}

export default ArtistListAll;
