"use client";

import Link from "next/link";
import { ArrowLeft, CreditCard, MapPin } from "lucide-react";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const subtotal = cart.reduce((total, item) => {
    const price = Number(item.price.replace("$", ""));
    return total + price * item.quantity;
  }, 0);

  const delivery = cart.length > 0 ? 2.99 : 0;
  const total = subtotal + delivery;

  if (cart.length === 0) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
          <div className="text-center">
            <div className="text-5xl sm:text-6xl">🛒</div>

            <h1 className="mt-5 text-xl font-bold text-gray-800 sm:text-2xl">
              Your cart is empty
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Add some products before checkout.
            </p>

            <Link
              href="/#menu"
              className="mt-6 inline-block rounded-xl bg-red-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-red-700"
            >
              Go to Menu
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">

          {/* Back */}
          <Link
            href="/cart"
            className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-red-600"
          >
            <ArrowLeft size={18} />
            Back to Cart
          </Link>

          {/* Title */}
          <h1 className="mt-5 text-2xl font-bold text-gray-800 sm:mt-6 sm:text-3xl">
            Checkout
          </h1>

          {/* Main */}
          <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-3 lg:gap-8">

            {/* Forms */}
            <div className="space-y-5 lg:col-span-2 lg:space-y-6">

              {/* Delivery */}
              <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">

                <div className="flex items-center gap-3">
                  <MapPin
                    className="text-red-600"
                    size={21}
                  />

                  <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
                    Delivery Information
                  </h2>
                </div>

                <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">

                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  />

                  <input
                    type="text"
                    placeholder="City"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  />

                  <input
                    type="text"
                    placeholder="Address"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500 sm:col-span-2"
                  />

                  <textarea
                    placeholder="Additional notes"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500 sm:col-span-2"
                  />

                </div>
              </div>

              {/* Payment */}
              <div className="rounded-2xl bg-white p-5 shadow-sm sm:p-6">

                <div className="flex items-center gap-3">
                  <CreditCard
                    className="text-red-600"
                    size={21}
                  />

                  <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
                    Payment Information
                  </h2>
                </div>

                <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">

                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  />

                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">

                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                    />

                    <input
                      type="text"
                      placeholder="CVV"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                    />

                  </div>
                </div>
              </div>

            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-2xl bg-white p-5 shadow-sm sm:p-6">

              <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
                Your Order
              </h2>

              <div className="mt-5 space-y-4 sm:mt-6">

                {cart.map((item) => {
                  const price = Number(
                    item.price.replace("$", "")
                  );

                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-gray-800">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <span className="shrink-0 text-sm font-medium text-gray-800">
                        ${(price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  );
                })}

              </div>

              {/* Totals */}
              <div className="mt-5 space-y-3 border-t pt-5 sm:mt-6">

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm text-gray-500">
                  <span>Delivery</span>
                  <span>${delivery.toFixed(2)}</span>
                </div>

                <div className="flex justify-between border-t pt-4">
                  <span className="font-semibold">
                    Total
                  </span>

                  <span className="text-lg font-bold text-red-600 sm:text-xl">
                    ${total.toFixed(2)}
                  </span>
                </div>

              </div>

              {/* Place Order */}
              <button
                type="button"
                className="mt-5 w-full rounded-xl bg-red-600 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 sm:mt-6"
              >
                Place Order
              </button>

            </div>

          </div>
        </div>
      </main>
    </>
  );
}