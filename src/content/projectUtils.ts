import type { Project } from "@/types/projects";
import { projects } from "./projects";

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getPrevNextProject(slug: string): {
  prev?: Project;
  next?: Project;
} {
  const currentProject = getProjectBySlug(slug);
  if (!currentProject) {
    return {};
  }
  const sortedProjects = [...projects].sort((a, b) => a.order - b.order);
  const currentIndex = sortedProjects.findIndex(
    (p) => p.slug === currentProject.slug
  );
  return {
    prev: currentIndex > 0 ? sortedProjects[currentIndex - 1] : undefined,
    next:
      currentIndex < sortedProjects.length - 1
        ? sortedProjects[currentIndex + 1]
        : undefined,
  };
}
