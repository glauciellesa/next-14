import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navabar from '@/components/Navabar'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans h-96`} suppressHydrationWarning={true}>
        <header><Navabar /></header>
        <main>
          {children}
        </main>
        <footer className='text-center p-5'>By Glaucielle</footer>
      </body>
    </html>
  )
}
