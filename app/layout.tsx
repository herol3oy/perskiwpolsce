import Footer from '@/components/Footer'
import TopBar from '@/components/TopBar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Metro Code',
  description: 'Notes about my coding life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`mx-auto my-10 w-full px-10 sm:w-11/12 md:w-7/12 xl:w-5/12 ${inter.className}`}
      >
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
