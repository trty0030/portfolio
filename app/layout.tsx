import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

import Script from "next/script"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "TRTY — Developer & Designer",
  description: "Portfolio of TRTY — crafting digital experiences with modern web technologies",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} dark`}>
      <body className="font-sans antialiased grain">
        <Script src="https://kit.fontawesome.com/bbda2057fe.js" crossOrigin="anonymous" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  )
}
