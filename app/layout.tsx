import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ConvexClerkProvider from "@/providers/ConvexClerkProvider";

import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Speechful Club',
  description: 'Speechful Club is a exclusive podcast platform for creative and free speech',
  icons: '/icons/logo.svg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ConvexClerkProvider>
          {children}
        </ConvexClerkProvider>
      </body>
    </html>
  );
}
