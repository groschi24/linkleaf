import { useStore } from '@/lib/store/zustand';
import { Image } from '@mantine/core';
import { IconUser } from '@tabler/icons-react';
import SocialIcons from '../profile/socialIcons';
import Link from 'next/link';
import Logo from '../logo';

export default function PhoneMock() {
  const {
    profileImage,
    title,
    bio,
    socialIcons,
    linkWeight,
    linkSize,
    linkBackgroundColor,
    linkTextColor,
    links,
  } = useStore();

  return (
    <>
      <div className='hidden text-xs text-sm text-base text-lg text-xl' />
      <div className='relative border-gray-800 text- bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]'>
        <div className='h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg'></div>
        <div className='h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg'></div>
        <div className='h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg'></div>
        <div className='h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg'></div>
        <div className='rounded-[2rem] overflow-hidden overflow-y-scroll scrollbar-hide w-[272px] h-[572px] bg-white'>
          <div className='py-12 px-8 text-center flex flex-col gap-2 items-center'>
            <div
              id='image-placeholder'
              className='w-16 h-16 border border-solid border-t-slate-300 rounded-full flex justify-center items-center overflow-hidden'
            >
              {profileImage ? (
                <Image
                  src={URL.createObjectURL(profileImage)}
                  onLoad={() =>
                    URL.revokeObjectURL(URL.createObjectURL(profileImage))
                  }
                />
              ) : (
                <IconUser size={18} />
              )}
            </div>
            <span className='text-xl font-bold text-black'>
              {title.length > 0 ? title : 'Please add title'}
            </span>
            <span className='text-sm text-black'>
              {bio.length > 0 ? bio : 'Please add bio'}
            </span>
            <div className='flex gap-2 mt-4'>
              <SocialIcons icons={socialIcons} />
            </div>
            <span className='uppercase text-sm font-bold mt-4 mb-2'>
              Useful links
            </span>
            <div className='w-full flex flex-col gap-2'>
              {links.map((link) => (
                <div
                  key={link.id}
                  className={`flex justify-center items-center px-6 py-2 w-full rounded ${
                    link.visible ? '' : 'hidden'
                  }`}
                  style={{ background: linkBackgroundColor }}
                >
                  <span
                    className={`font-${linkWeight} text-${linkSize}`}
                    style={{ color: linkTextColor }}
                  >
                    {link.title}
                  </span>
                </div>
              ))}
            </div>
            <span className='uppercase text-sm font-bold mt-4 mb-2'>
              Show your support
            </span>
            <div className='w-full flex flex-col gap-2'>
              <div
                className='flex justify-center items-center px-6 py-2 w-full rounded'
                style={{ background: linkBackgroundColor }}
              >
                <span
                  className={`font-${linkWeight} text-${linkSize}`}
                  style={{ color: linkTextColor }}
                >
                  Buy me a coffee!
                </span>
              </div>
            </div>

            <div className='absolute bottom-8 mt-12'>
              <Link
                href='https://linkleaf.app'
                rel='noopener noreferrer'
                target='_blank'
                className='flex gap-1 items-center'
              >
                <Logo className='fill-blue-500 text-blue-500' />
                LinkLeaf
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
