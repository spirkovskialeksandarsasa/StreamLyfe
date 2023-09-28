import UserImage from "../UserImage/UserImage";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
import { useAppStore, AppStore } from "../../../../store";

function UserInfo() {
  const isSmallScreen = useMediaQuery("(max-width:880px)");
  const { user, fetchUserProfile } = useAppStore((state: AppStore) => ({
    ...state,
  }));

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      void fetchUserProfile();
    }
  }, [fetchUserProfile]);

  

  return (
    <>
      <span className="flex justify-center">
        <UserImage
          image={
            user?.images[1]?.url ||
            "https://i.scdn.co/image/ab6761610000e5eba1b1a48354e9a91fef58f651"
          }
        />
        {!isSmallScreen && (
          <h1 className="mt-2 ml-2 bold text-grey font-bold">{user?.display_name}</h1>
        )}
      </span>
      {!user && (
        <div className="absolute z-0">
        </div>
      )}
    </>
  );
}

export default UserInfo;
