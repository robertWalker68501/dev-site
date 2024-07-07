import React from 'react';

import type { Metadata } from 'next';
import { Poppins, Quicksand } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
});

export const metadata: Metadata = {
  title: 'NovaWeb Solutions',
  description:
    'NovaWeb Solutions is a cutting-edge web development company that transforms digital dreams into reality.',
  icons: {
    icon: '/assets/icons/logo-icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`${poppins.variable} ${quicksand.variable} h-screen w-full bg-light-200`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
