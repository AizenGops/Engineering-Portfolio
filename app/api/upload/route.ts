import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir, readFile } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const slug = formData.get("slug") as string | null;

  if (!file || !slug) {
    return NextResponse.json({ error: "Missing file or slug" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const dir = path.join(process.cwd(), "public", "images", slug);
  await mkdir(dir, { recursive: true });

  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const filename = `${Date.now()}_${safeName}`;
  await writeFile(path.join(dir, filename), buffer);

  const imagePath = `/images/${slug}/${filename}`;

  // Persist to uploads.json
  const uploadsPath = path.join(process.cwd(), "data", "uploads.json");
  let uploads: Record<string, string[]> = {};
  try {
    uploads = JSON.parse(await readFile(uploadsPath, "utf-8"));
  } catch {}

  if (!uploads[slug]) uploads[slug] = [];
  uploads[slug].push(imagePath);
  await writeFile(uploadsPath, JSON.stringify(uploads, null, 2));

  return NextResponse.json({ path: imagePath });
}

export async function DELETE(request: NextRequest) {
  const { slug, path: imgPath } = await request.json();

  if (!slug || !imgPath) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Remove from uploads.json
  const uploadsPath = path.join(process.cwd(), "data", "uploads.json");
  let uploads: Record<string, string[]> = {};
  try {
    uploads = JSON.parse(await readFile(uploadsPath, "utf-8"));
  } catch {}

  if (uploads[slug]) {
    uploads[slug] = uploads[slug].filter((p) => p !== imgPath);
  }
  await writeFile(uploadsPath, JSON.stringify(uploads, null, 2));

  // Delete the file from disk
  try {
    const { unlink } = await import("fs/promises");
    await unlink(path.join(process.cwd(), "public", imgPath));
  } catch {}

  return NextResponse.json({ ok: true });
}
