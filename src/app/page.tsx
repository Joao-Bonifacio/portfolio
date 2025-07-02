import { AutoCarousel } from '@/components/image-carousel'
import { Button } from '@/components/ui/button'
import { getAllProjects } from '@/utils/content'
import Link from 'next/link'

export default async function HomePage() {
  const projects = await getAllProjects()
  const images = projects.flatMap((project) => project.images || [])

  return (
    <>
      <div className="relative flex min-h-[70vh] flex-col items-center justify-center px-4">
        <div className="absolute inset-0 bg-[url('/coding.png')] bg-cover bg-center opacity-15" />

        <section className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-6 py-16 text-center md:gap-8 md:py-24">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:leading-[1.1]">
            Desenvolvedor Fullcycle <br className="hidden sm:inline" />
            <span className="text-primary">Do Código ao Deploy</span>
          </h1>

          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            Especialista em soluções completas com TypeScript, React, Next.js,
            NestJS, Docker e Kubernetes. DevOps com CI/CD (GitHub Actions,
            ArgoCD), observabilidade (Prometheus, Grafana, OpenTelemetry) e
            soluções em qualidade de software com testes automatizados usando
            Vitest.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/projects" className="cursor-pointer">
              <Button size="lg" className="font-bold">
                Ver Projetos
              </Button>
            </Link>
            <Link href="/contact" className="cursor-pointer">
              <Button size="lg" variant="outline" className="font-bold">
                Contactar
              </Button>
            </Link>
          </div>
        </section>
      </div>

      <div className="my-5">
        <AutoCarousel images={images} />
      </div>

      <div className="mt-5">
        <div className="w-full bg-muted p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Vamos trabalhar juntos?</h2>
          <Link href="/contact">
            <Button
              size="lg"
              className="inline-block rounded-lg px-6 py-3 font-bold"
            >
              Entrar em contato
            </Button>
          </Link>
        </div>
      </div>
    </>
  )
}
