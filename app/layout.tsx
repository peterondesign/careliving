import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import '@/app/globals.css'
import Head from 'next/head'

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
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}