import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Mim',
  description:
    'Conheça mais sobre minha jornada como desenvolvedor full-cycle.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl py-12">
      <div className="flex flex-col-reverse items-start gap-8 md:flex-row">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold">Sobre Mim</h1>
          <p className="text-lg text-muted-foreground">
            Olá! Sou um desenvolvedor Full-Cycle apaixonado por criar soluções
            de software eficientes e escaláveis que resolvem problemas reais.
            Com uma base sólida em Frontend, Backend, DevOps, Infraestrutura, e
            QA (qualidade de software), eu desenvolvo ambientes dinâmicos onde
            posso aplicar meu conhecimento em todo o ciclo de vida do software.
          </p>
          <p className="text-lg text-muted-foreground">
            Minha jornada na tecnologia começou com uma curiosidade sobre como
            as aplicações web funcionavam nos bastidores. Essa curiosidade
            rapidamente se transformou em uma carreira, onde tive a oportunidade
            de trabalhar com tecnologias de ponta como TypeScript, React,
            Next.js para o frontend, e NestJS para o backend.
          </p>
          <p className="text-lg text-muted-foreground">
            Além do código, sou um grande defensor de práticas de DevOps
            robustas. Tenho experiência prática com Docker e Kubernetes para
            containerização e orquestração, e na construção de pipelines de
            CI/CD que garantem entregas de software rápidas e confiáveis.
          </p>
          <p className="text-lg text-muted-foreground">
            Quando não estou programando, gosto de explorar novas tecnologias,
            contribuir para projetos de código aberto e escrever sobre minhas
            descobertas no meu blog.
          </p>
        </div>
        <div className="md:w-1/3">
          <Image
            src="/coding.png"
            alt="Minha foto"
            width={400}
            height={400}
            className="rounded-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
