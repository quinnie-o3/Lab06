export async function GET(request) {
  const apiKey = process.env.API_KEY;
  const headerKey = request.headers.get("x-api-key");

  if (!apiKey || headerKey !== apiKey) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  return Response.json({ secret: "Next.js is cool" });
}
