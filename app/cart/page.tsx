"use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) =>
      sum +
      Number(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Your Cart
          </h1>

          {cart.length === 0 ? (
            <div className="mt-10 rounded-xl bg-white p-10 text-center shadow-sm">
              Your cart is empty 🛒
            </div>
          ) : (
            <>
              <div className="mt-8 space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-5 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-24 w-24 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <h2 className="font-semibold">{item.name}</h2>

                      <p className="text-gray-500">
                        {item.description}
                      </p>

                      <p className="mt-2 text-red-600">
                        {item.price} × {item.quantity}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600"
                    >
                      <Trash2 />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between rounded-xl bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold">
                  ${total.toFixed(2)}
                </h2>

                <button className="rounded-lg bg-red-600 px-8 py-3 text-white">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}