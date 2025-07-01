import { getProjectBySlug } from '@/lib/content'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type ProjectPageProps = {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  if (!project) {
    return {}
  }
  return {
    title: project.name,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <h1 className="text-4xl font-extrabold">{project.name}</h1>
    </article>
  )
}
