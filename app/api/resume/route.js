import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "EsakkiammalDeveloper.pdf"
  );
  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="EsakkiammalDeveloper.pdf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
