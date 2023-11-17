import { fetcher } from "@/utils/fetcher";

export async function GET() {
  const res = await fetcher(
    "https://api.lanyard.rest/v1/users/768016269269925911"
  );

  return Response.json(res);
}
