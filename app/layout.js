"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import './i18n';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alex | Full-Stack developer',
  description: 'My personal website',
}



function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
