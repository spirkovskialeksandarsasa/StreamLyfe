import { ArtistSectionProps } from "./ArtistSection.types";
import { Link } from "react-router-dom";

function ArtistSection(props: ArtistSectionProps) {
  return (
    <div className="flex flex-col justify-center items-center relative h-2/5 sm:w-3/5 lg:w-5/5 xl:w-4/5 2xl:w-4/5 md:w-4/5 ">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold text-xl p-2 text-stone-100">{props.title}</h1>
        {props.showLink && <Link to={props.linkIns} className="flex items-end text-sm mr-10 text-gray-300">
          Show all
        </Link>
        }
      </div>
      <div className="lg:ml-20 md:ml-0 ">
      {props.content}
      </div>
    </div>
  );
}

export default ArtistSection;
