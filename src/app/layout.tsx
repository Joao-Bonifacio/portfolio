import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { SiteHeader } from '@/components/header'
import { SiteFooter } from '@/components/footer'

export const metadata: Metadata = {
  title: 'João | Portfólio Full-Cycle',
  description: 'Portfólio de um desenvolvedor full-cycle experiente em...',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.cdnfonts.com/css/geist-sans"
        />
      </head>
      <body className="font-geist">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  )
}
