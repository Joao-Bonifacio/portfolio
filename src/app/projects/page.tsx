import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    title: 'Dashboard Financeiro',
    slug: 'dashboard-financeiro',
    description:
      'Aplicação fullstack para controle de finanças com Next.js, NestJS, PostgreSQL e Recharts.',
    techs: ['Next.js', 'NestJS', 'PostgreSQL', 'Recharts'],
  },
  {
    title: 'Plataforma de Cursos',
    slug: 'plataforma-cursos',
    description:
      'Sistema de ensino com autenticação, upload de vídeos e trilhas de aprendizado.',
    techs: ['React', 'Node.js', 'MongoDB', 'Docker'],
  },
  {
    title: 'Monitoramento de Serviços',
    slug: 'monitoramento',
    description:
      'Infraestrutura com Prometheus, Grafana, OpenTelemetry e alertas automatizados.',
    techs: ['Kubernetes', 'Grafana', 'Prometheus', 'OpenTelemetry'],
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-5xl py-16 px-4 min-h-[80vh]">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-center">
        Projetos
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
