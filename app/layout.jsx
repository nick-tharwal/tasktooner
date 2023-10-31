import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/Components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TASKTICK',
  description: 'MAnage your day to day activities!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <Navigation />
      <body className={inter.className}>{children}</body>
    </html>
  )
}