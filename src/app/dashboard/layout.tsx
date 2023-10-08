import '@mantine/core/styles.css';

import type { Metadata } from 'next';

import MainShell from '../ui/app/mainShell';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainShell>{children}</MainShell>;
}
