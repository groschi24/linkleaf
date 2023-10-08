'use client';

import { AppShell, Group } from '@mantine/core';

export default function AppHeader() {
  return (
    <AppShell.Header>
      <Group h='100%' px='md'>
        <p>Logo</p>
      </Group>
    </AppShell.Header>
  );
}
