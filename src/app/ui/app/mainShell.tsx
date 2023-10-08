'use client';

import { AppShell } from '@mantine/core';
import AppSidebar from './sidebar';
//import { useDisclosure } from '@mantine/hooks';

export default function MainShell({ children }: { children: React.ReactNode }) {
  //const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      navbar={{ width: 80, breakpoint: -1 }}
      //navbar={{ width: 80, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding='md'
    >
      {/* <AppHeader /> */}
      <AppSidebar />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
