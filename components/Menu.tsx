"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";

import { useCart, Product } from "@/context/CartContext";

const categories = [
  "All",
  "Burgers",
  "Chicken",
  "Sides",
  "Meals",
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  // Get products from API
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error("Products error:", error);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category?.name === activeCategory
        );

  return (
    <section
      id="menu"
      className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Title */}
        <div className="text-center">
          <p className="text-xs font-medium tracking-wider text-red-500 sm:text-sm">
            MENU
          </p>

          <h2 className="mt-2 text-xl font-semibold text-gray-800 sm:text-2xl">
            Choose Your Favorite
          </h2>
        </div>

        {/* Categories */}
        <div className="mt-7 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-lg px-4 py-2 text-xs transition sm:px-5 sm:text-sm ${
                activeCategory === category
                  ? "bg-red-600 text-white"
                  : "border border-gray-300 bg-white text-gray-700 hover:border-red-500 hover:text-red-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading ? (
          <div className="mt-16 text-center text-sm text-gray-500">
            Loading products...
          </div>
        ) : filteredProducts.length > 0 ? (

          /* Products */
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                {/* Image */}
                <div className="relative h-52 overflow-hidden sm:h-56 lg:h-48">

                  <Link href={`/products/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-300 hover:scale-105"
                    />
                  </Link>

                  {/* Popular */}
                  <span className="absolute left-3 top-3 rounded-md bg-red-600 px-2.5 py-1 text-[10px] font-medium text-white sm:text-xs">
                    ★ Popular
                  </span>

                  {/* Favorite */}
                  <button
                    type="button"
                    className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"
                  >
                    <Heart
                      size={17}
                      className="text-red-500"
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">

                  {/* Name + Price */}
                  <div className="flex items-start justify-between gap-2">

                    <Link
                      href={`/products/${product.id}`}
                      className="text-sm font-medium text-gray-800 hover:text-red-600 sm:text-base"
                    >
                      {product.name}
                    </Link>

                    <span className="shrink-0 text-sm font-medium text-red-600">
                      ${product.price.toFixed(2)}
                    </span>

                  </div>

                  {/* Description */}
                  <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                    {product.description}
                  </p>

                  {/* Add To Cart */}
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-2.5 text-xs font-medium text-white transition hover:bg-red-700 sm:text-sm"
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>

                </div>
              </div>
            ))}

          </div>
        ) : (
          <div className="mt-10 text-center text-sm text-gray-500">
            No products found.
          </div>
        )}

      </div>
    </section>
  );
}