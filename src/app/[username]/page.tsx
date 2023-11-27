import Logo from '@/ui/logo';
import SocialIcons from '@/ui/profile/socialIcons';
import { IconUser } from '@tabler/icons-react';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}) {
  return {
    title: `${params.username} | Linkleaf`,
  };
}

async function getProfile() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const profile = await getProfile();

  return (
    <div className='py-12 px-8 text-center flex flex-col gap-2 items-center max-w-3xl mx-auto'>
      <div
        id='image-placeholder'
        className='w-16 h-16 border border-solid border-t-slate-300 rounded-full flex justify-center items-center overflow-hidden'
      >
        {/* {profileImage ? (
      <Image
        src={URL.createObjectURL(profileImage)}
        onLoad={() =>
          URL.revokeObjectURL(URL.createObjectURL(profileImage))
        }
      />
    ) : (
      <IconUser size={18} />
    )} */}
        <IconUser size={18} />
      </div>
      <span className='text-xl font-bold text-black'>
        {/* {title.length > 0 ? title : 'Please add title'} */}
        Title
      </span>
      <span className='text-sm text-black'>
        {/* {bio.length > 0 ? bio : 'Please add bio'} */}
        BIO
      </span>
      <div className='flex gap-2 mt-4'>
        <SocialIcons icons={[{ platform: 'facebook', username: 'test' }]} />
      </div>
      <span className='uppercase text-sm font-bold mt-4 mb-2'>
        Useful links
      </span>
      <div className='w-full flex flex-col gap-2'>
        {/* {links.map((link) => (
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
      ))} */}
        <div
          className={`flex justify-center items-center px-6 py-2 w-full rounded`}
          style={{ background: '#000' }}
        >
          <span className='font-bold text-md' style={{ color: '#fff' }}>
            Title
          </span>
        </div>
      </div>
      <span className='uppercase text-sm font-bold mt-4 mb-2'>
        Show your support
      </span>
      <div className='w-full flex flex-col gap-2'>
        {/* <div
        className='flex justify-center items-center px-6 py-2 w-full rounded'
        style={{ background: '#000' }}
      >
        <span
          className={`font-${linkWeight} text-${linkSize}`}
          style={{ color: linkTextColor }}
        >
          Buy me a coffee!
        </span>
      </div>
    </div> */}

        <div
          className={`flex justify-center items-center px-6 py-2 w-full rounded`}
          style={{ background: '#000' }}
        >
          <span className='font-bold text-md' style={{ color: '#fff' }}>
            Title
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
  );
}
