import { Artist } from "../../types/Artist.types";

export { PopularityEnum } from "../../types/Artist.types";

export interface ArtistCardProps {
  artist: Artist;
  showDetails?: boolean;
}
