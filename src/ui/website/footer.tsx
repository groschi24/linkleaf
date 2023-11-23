'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import MaxWidthWrapper from '../maxWidthWrapper';
import Logo from '../logo';

const navigation = {
  product: [
    { name: 'Pricing', href: '/pricing' },
    //{ name: 'Changelog', href: '/changelog' },
  ],
  company: [
    { name: 'Blog', href: '#' },
    {
      name: 'Slack',
      href: '#',
      newTab: true,
    },
  ],
  resources: [
    { name: 'Help Center', href: '#' },
    { name: 'UTM Generator', href: '#' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
};

export default function Footer() {
  const { domain = 'linkleaf.app' } = useParams() as { domain: string };

  const createHref = (href: string) =>
    domain === 'linkleaf.app' ? href : `https://linkleaf.app${href}`;

  return (
    <footer className='z-10 border-t border-gray-200 dark:border-slate-700 bg-white/50 dark:bg-black/50 py-8 backdrop-blur-lg'>
      <MaxWidthWrapper className='pt-10'>
        <div className='xl:grid xl:grid-cols-5 xl:gap-8'>
          <div className='space-y-8 xl:col-span-2'>
            <Link href={createHref('/')}>
              <span className='sr-only'>Linkleaf Logo</span>
              <Logo className='h-8 fill-white' />
            </Link>
            <p className='max-w-xs text-sm text-gray-500 dark:text-slate-300'>
              Privacy-friendly and cookie-free web analytics.
            </p>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-3 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-900 dark:text-white'>
                  Product
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={createHref(item.href)}
                        className='text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold text-gray-600 dark:text-slate-300'>
                  Company
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={createHref(item.href)}
                        target={item.newTab ? '_blank' : '_self'}
                        className='text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold text-gray-600 dark:text-slate-300'>
                  Resources
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={createHref(item.href)}
                        className='text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold text-gray-600 dark:text-slate-300'>
                  Legal
                </h3>
                <ul role='list' className='mt-4 space-y-4'>
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={createHref(item.href)}
                        className='text-sm text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-16 border-t border-gray-900/10 dark:border-slate-100/10 pt-8 sm:mt-20 lg:mt-24'>
          <p className='text-sm leading-5 text-gray-500 dark:text-slate-400'>
            © {new Date().getFullYear()} linkleaf.app
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
