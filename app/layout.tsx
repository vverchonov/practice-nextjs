import './globals.css'
import {Montserrat} from '@next/font/google'


const montserrat = Montserrat({
  weight:['400','700'],
  subsets:['latin'],
  variable:'--font-montserrat'
})
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className}`}>
        <nav>
          <h1>Simple Logo</h1>
          <ul>
            <li><a href="/">Welcome</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        {children}
        </body>
    </html>
  )
}
