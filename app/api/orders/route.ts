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

// GET - Logged-in user's orders
export async function GET() {
  try {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        {
          error: "Please sign in",
        },
        { status: 401 }
      );
    }

    const orders = await prisma.order.findMany({
      where: {
        userId,
      },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      orders,
    });
  } catch (error) {
    console.error("Get orders error:", error);

    return NextResponse.json(
      {
        error: "Failed to get orders",
      },
      { status: 500 }
    );
  }
}

// POST - Create order
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      phone,
      city,
      address,
      notes,
      paymentMethod,
      items,
    } = body;

    // Logged-in user
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json(
        {
          error:
            "Please sign in before placing an order",
        },
        { status: 401 }
      );
    }

    // Check user
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        { status: 401 }
      );
    }

    // Check delivery information
    if (
      !firstName ||
      !lastName ||
      !phone ||
      !city ||
      !address
    ) {
      return NextResponse.json(
        {
          error:
            "Please fill in all delivery information",
        },
        { status: 400 }
      );
    }

    // Check cart
    if (!items || items.length === 0) {
      return NextResponse.json(
        {
          error: "Cart is empty",
        },
        { status: 400 }
      );
    }

    // Product IDs
    const productIds = items.map(
      (item: { id: string }) => item.id
    );

    // Get products from database
    const products = await prisma.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      },
    });

    if (products.length !== items.length) {
      return NextResponse.json(
        {
          error:
            "One or more products were not found",
        },
        { status: 400 }
      );
    }

    // Calculate subtotal
    let subtotal = 0;

    const orderItems = items.map(
      (item: {
        id: string;
        quantity: number;
      }) => {
        const product = products.find(
          (product) => product.id === item.id
        );

        if (!product) {
          throw new Error("Product not found");
        }

        subtotal +=
          product.price * item.quantity;

        return {
          productId: product.id,
          quantity: item.quantity,
          price: product.price,
        };
      }
    );

    const delivery = 2.99;
    const total = subtotal + delivery;

    // Create order
    const order = await prisma.order.create({
      data: {
        userId,

        firstName,
        lastName,
        phone,
        city,
        address,
        notes: notes || null,
        paymentMethod: paymentMethod || "card",

        total,

        items: {
          create: orderItems,
        },
      },

      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },

        items: {
          include: {
            product: true,
          },
        },
      },
    });

    return NextResponse.json(
      {
        message: "Order created successfully",
        order,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(
      "Create order error:",
      error
    );

    return NextResponse.json(
      {
        error: "Failed to create order",
      },
      { status: 500 }
    );
  }
}