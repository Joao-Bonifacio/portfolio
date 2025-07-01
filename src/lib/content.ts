interface ProjectContent {
  situation: string
  task: string
  action: string
  result: string
}

interface Project {
  name: string
  description: string
  slug: string
  liveUrl: string
  githubUrl: string
  content: ProjectContent
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

let projectsData: Project[] = []

export async function getAllProjects(): Promise<Project[]> {
  if (projectsData.length > 0) return projectsData

  const res = await fetch('https://api.github.com/users/Joao-Bonifacio/repos')
  if (!res.ok) throw new Error('Erro ao buscar projetos do GitHub')

  const data = await res.json()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  projectsData = data.map((repo: any) => ({
    slug: slugify(repo.name),
    liveUrl: repo.homepage || repo.html_url,
    githubUrl: repo.html_url,
    content: {
      situation: `Repositório ${repo.name} criado por Joao Bonifácio.`,
      task: `Explorar e manter o projeto ${repo.name}.`,
      action: `Código disponível em ${repo.html_url}.`,
      result: `Veja o repositório para mais informações ou exemplos.`,
    },
  }))

  return projectsData
}

export async function getProjectBySlug(
  slug: string,
): Promise<Project | undefined> {
  const projects = await getAllProjects()
  return projects.find((p) => p.slug === slug)
}
