/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Project {
  name: string
  description: string
  slug: string
  techs: string[]
  images: string[] | null
}

const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

const getTechs = async (projectSlug: string): Promise<string[]> => {
  try {
    const res = await fetch(
      `https://raw.githubusercontent.com/Joao-Bonifacio/${projectSlug}/main/techs.json`,
    )

    if (!res.ok) {
      if (res.status === 404) return []
      throw new Error(`Error to fetch tech list for ${projectSlug}`)
    }

    const data: string[] = await res.json()
    return data
  } catch (err) {
    console.error(`getTechs() failed for ${projectSlug}:`, err)
    return []
  }
}

const getImages = async (projectSlug: string): Promise<string[]> => {
  const baseUrl = `https://raw.githubusercontent.com/Joao-Bonifacio/${projectSlug}/main/screenshots`
  const images: string[] = []

  for (let i = 0; i < 20; i++) {
    const url = `${baseUrl}/${i}.png`

    const res = await fetch(url)
    if (!res.ok) break

    images.push(url)
  }

  return images
}

let projectsData: Project[] = []

export async function getAllProjects(): Promise<Project[]> {
  if (projectsData.length > 0) return projectsData

  const res = await fetch('https://api.github.com/users/Joao-Bonifacio/repos')
  if (!res.ok) throw new Error('Error to fetch GitHub repositories data.')

  const fetchedData = await res.json()
  const data = fetchedData.filter(
    (project: any) => project.description !== null,
  )

  projectsData = await Promise.all(
    data.map(async (repo: any) => {
      const slug = slugify(repo.name)

      let techs: string[] = []
      let images: string[] | null = null

      try {
        techs = await getTechs(slug)
      } catch (err) {
        console.error(`Failed to fetch techs for ${slug}:`, err)
      }

      try {
        images = await getImages(slug)
      } catch (err) {
        console.error(`Failed to fetch images for ${slug}:`, err)
      }

      return {
        name: repo.name,
        description: repo.description,
        slug,
        techs,
        images,
      }
    }),
  )

  return projectsData
}

export async function getProjectBySlug(
  slug: string,
): Promise<Project | undefined> {
  const projects = await getAllProjects()
  return projects.find((project) => project.slug === slug)
}
