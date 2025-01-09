import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import '@/app/globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'