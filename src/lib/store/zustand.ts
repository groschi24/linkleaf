import { create } from 'zustand';

type Store = {
  title: string;
  changeTitle: (value: string) => void;
  bio: string;
  changeBio: (value: string) => void;
  linkBold: boolean;
  changeLinkBold: (value: boolean) => void;
  linkSize: string;
  changeLinkSize: (value: string) => void;
  linkBackgroundColor: string;
  changeLinkBackgroundColor: (value: string) => void;
  linkTextColor: string;
  changeLinkTextColor: (value: string) => void;
};

export const useStore = create<Store>((set) => ({
  title: 'Caroline Berger',
  changeTitle: (value) => set(() => ({ title: value })),
  bio: 'I am a fashion influancer, that loves to create posts on tiktok.',
  changeBio: (value) => set(() => ({ bio: value })),
  linkBold: false,
  changeLinkBold: (value) => set(() => ({ linkBold: value })),
  linkSize: 'base',
  changeLinkSize: (value) => set(() => ({ linkSize: value })),
  linkBackgroundColor: 'rgba(0,0,0,1)',
  changeLinkBackgroundColor: (value) =>
    set(() => ({ linkBackgroundColor: value })),
  linkTextColor: 'rgba(255,255,255,1)',
  changeLinkTextColor: (value) => set(() => ({ linkTextColor: value })),
}));