import React, { useEffect } from 'react' // Import useEffect for side effects
import { useRouter } from 'next/router' // Import useRouter for navigation

// Add a TypeScript declaration for window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function ThankYouPage() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/') // Redirect to homepage
    }, 10000) // 10 seconds

    return () => clearTimeout(timer) // Cleanup timeout on unmount
  }, [router])

  return (
    <div>
      <h1>Thank You!</h1>
      <p>Your submission has been received.</p>
      <p>You will be redirected to the homepage shortly.</p>
    </div>
  )
}