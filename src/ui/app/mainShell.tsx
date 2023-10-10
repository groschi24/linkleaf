'use client';

import { AppShell } from '@mantine/core';
import AppSidebar from './sidebar';

export default function MainShell({ children }: { children: React.ReactNode }) {
  return (
    <AppShell navbar={{ width: 80, breakpoint: -1 }} padding='md'>
      <AppSidebar />
      <AppShell.Main py={0}>{children}</AppShell.Main>
    </AppShell>
  );
}
