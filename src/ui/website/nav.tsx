'use client';

import { APP_DOMAIN, SHOW_BACKGROUND_SEGMENTS } from '@/lib/constants';
import useScroll from '@/lib/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { useParams, useSelectedLayoutSegment } from 'next/navigation';
import MaxWidthWrapper from '../maxWidthWrapper';
import Link from 'next/link';
import { IconLeaf } from '@tabler/icons-react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Nav() {
  const { data: session, status } = useSession();

  const { domain = 'linkleaf.app' } = useParams() as { domain: string };
  const scrolled = useScroll(50);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(`sticky inset-x-0 top-0 z-30 w-full transition-all`, {
        'border-b border-gray-200 dark:border-gray-700 bg-white/75 dark:bg-black/75 backdrop-blur-lg':
          scrolled,
        'border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black':
          selectedLayout && !SHOW_BACKGROUND_SEGMENTS.has(selectedLayout),
      })}
    >
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Link
              href={domain === 'linkleaf.app' ? '/' : `https://linkleaf.app`}
            >
              {/* <LogoType className='fill-blue-500 text-blue-500' /> */}
              <IconLeaf size={32} className='text-white' />
            </Link>
          </div>

          <div>
            {status === 'authenticated' ? (
              <>
                <Link
                  //href={`${APP_DOMAIN}/auth/login`}
                  href='#'
                  onClick={() => signOut()}
                  className='wirelytic--click--signout-button animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 dark:text-slate-400 transition-colors ease-out hover:text-black dark:hover:text-white'
                >
                  Sign out
                </Link>
                <Link
                  href={`${APP_DOMAIN}/dashboard`}
                  className='wirelytic--click--dashboard-button animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black'
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  //href={`${APP_DOMAIN}/auth/login`}
                  href='#'
                  onClick={() => signIn()}
                  className='wirelytic--click--login-button animate-fade-in rounded-full px-4 py-1.5 text-sm font-medium text-gray-500 dark:text-slate-400 transition-colors ease-out hover:text-black dark:hover:text-white'
                >
                  Log in
                </Link>
                <Link
                  href={`${APP_DOMAIN}/auth/register`}
                  className='wirelytic--click--signup-button animate-fade-in rounded-full border border-black bg-black px-4 py-1.5 text-sm text-white transition-all hover:bg-white hover:text-black'
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
