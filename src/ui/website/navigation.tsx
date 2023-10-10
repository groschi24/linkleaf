'use client';

import { Button, Group } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Navigation() {
  const { data: session, status } = useSession();

  return (
    <div className='z-50 sticky top-8 left-16 right-16 flex items-center justify-between bg-white/30 backdrop-blur-sm  border border-solid border-slate-100 rounded-full p-4'>
      <div>
        <IconBrandGithub size={24} />
      </div>

      {/* <p>Status: {status}</p>
      <p>{status === 'authenticated' && session.user?.name}</p> */}

      <div>
        {status === 'authenticated' ? (
          <Group gap='sm'>
            <Button radius='xl' onClick={() => signOut()}>
              Sign out
            </Button>
            <Link href='/dashboard' passHref>
              <Button radius='xl'>Dashboard</Button>
            </Link>
          </Group>
        ) : (
          <Button radius='xl' onClick={() => signIn()}>
            Sign in
          </Button>
        )}
      </div>
    </div>
  );
}
