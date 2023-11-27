'use client';

import { TSocialIcon } from '@/lib/store/zustand';
import SocialLogo from 'social-logos';

interface IProps {
  icons: TSocialIcon[];
}

export default function SocialIcons({ icons }: IProps) {
  return icons.map((icon) => (
    <div
      key={icon.platform}
      className='w-8 h-8 flex justify-center items-center rounded-full border border-solid border-slate-700 cursor-pointer'
    >
      <SocialLogo icon={icon.platform.toLowerCase() as any} size={18} />
    </div>
  ));
}
