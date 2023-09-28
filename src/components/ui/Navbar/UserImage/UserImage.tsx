import { UserImageProps } from "./UserImage.types";

function UserImage({ image }: UserImageProps) {


  return (
    <div className="overflow-hidden rounded-full w-11 h-11 shadow-sm mr-2">
      <img className="w-full h-full mr-2 hover:scale-110 transform transition-transform duration-300 ease-in-out" src={image} />
    </div>
   
  );
}
export default UserImage;
