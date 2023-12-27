import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useColorStore = create<colorState & colorAction>((set) => ({
  themeColor: 'mercury',
  updateThemeColor: (themeColor) => set(() => ({ themeColor: themeColor })),
  resetTheme: () => set({ themeColor: 'mercury' }),
}));
