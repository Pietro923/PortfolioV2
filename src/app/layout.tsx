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
      <body className={`${inter.className} dark:bg-neutral-950`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen">
            <Sidebar />
            <div className="flex-1">
              <ThemeLanguageControls />
              <main className="md:ml-20 px-4 md:px-8 pt-16 md:pt-0 min-h-screen">
                {children}
              </main>
            </div>
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}