'use client';

import { Loader } from '@mantine/core';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CheckAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  if (status === 'authenticated') {
    return children;
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen overflow-hidden bg-gray-100 z-50'>
      <Loader />
    </div>
  );
}
