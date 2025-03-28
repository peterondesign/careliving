import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import '@/app/globals.css'
import Head from 'next/head'
import Script from 'next/script' // Import Script from next/script
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
      </head>
      <body className='min-h-screen flex flex-col'>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2TC7JJWEY7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2TC7JJWEY7');`}
        </Script>
        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16926500271"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16926500271');`}
        </Script>
        <Script id="google-ads-conversion" strategy="afterInteractive">
          {`function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
              'send_to': 'AW-16926500271/n-Z6CJmliK8aEK_Ll4c_',
              'event_callback': callback
            });
            return false;
          }`}
        </Script>
        {children}
      </body>
    </html>
  )
}