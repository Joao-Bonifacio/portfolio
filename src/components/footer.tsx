export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          Construído com Next.js, Shadcn/UI e Vercel. O código-fonte está
          disponível no{' '}
          <a
            href="https://github.com/Joao-Bonifacio/portfolio"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
