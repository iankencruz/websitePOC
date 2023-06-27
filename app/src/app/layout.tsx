import type { Metadata } from 'next'
import NavBar from '../components/Navbar.jsx'

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
      <NavBar title="Paysorted" />
        {children}
      </body>
    </html>
  )
}