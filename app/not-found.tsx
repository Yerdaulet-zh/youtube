import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
  return (
    <div className={`${inter.className} flex flex-col items-center`}>
        <h1>404 - Page Not Found</h1>
        <p>This page does not exist.</p>
    </div>
  )
}
