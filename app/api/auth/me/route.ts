import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";

const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});

export async function GET() {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json({
        user: null,
      });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      }
    });

    if (!user) {
      return NextResponse.json({
        user: null,
      });
    }

    return NextResponse.json({
      user,
    });
  } catch (error) {
    console.error("Get user error:", error);

    return NextResponse.json(
      {
        error: "Failed to get user",
      },
      { status: 500 }
    );
  }
}