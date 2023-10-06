import './globals.css'
import type { Metadata } from 'next'
import {  Poppins } from 'next/font/google'
import './Components/Members/style.team.css'

const poppins = Poppins({ 
  weight: ['400','500','700'], 
  style: 'normal' ,
  subsets:['latin']

})

export const metadata: Metadata = {
  title: 'Elita',
  description: 'create by Untitled Team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior:'smooth'}}>
      <body className={poppins.className} style={{ scrollBehavior:'smooth'}}>{children}</body>
    </html>
  )
}
