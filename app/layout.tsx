import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import '@/app/globals.css'
import Head from 'next/head'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CareLiving',
  description: 'CareLiving provides quality home health and personal care services, helping seniors with daily tasks to maintain their independence.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>CareLiving - Quality Home Health and Personal Care</title>
        <meta name="description" content="CareLiving provides quality home health and personal care services, helping seniors with daily tasks to maintain their independence." />
        <meta name="keywords" content="CareLiving, home health, personal care, senior care, quality care, compassionate care" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2TC7JJWEY7"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2TC7JJWEY7');`
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16926500271"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16926500271');`
          }}
        />
      </head>
      <body className='min-h-screen flex flex-col'>{children}</body>
    </html>
  )
}