"use client"
import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Moon, Sun, Languages } from "lucide-react"
import { useTheme } from "next-themes"

const ThemeLanguageControls = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [language, setLanguage] = useState<'es' | 'en'>('es')

  // Evitar hidratación incorrecta
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 flex items-center gap-2">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-700"
        onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
        aria-label={`Change language to ${language === 'es' ? 'English' : 'Spanish'}`}
      >
        <Languages className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-neutral-700"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {theme === 'dark' ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Button>
    </div>
  )
}

export default ThemeLanguageControls