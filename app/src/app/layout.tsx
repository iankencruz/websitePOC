import type { Metadata } from 'next'
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

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