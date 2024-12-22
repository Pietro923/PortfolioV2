import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Sidebar />
        <main className="ml-20 min-h-screen">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  )
}