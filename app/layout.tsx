import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'

export const metadata = {
  metadataBase: new URL('https://zedcomputers.in'),
  title: 'ZED Computers | Trusted Tech Repairs & Services',
  description: 'Your one-stop destination for professional computer, laptop, and PC repairs, data recovery, and tech support in India.',
  openGraph: {
    title: 'ZED Computers | Trusted Tech Repairs',
    description: 'Expert computer, laptop, and smartphone repair services in Hyderabad, India.',
    url: 'https://zedcomputers.in',
    siteName: 'ZED Computers',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZED Computers | Tech Repairs',
    description: 'Professional computer and laptop repairs in Hyderabad, India.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}