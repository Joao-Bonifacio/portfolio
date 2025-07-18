import { MainNav } from '@/components/main-nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav />
      </div>
    </header>
  )
}
