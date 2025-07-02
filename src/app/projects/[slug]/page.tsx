import { getAllProjects } from '@/utils/content'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
  searchParams?: Promise<Record<string, string | string[] | undefined>>
}

let cachedProjects: Awaited<ReturnType<typeof getAllProjects>> | null = null

async function getProjectBySlug(slug: string) {
  if (!cachedProjects) cachedProjects = await getAllProjects()
  return cachedProjects.find((p) => p.slug === slug)
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  return {
    title: project.name,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)

  if (!project) return notFound()

  return (
    <div className="container mx-auto max-w-4xl py-16 px-4">
      <h1 className="mb-4 text-4xl font-bold tracking-tight">{project.name}</h1>
      <p className="text-muted-foreground mb-6 text-lg">
        {project.description}
      </p>
      <div className="mb-8 flex flex-wrap gap-2">
        {project.techs.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
      {project.images && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {project.images.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-video w-full overflow-hidden rounded-lg border"
            >
              <Image
                src={src}
                alt={`${project.name} screenshot ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
