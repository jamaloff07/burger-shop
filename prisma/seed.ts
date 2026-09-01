import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../app/generated/prisma/client";


const connectionString = process.env.DATABASE_URL!;

const adapter = new PrismaPg({
  connectionString,
});

const prisma = new PrismaClient({
  adapter,
});


async function main() {
  console.log("🌱 Seeding database...");

  // Köhnə məlumatları təmizlə
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // Categories
  const burgers = await prisma.category.create({
    data: {
      name: "Burgers",
    },
  });

  const chicken = await prisma.category.create({
    data: {
      name: "Chicken",
    },
  });

  const sides = await prisma.category.create({
    data: {
      name: "Sides",
    },
  });

  const meals = await prisma.category.create({
    data: {
      name: "Meals",
    },
  });

  // Products
  await prisma.product.createMany({
    data: [
      {
        name: "Classic Cheese Burger",
        description: "Juicy beef with melted cheese",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
        categoryId: burgers.id,
      },
      {
        name: "Crispy Chicken Burger",
        description: "Golden fried chicken fillet",
        price: 9.99,
        image:
          "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
        categoryId: burgers.id,
      },
      {
        name: "Double Cheese Delight",
        description: "Double beef, double cheese",
        price: 11.99,
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349",
        categoryId: burgers.id,
      },
      {
        name: "Spicy Chicken",
        description: "Hot & spicy fried chicken",
        price: 9.49,
        image:
          "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
        categoryId: chicken.id,
      },
      {
        name: "BBQ Bacon Burger",
        description: "Smoky BBQ with crispy bacon",
        price: 10.99,
        image:
          "https://images.unsplash.com/photo-1550317138-10000687a72b",
        categoryId: burgers.id,
      },
      {
        name: "Chicken Nuggets",
        description: "10 pieces golden nuggets",
        price: 6.99,
        image:
          "https://images.unsplash.com/photo-1562967914-608f82629710",
        categoryId: chicken.id,
      },
      {
        name: "Crispy Fried Chicken",
        description: "2 pieces with fries",
        price: 8.99,
        image:
          "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58",
        categoryId: chicken.id,
      },
      {
        name: "Spicy Wings",
        description: "6 pieces hot wings",
        price: 7.99,
        image:
          "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f",
        categoryId: chicken.id,
      },
    ],
  });

  console.log("✅ Categories created");
  console.log("✅ Products created");
  console.log("🎉 Database seeded successfully!");
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });