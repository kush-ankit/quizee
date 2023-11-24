import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigbar from '@/Components/Navigbar'
import { Providers } from "./providers";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quizee',
  description: 'Quiz organise platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navigbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
