'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ThemeToggle } from './theme-toggle'

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="flex w-full items-center justify-between px-4">
      <Link href="/" className="text-xl font-semibold">
        Portfolio do João
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/projects"
          className={cn(
            'transition-colors hover:text-foreground/80 text-[17px]',
            pathname === '/projects' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Projetos
        </Link>
        <Link
          href="/about"
          className={cn(
            'transition-colors hover:text-foreground/80 text-[17px]',
            pathname === '/about' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Sobre
        </Link>
        <Link
          href="/contact"
          className={cn(
            'transition-colors hover:text-foreground/80 text-[17px]',
            pathname === '/contact' ? 'text-foreground' : 'text-foreground/60',
          )}
        >
          Contato
        </Link>
        <ThemeToggle />
      </nav>
    </div>
  )
}
