import { FileWithPath } from '@mantine/dropzone';
import { create } from 'zustand';

export type TSocialIcon = { platform: string; username: string };
export type TLink = {
  id: string;
  title: string;
  url: string;
  visible: boolean;
  position: number;
};

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
  updateSocialIcon: (platform: string, username: string) => void;
  links: TLink[];
  addLink: (title: string, url: string, notVisible?: boolean) => void;
  removeLink: (id: string) => void;
  updateLink: (
    id: string,
    title: string,
    url: string,
    notVisible: boolean,
    position: number
  ) => void;
};

type StyleStore = {
  linkWeight:
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold'
    | 'black';
  changeLinkWeight: (
    value:
      | 'thin'
      | 'light'
      | 'normal'
      | 'medium'
      | 'semibold'
      | 'bold'
      | 'extrabold'
      | 'black'
  ) => void;
  linkSize: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  changeLinkSize: (value: 'xs' | 'sm' | 'base' | 'lg' | 'xl') => void;
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
  updateSocialIcon: (platform, username) =>
    set((state) => ({ socialIcons: [] })),
  links: [
    {
      id: '1',
      title: 'My first link',
      url: 'https://google.de',
      visible: true,
      position: 1,
    },
    {
      id: '2',
      title: 'My second link',
      url: 'https://google.de',
      visible: false,
      position: 2,
    },
    {
      id: '3',
      title: 'My third link',
      url: 'https://google.de',
      visible: true,
      position: 3,
    },
  ],
  addLink: (title, url, notVisible) =>
    set((state) => ({
      links: [
        ...state.links,
        {
          id: '',
          title,
          url,
          visible: !notVisible,
          position: state.links[state.links.length - 1].position + 1,
        },
      ],
    })),
  removeLink: (value) =>
    set((state) => ({
      links: state.links.filter((item) => item.id !== value),
    })),
  updateLink: (id, title, url, notVisible) => set((state) => ({ links: [] })),

  // Style
  linkWeight: 'normal',
  changeLinkWeight: (value) => set(() => ({ linkWeight: value })),
  linkSize: 'base',
  changeLinkSize: (value) => set(() => ({ linkSize: value })),
  linkBackgroundColor: '#000000',
  changeLinkBackgroundColor: (value) =>
    set(() => ({ linkBackgroundColor: value })),
  linkTextColor: '#ffffff',
  changeLinkTextColor: (value) => set(() => ({ linkTextColor: value })),
  customCss: '',
  changeCustomCss: (value) => set(() => ({ title: value })),
}));
