"use client";

import Link from "next/link";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";

import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

type ProductDetailProps = {
  id: string;
};

export default function ProductDetail({
  id,
}: ProductDetailProps) {
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Product Not Found
          </h1>

          <Link
            href="/#menu"
            className="mt-5 inline-block rounded-lg bg-red-600 px-6 py-3 text-white"
          >
            Back to Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Back */}
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/#menu"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-red-600"
        >
          <ArrowLeft size={18} />
          Back to Menu
        </Link>
      </div>

      {/* Product */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-12 rounded-3xl bg-white p-8 shadow-sm md:grid-cols-2">

          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="h-[450px] w-full object-cover"
            />

            <button
              type="button"
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow"
            >
              <Heart
                size={21}
                className="text-red-500"
              />
            </button>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">

            <span className="mb-4 w-fit rounded-md bg-red-100 px-3 py-1 text-sm font-medium text-red-600">
              {product.category}
            </span>

            <h1 className="text-4xl font-bold text-gray-800">
              {product.name}
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-500">
              {product.description}
            </p>

            <div className="mt-6">
              <span className="text-3xl font-bold text-red-600">
                {product.price}
              </span>
            </div>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-2">
              <span className="text-yellow-400">
                ★★★★★
              </span>

              <span className="text-sm text-gray-500">
                4.9 (120 reviews)
              </span>
            </div>

            {/* Add Cart */}
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition hover:bg-red-700"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            {/* Extra info */}
            <div className="mt-8 grid grid-cols-3 gap-3">

              <div className="rounded-xl bg-gray-50 p-4 text-center">
                <p className="text-xl">🔥</p>
                <p className="mt-1 text-xs text-gray-500">
                  Fresh
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4 text-center">
                <p className="text-xl">🚚</p>
                <p className="mt-1 text-xs text-gray-500">
                  Fast Delivery
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4 text-center">
                <p className="text-xl">⭐</p>
                <p className="mt-1 text-xs text-gray-500">
                  Top Rated
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}