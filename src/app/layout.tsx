import '@/styles/preflight.css';
import '@/styles/tailwind.css';
import '@mantine/core/styles.css';
import { Inter, Roboto_Mono } from 'next/font/google';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import type { Metadata } from 'next';
import NextAuthProvider from '@/ui/authProvider';

export const metadata: Metadata = {
  title: 'Linkleaf',
  description: 'Lorem Ipsum',
};

const sansFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const monoFont = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${sansFont.variable} ${monoFont.variable} font-sans`}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            fontFamily: sansFont.style.fontFamily,
            fontFamilyMonospace: monoFont.style.fontFamily,
            defaultRadius: 'lg',
            radius: {
              lg: '0.75rem',
            },
          }}
        >
          <NextAuthProvider>{children}</NextAuthProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
