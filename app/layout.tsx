import './globals.css'
import MainSection from '@/components/MainSection/MainSection'

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <MainSection />
        {children}
        <footer>footer</footer>
      </body>
    </html>
  )
}
