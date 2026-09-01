"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ShoppingCart, Heart } from "lucide-react";

import { useCart, Product } from "@/context/CartContext";

type ProductDetailProps = {
  id: string;
};

export default function ProductDetail({
  id,
}: ProductDetailProps) {
  const { addToCart } = useCart();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(`/api/products/${id}`);

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.error("Product error:", error);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    getProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-sm text-gray-500">
          Loading product...
        </p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Product Not Found
          </h1>

          <Link
            href="/#menu"
            className="mt-5 inline-block rounded-xl bg-red-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Back to Menu
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 sm:py-12">

      {/* Back */}
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#menu"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-red-600"
        >
          <ArrowLeft size={18} />
          Back to Menu
        </Link>
      </div>

      {/* Product */}
      <section className="mx-auto max-w-6xl py-8 sm:py-12">
        <div className="grid gap-7 rounded-3xl bg-white p-5 shadow-sm sm:p-8 md:grid-cols-2 md:gap-10 lg:gap-12">

          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl">

            <img
              src={product.image}
              alt={product.name}
              className="h-[300px] w-full object-cover sm:h-[400px] md:h-[450px]"
            />

            <button
              type="button"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow sm:right-5 sm:top-5 sm:h-11 sm:w-11"
            >
              <Heart
                size={20}
                className="text-red-500"
              />
            </button>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <span className="mb-3 w-fit rounded-md bg-red-100 px-3 py-1 text-xs font-medium text-red-600 sm:mb-4 sm:text-sm">
              {product.category?.name}
            </span>

            {/* Name */}
            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl">
              {product.name}
            </h1>

            {/* Description */}
            <p className="mt-4 text-sm leading-7 text-gray-500 sm:mt-5 sm:text-base lg:text-lg lg:leading-8">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-5 sm:mt-6">
              <span className="text-2xl font-bold text-red-600 sm:text-3xl">
                ${product.price.toFixed(2)}
              </span>
            </div>

            {/* Rating */}
            <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-5">
              <span className="text-yellow-400">
                ★★★★★
              </span>

              <span className="text-xs text-gray-500 sm:text-sm">
                4.9 (120 reviews)
              </span>
            </div>

            {/* Add Cart */}
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:mt-8 sm:py-4"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            {/* Extra info */}
            <div className="mt-6 grid grid-cols-3 gap-2 sm:mt-8 sm:gap-3">

              <div className="rounded-xl bg-gray-50 p-3 text-center sm:p-4">
                <p className="text-lg sm:text-xl">
                  🔥
                </p>

                <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                  Fresh
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-3 text-center sm:p-4">
                <p className="text-lg sm:text-xl">
                  🚚
                </p>

                <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                  Fast Delivery
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-3 text-center sm:p-4">
                <p className="text-lg sm:text-xl">
                  ⭐
                </p>

                <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
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