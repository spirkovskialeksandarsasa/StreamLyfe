import { create } from 'zustand';
import { fetchUserProfile } from './spotifyApi';
import { UserProps } from './components/ui/Navbar/UserInfo/Userinfo.types';
export interface AppStore {
  user: UserProps | null;
  fetchUserProfile: () => Promise<void>;
}

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  fetchUserProfile: async () => {
    try {
      const data = await fetchUserProfile();
      if (data) {
        set({ user: data });
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  },
}));