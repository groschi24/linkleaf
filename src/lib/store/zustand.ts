import { FileWithPath } from '@mantine/dropzone';
import { create } from 'zustand';

export type TSocialIcon = { platform: string; username: string };

type ContentStore = {
  profileImage: FileWithPath | null;
  changeProfileImage: (file: FileWithPath) => void;
  title: string;
  changeTitle: (value: string) => void;
  bio: string;
  changeBio: (value: string) => void;
  socialIcons: TSocialIcon[];
  addSocialIcon: (platform: string, username: string) => void;
  removeSocialIcon: (platform: string) => void;
};

type StyleStore = {
  linkBold: boolean;
  changeLinkBold: (value: boolean) => void;
  linkSize: string;
  changeLinkSize: (value: string) => void;
  linkBackgroundColor: string;
  changeLinkBackgroundColor: (value: string) => void;
  linkTextColor: string;
  changeLinkTextColor: (value: string) => void;
  customCss: string;
  changeCustomCss: (value: string) => void;
};

type Store = ContentStore & StyleStore;

export const useStore = create<Store>((set) => ({
  // Content
  profileImage: null,
  changeProfileImage: (value) => set(() => ({ profileImage: value })),
  title: 'Caroline Berger',
  changeTitle: (value) => set(() => ({ title: value })),
  bio: 'I am a fashion influancer, that loves to create posts on tiktok.',
  changeBio: (value) => set(() => ({ bio: value })),
  socialIcons: [
    { platform: 'Instagram', username: 'tester' },
    { platform: 'TikTok', username: 'testert' },
  ],
  addSocialIcon: (platform, username) =>
    set((state) => ({
      socialIcons: [...state.socialIcons, { platform, username }],
    })),
  removeSocialIcon: (value) =>
    set((state) => ({
      socialIcons: state.socialIcons.filter((item) => item.platform !== value),
    })),

  // Style
  linkBold: false,
  changeLinkBold: (value) => set(() => ({ linkBold: value })),
  linkSize: 'base',
  changeLinkSize: (value) => set(() => ({ linkSize: value })),
  linkBackgroundColor: 'rgba(0,0,0,1)',
  changeLinkBackgroundColor: (value) =>
    set(() => ({ linkBackgroundColor: value })),
  linkTextColor: 'rgba(255,255,255,1)',
  changeLinkTextColor: (value) => set(() => ({ linkTextColor: value })),
  customCss: '',
  changeCustomCss: (value) => set(() => ({ title: value })),
}));
