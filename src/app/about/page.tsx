import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre | João Junior',
  description:
    'Saiba mais sobre mim, minha trajetória como desenvolvedor e minhas principais competências.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 px-4 min-h-[78vh]">
      <h1 className="text-4xl font-bold mb-6 tracking-tight">Sobre mim</h1>

      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        Olá! Meu nome é{' '}
        <span className="font-semibold text-foreground">João Junior</span> e sou
        desenvolvedor full stack com experiência em frontend, backend, DevOps e
        infraestrutura. Atuo com tecnologias modernas como{' '}
        <strong>TypeScript</strong>, <strong>React</strong>,{' '}
        <strong>Next.js</strong>, <strong>NestJS</strong>,
        <strong> Docker</strong>, <strong>Kubernetes</strong> e bancos de dados
        relacionais e não relacionais.
      </p>

      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        Tenho paixão por construir soluções escaláveis, bem estruturadas e com
        foco em performance e boas práticas de código. Gosto de me envolver em
        todo o ciclo de desenvolvimento — da concepção à produção — e tenho
        familiaridade com testes, automações (CI/CD), observabilidade e deploy
        em ambientes cloud.
      </p>

      <p className="text-muted-foreground text-lg leading-relaxed mb-4">
        Além disso, mantenho um mindset de aprendizado contínuo e valorizo a
        colaboração em equipes ágeis, comunicação clara e foco em entregar valor
        real ao usuário.
      </p>

      <p className="text-muted-foreground text-lg leading-relaxed">
        Este portfólio é um reflexo do meu trabalho, comprometimento e evolução
        como profissional. Fique à vontade para explorar meus projetos e entrar
        em contato.
      </p>
    </div>
  )
}
