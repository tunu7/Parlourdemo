// app/layout.js
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
