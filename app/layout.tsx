'use client';
import type { Metadata } from 'next';
import { Antonio } from 'next/font/google';
import './globals.css';
import HeaderComponent from '@/components/header/header';
import { Next13ProgressBar } from 'next13-progressbar';

const antonio = Antonio({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={antonio.className}>
        <HeaderComponent />
        {children}
        <Next13ProgressBar
          height='2px'
          color='#656592'
          options={{ showSpinner: true }}
          showOnShallow
        />
      </body>
    </html>
  );
}
