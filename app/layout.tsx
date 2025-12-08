import type React from "react"
import type { Metadata } from "next"
import { Crimson_Pro } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Feldenkrais® - Reconnect with Your Organic Intelligence",
  description:
    "Experience gentle, hands-on Feldenkrais sessions to awaken ease, restore balance, and feel fully alive. 45-60 minute sessions focused on awareness-based movement and nervous system regulation.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonPro.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
