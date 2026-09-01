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

    if (
      !firstName ||
      !lastName ||
      !phone ||
      !city ||
      !address
    ) {
      return NextResponse.json(
        {
          error: "Please fill in all delivery information",
        },
        { status: 400 }
      );
    }

    if (!items || items.length === 0) {
      return NextResponse.json(
        {
          error: "Cart is empty",
        },
        { status: 400 }
      );
    }

    const productIds = items.map(
      (item: { id: string }) => item.id
    );

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
          error: "One or more products were not found",
        },
        { status: 400 }
      );
    }

    let subtotal = 0;

    const orderItems = items.map(
      (item: { id: string; quantity: number }) => {
        const product = products.find(
          (product) => product.id === item.id
        );

        if (!product) {
          throw new Error("Product not found");
        }

        subtotal += product.price * item.quantity;

        return {
          productId: product.id,
          quantity: item.quantity,
          price: product.price,
        };
      }
    );

    const delivery = 2.99;
    const total = subtotal + delivery;

    const order = await prisma.order.create({
      data: {
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
    console.error("Create order error:", error);

    return NextResponse.json(
      {
        error: "Failed to create order",
      },
      { status: 500 }
    );
  }
}