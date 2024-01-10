import './globals.css'
import Header1 from '@/components/layouts/Header1'

export default function RootLayout1({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header1 />
        {children}
      </body>
    </html>
  )
}
