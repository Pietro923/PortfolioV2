import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'
import ThemeLanguageControls from '@/components/ThemeLanguageControls'
import { ThemeProvider } from '@/components/theme-provider'
import '@/styles/globals.css'
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className}  dark:bg-neutral-950`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <ThemeLanguageControls />
          <main className="ml-20 min-h-screen">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}