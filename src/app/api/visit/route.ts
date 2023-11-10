import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const visitCookie = cookieStore.get("visited");

  // todo: update database with view

  if (visitCookie) {
    return new Response("alr visited", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // TODO: Update database with visit

  return new Response(JSON.stringify({ visitCookie }), {
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `visited=1`,
    },
  });
}
