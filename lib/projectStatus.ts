import { readFile } from "fs/promises";
import path from "path";
import { Project, ProjectStatus } from "@/data/projects";

const statusOrder: Record<ProjectStatus, number> = {
  completed: 0,
  "in-progress": 1,
  pending: 2,
};

export async function getStatusOverrides(): Promise<Record<string, ProjectStatus>> {
  try {
    const overridesPath = path.join(process.cwd(), "data", "status-overrides.json");
    const raw = await readFile(overridesPath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function withEffectiveStatus(
  projects: Project[],
  overrides: Record<string, ProjectStatus>
): Project[] {
  return projects.map((p) =>
    overrides[p.slug] ? { ...p, status: overrides[p.slug] } : p
  );
}

export function sortByStatus(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
}
