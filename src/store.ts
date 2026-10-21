import { create } from "zustand";
import { fetchUserProfile } from "./spotifyApi";
import { UserProps } from "./components/ui/Navbar/UserInfo/Userinfo.types";
import { clearTokens, getStoredToken } from "./auth";

export interface AppStore {
  user: UserProps | null;
  token: string | null;
  sessionExpired: boolean;
  setToken: (token: string | null) => void;
  expireSession: () => void;
  logout: () => void;
  fetchUserProfile: () => Promise<void>;
}

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  token: getStoredToken(),
  sessionExpired: false,
  setToken: (token) => set({ token, sessionExpired: false }),
  expireSession: () => {
    clearTokens();
    set({ token: null, user: null, sessionExpired: true });
  },
  logout: () => {
    clearTokens();
    set({ token: null, user: null, sessionExpired: false });
  },
  fetchUserProfile: async () => {
    try {
      const data = await fetchUserProfile();
      if (data) {
        set({ user: data });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  },
}));
