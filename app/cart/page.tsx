"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ArrowLeft } from "lucide-react";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const delivery = cart.length > 0 ? 2.99 : 0;

  const total = subtotal + delivery;

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/#menu"
              className="mb-4 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-red-600"
            >
              <ArrowLeft size={18} />
              Continue Shopping
            </Link>

            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Your Cart
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {cart.length === 0
                ? "Your cart is empty"
                : `${cart.length} different product${
                    cart.length > 1 ? "s" : ""
                  }`}
            </p>
          </div>

          {/* Empty Cart */}
          {cart.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm sm:p-16">
              <div className="text-5xl sm:text-6xl">
                🛒
              </div>

              <h2 className="mt-5 text-xl font-semibold text-gray-800 sm:text-2xl">
                Your cart is empty
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Add some delicious burgers to your cart.
              </p>

              <Link
                href="/#menu"
                className="mt-6 inline-block rounded-xl bg-red-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-red-700 sm:px-8"
              >
                Browse Menu
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">

              {/* Cart Items */}
              <div className="space-y-4 lg:col-span-2">
                {cart.map((item) => {
                  const itemTotal = item.price * item.quantity;

                  return (
                    <div
                      key={item.id}
                      className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm sm:gap-5 sm:p-5"
                    >

                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
                      />

                      {/* Information */}
                      <div className="flex min-w-0 flex-1 flex-col justify-between">

                        {/* Top */}
                        <div>
                          <div className="flex items-start justify-between gap-2 sm:gap-4">

                            <div className="min-w-0">
                              <h2 className="truncate text-sm font-semibold text-gray-800 sm:text-base">
                                {item.name}
                              </h2>

                              <p className="mt-1 line-clamp-2 text-xs text-gray-500 sm:text-sm">
                                {item.description}
                              </p>
                            </div>

                            {/* Delete */}
                            <button
                              type="button"
                              onClick={() =>
                                removeFromCart(item.id)
                              }
                              className="shrink-0 text-gray-400 transition hover:text-red-600"
                            >
                              <Trash2 size={18} />
                            </button>

                          </div>
                        </div>

                        {/* Bottom */}
                        <div className="mt-3 flex items-end justify-between gap-3 sm:mt-4">

                          {/* Quantity */}
                          <div className="flex items-center rounded-lg border border-gray-200">

                            <button
                              type="button"
                              onClick={() =>
                                decreaseQuantity(item.id)
                              }
                              className="flex h-8 w-8 items-center justify-center text-gray-600 transition hover:text-red-600 sm:h-9 sm:w-9"
                            >
                              <Minus size={15} />
                            </button>

                            <span className="w-7 text-center text-sm font-medium">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                increaseQuantity(item.id)
                              }
                              className="flex h-8 w-8 items-center justify-center text-gray-600 transition hover:text-red-600 sm:h-9 sm:w-9"
                            >
                              <Plus size={15} />
                            </button>

                          </div>

                          {/* Price */}
                          <div className="shrink-0 text-right">

                            <p className="text-[10px] text-gray-400 sm:text-xs">
                              ${item.price.toFixed(2)} each
                            </p>

                            <p className="text-sm font-bold text-red-600 sm:text-base">
                              ${itemTotal.toFixed(2)}
                            </p>

                          </div>

                        </div>

                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Summary */}
              <div className="h-fit rounded-2xl bg-white p-5 shadow-sm sm:p-6">

                <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
                  Order Summary
                </h2>

                <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Delivery</span>
                    <span>${delivery.toFixed(2)}</span>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between">

                      <span className="text-base font-semibold sm:text-lg">
                        Total
                      </span>

                      <span className="text-lg font-bold text-red-600 sm:text-xl">
                        ${total.toFixed(2)}
                      </span>

                    </div>
                  </div>

                </div>

                <Link
                  href="/checkout"
                  className="mt-5 block w-full rounded-xl bg-red-600 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-700 sm:mt-6 sm:py-3.5"
                >
                  Checkout
                </Link>

              </div>

            </div>
          )}
        </div>
      </main>
    </>
  );
}