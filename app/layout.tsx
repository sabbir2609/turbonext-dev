import 'tailwindcss/tailwind.css'
import Navigation from './navigation'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='h-full bg-gray-100'>
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
