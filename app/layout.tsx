import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CustomCursor from "@/components/CustomCursor"
// Remove this import
// import CursorEffects from "@/components/CursorEffects"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Raj Dave - Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN Stack, Next.js, and Python. Expert in RAG and Gen AI solutions.",
  keywords: "Full Stack Developer, MERN Stack, Next.js, Python, React, Node.js, RAG, Gen AI, LangChain, OpenAI",
  authors: [{ name: "Raj Dave" }],
  openGraph: {
    title: "Raj Dave - Full Stack Developer",
    description: "Full Stack Developer specializing in MERN Stack, Next.js, and Python. Expert in RAG and Gen AI solutions.",
    type: "website",
  },
  generator: 'raj'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>
        <CustomCursor />
        {/* Remove this component from the body */}
        {/* <CursorEffects /> */}
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
