import { Analytics } from '@vercel/analytics/next'
import { Aleo, Gochi_Hand, Lacquer } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const lacquer = Lacquer({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lacquer',
})

const aleo = Aleo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-aleo',
})

const gochi = Gochi_Hand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gochi',
})

export const metadata: Metadata = {
  title: 'NOAH — Make Some Noise',
  description: 'An 11-second animation competition for people who like their babies loud and their careers less predictable.',
  generator: 'NOAH / Animationfolk',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f0e6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${lacquer.variable} ${gochi.variable} ${aleo.variable} antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
