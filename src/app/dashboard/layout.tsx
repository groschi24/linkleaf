import CheckAuth from '@/middleware/checkAuth';
import MainShell from '@/ui/app/mainShell';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Linkleaf',
  description: 'Lorem Ipsum',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CheckAuth>
      <MainShell>{children} </MainShell>
    </CheckAuth>
  );
}
