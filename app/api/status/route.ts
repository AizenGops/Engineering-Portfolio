import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { ProjectStatus } from "@/data/projects";

const overridesPath = path.join(process.cwd(), "data", "status-overrides.json");

async function readOverrides(): Promise<Record<string, ProjectStatus>> {
  try {
    const raw = await readFile(overridesPath, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export async function GET() {
  const overrides = await readOverrides();
  return NextResponse.json(overrides);
}

export async function POST(req: NextRequest) {
  const { slug, status } = (await req.json()) as { slug: string; status: ProjectStatus };
  if (!slug || !status) {
    return NextResponse.json({ error: "slug and status are required" }, { status: 400 });
  }

  const overrides = await readOverrides();
  overrides[slug] = status;
  await writeFile(overridesPath, JSON.stringify(overrides, null, 2));

  return NextResponse.json({ slug, status });
}
