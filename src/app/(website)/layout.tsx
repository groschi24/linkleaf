import Background from '@/ui/website/background';
import Footer from '@/ui/website/footer';
import Nav from '@/ui/website/nav';
import { ReactNode } from 'react';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className='flex min-h-screen flex-col justify-between'>
        <Nav />
        {children}
        <Footer />
        <Background />
      </div>
    </>
  );
}
