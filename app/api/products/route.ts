import { NextResponse } from "next/server";
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
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
      orderBy: {
        id: "asc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error("Products API error:", error);

    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}