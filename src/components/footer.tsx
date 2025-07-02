import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t py-3 px-4 md:px-8">
      <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-center text-sm text-muted-foreground">
          Portfólio de João Junior — mostrando projetos, habilidades e
          experiências como desenvolvedor full stack.{' '}
          <Link
            href="https://github.com/Joao-Bonifacio/portfolio"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            Código-fonte no GitHub
          </Link>
          .
        </p>

        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/Joao-Bonifacio"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Github className="h-5 w-5" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/jo%C3%A3o-j%C3%BAnior-7499b6218/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground transition"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
