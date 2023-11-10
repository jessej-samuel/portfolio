import { cookies } from "next/headers";
import { NextRequest } from "next/server";

import { PrismaClient } from "@prisma/client";
import { formatCount } from "@/utils/formatting";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const cookieStore = cookies();
  const visitCookie = cookieStore.get("visited");

  // todo: update database with view
  await prisma.stats.updateMany({
    where: {},
    data: {
      views: {
        increment: 1,
      },
    },
  });
  const stats = await prisma.stats.findMany({
    where: {
      views: {
        gte: 0,
      },
    },
  });
  const res = {
    views: formatCount(stats[0].views),
    visitors: formatCount(stats[0].visitors),
  };

  if (visitCookie) {
    return new Response(JSON.stringify(stats[0]), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // TODO: Update database with visit
  const newStats = await prisma.stats
    .updateMany({
      where: {},
      data: {
        visitors: {
          increment: 1,
        },
      },
    })
    .then(() =>
      prisma.stats.findMany({
        where: {
          views: {
            gte: 0,
          },
        },
      })
    );

  return new Response(JSON.stringify(newStats), {
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": `visited=1`,
    },
  });
}
