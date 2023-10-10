'use client';

import { Button } from '@mantine/core';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navigation() {
  const { data: session, status } = useSession();

  return (
    <div>
      <p>Status: {status}</p>
      <p>{status === 'authenticated' && session.user?.name}</p>

      {status === 'authenticated' ? (
        <Button onClick={() => signOut()}>Sign out</Button>
      ) : (
        <Button onClick={() => signIn()}>Sign in</Button>
      )}
    </div>
  );
}
