import { fetcher } from "@/utils/fetcher";

export async function GET() {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/768016269269925911", {
      next: {
        revalidate: 60
      }
    }
  );

  return Response.json(res);
}
