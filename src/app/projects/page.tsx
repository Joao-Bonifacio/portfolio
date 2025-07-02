import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { getAllProjects } from '@/utils/content'

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="container mx-auto max-w-5xl py-16 px-4 min-h-[78vh]">
      <h1 className="mb-8 text-4xl font-bold tracking-tight text-center">
        Projetos
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <Card className="hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
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
