"use client";

import { useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const products = [
  {
    id: 1,
    name: "Classic Cheese Burger",
    description: "Juicy beef with melted cheese",
    price: "$8.99",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },
  {
    id: 2,
    name: "Crispy Chicken Burger",
    description: "Golden fried chicken fillet",
    price: "$9.99",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
  },
  {
    id: 3,
    name: "Double Cheese Delight",
    description: "Double beef, double cheese",
    price: "$11.99",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    id: 4,
    name: "Spicy Chicken",
    description: "Hot & spicy fried chicken",
    price: "$9.49",
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
  },
  {
    id: 5,
    name: "BBQ Bacon Burger",
    description: "Smoky BBQ with crispy bacon",
    price: "$10.99",
    category: "Burgers",
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b",
  },
  {
    id: 6,
    name: "Chicken Nuggets",
    description: "10 pieces golden nuggets",
    price: "$6.99",
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710",
  },
  {
    id: 7,
    name: "Crispy Fried Chicken",
    description: "2 pieces with fries",
    price: "$8.99",
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58",
  },
  {
    id: 8,
    name: "Spicy Wings",
    description: "6 pieces hot wings",
    price: "$7.99",
    category: "Chicken",
    image:
      "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f",
  },
];

const categories = ["All", "Burgers", "Chicken", "Sides", "Meals"];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { addToCart } = useCart();

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section id="menu" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title */}
        <div className="text-center">
          <p className="text-sm font-medium tracking-wider text-red-500">
            MENU
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-gray-800">
            Choose Your Favorite
          </h2>
        </div>

        {/* Categories */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-lg px-5 py-2 text-sm transition ${
                activeCategory === category
                  ? "bg-red-600 text-white"
                  : "border border-gray-300 bg-white text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />

                  <span className="absolute left-3 top-3 rounded-md bg-red-600 px-3 py-1 text-xs font-medium text-white">
                    ★ Popular
                  </span>

                  <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white">
                    <Heart size={18} className="text-red-500" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-medium text-gray-800">
                      {product.name}
                    </h3>

                    <span className="text-sm font-medium text-red-600">
                      {product.price}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-gray-500">
                    {product.description}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-2.5 text-sm font-medium text-white transition hover:bg-red-700"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-10 text-center text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </section>
  );
}