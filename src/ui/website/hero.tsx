import Link from 'next/link';
import { APP_DOMAIN } from '@/lib/constants';
import { IconBrandGithub, IconChevronRight } from '@tabler/icons-react';

const Hero = () => {
  return (
    <div className='mx-auto mb-10 mt-12 max-w-md px-2.5 text-center sm:max-w-lg sm:px-0'>
      <Link
        href={`#`}
        className='group mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-7 py-2 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 dark:hover:border-slate-600 hover:bg-white/50 dark:hover:bg-slate-800'
      >
        <p className='text-sm font-semibold text-gray-700 dark:text-gray-200'>
          Read more
        </p>
        <IconChevronRight className='-ml-1 h-3.5 w-3.5 dark:text-white' />
      </Link>

      <h1 className='mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black dark:text-white sm:text-6xl sm:leading-[1.15]'>
        Open source alternative to
        <br />
        <span className='bg-blue-400 bg-clip-text text-transparent'>
          Linktree
        </span>
      </h1>
      <h2 className='mt-5 text-gray-600 dark:text-slate-400 sm:text-xl'>
        Revolutionize your links!
      </h2>

      <div className='mx-auto mt-10 flex max-w-fit space-x-4'>
        <a
          //href={`${APP_DOMAIN}/auth/register`}
          className='wirelytic--click--start-for-free-button rounded-full border border-black dark:border-blue-400 bg-black dark:bg-blue-400 px-5 py-2 text-sm text-black shadow-lg transition-all hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white'
        >
          Work in progress
        </a>
        <a
          className='flex items-center justify-center space-x-2 rounded-full border border-gray-300 dark:border-gray-800 bg-white dark:bg-black dark:text-white px-5 py-2 shadow-lg transition-all hover:border-gray-800 dark:hover:border-gray-400'
          href='https://github.com/groschi24/linkleaf'
          target='_blank'
          rel='noreferrer'
        >
          <p className='text-sm'>Github</p>
          <IconBrandGithub size={18} />
          {/* <span className=' inset-y-0 right-4 my-auto h-5 text-sm'>⌘K</span> */}
        </a>
      </div>
      {/* <p className='text-gray-600 dark:text-slate-400 mt-2'>
        No credit card required.
      </p> */}
    </div>
  );
};

export default Hero;
