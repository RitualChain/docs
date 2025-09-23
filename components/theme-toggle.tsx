"use client"

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
      <Button 
        variant="ghost" 
        size="icon" 
        className="flex items-center justify-center size-7 dark:bg-muted dark:text-foreground bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
          <Icon icon="lucide:sun" className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icon icon="lucide:moon" className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
      </Button>
  )
}
