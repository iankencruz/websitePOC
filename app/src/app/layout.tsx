import type { Metadata } from 'next'
import NavBar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx'

//import tailwind global css 
import './globals.css'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
      <NavBar title="Proof of concept" />
        {children}
        <Footer />
      </body>
    </html>
  )
}