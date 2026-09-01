"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, CreditCard, MapPin } from "lucide-react";

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const {
    cart,
  } = useCart();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const subtotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const delivery = cart.length > 0 ? 2.99 : 0;
  const total = subtotal + delivery;

  const handlePlaceOrder = async () => {
    setError("");

    if (
      !firstName ||
      !lastName ||
      !phone ||
      !city ||
      !address
    ) {
      setError("Please fill in all delivery information.");
      return;
    }

    if (!cardNumber || !expiry || !cvv) {
      setError("Please fill in your payment information.");
      return;
    }

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          phone,
          city,
          address,
          notes,
          paymentMethod: "card",

          items: cart.map((item) => ({
            id: item.id,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Failed to create order"
        );
      }

      window.location.href = `/order-success/${data.order.id}`;
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
          <div className="text-center">
            <div className="text-5xl sm:text-6xl">
              🛒
            </div>

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

          {/* Error */}
          {error && (
            <div className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

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
                    value={firstName}
                    onChange={(e) =>
                      setFirstName(e.target.value)
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) =>
                      setLastName(e.target.value)
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value)
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  />

                  <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) =>
                      setCity(e.target.value)
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  />

                  <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) =>
                      setAddress(e.target.value)
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500 sm:col-span-2"
                  />

                  <textarea
                    placeholder="Additional notes"
                    rows={4}
                    value={notes}
                    onChange={(e) =>
                      setNotes(e.target.value)
                    }
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
                    value={cardNumber}
                    onChange={(e) =>
                      setCardNumber(e.target.value)
                    }
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                  />

                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">

                    <input
                      type="text"
                      placeholder="MM / YY"
                      value={expiry}
                      onChange={(e) =>
                        setExpiry(e.target.value)
                      }
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                    />

                    <input
                      type="password"
                      placeholder="CVV"
                      value={cvv}
                      onChange={(e) =>
                        setCvv(e.target.value)
                      }
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
                    />

                  </div>

                  <p className="text-xs text-gray-400">
                    Your card details are not stored in our database.
                  </p>

                </div>
              </div>

            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-2xl bg-white p-5 shadow-sm sm:p-6">

              <h2 className="text-lg font-semibold text-gray-800 sm:text-xl">
                Your Order
              </h2>

              <div className="mt-5 space-y-4 sm:mt-6">

                {cart.map((item) => (
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
                      $
                      {(item.price * item.quantity).toFixed(
                        2
                      )}
                    </span>
                  </div>
                ))}

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
                onClick={handlePlaceOrder}
                disabled={loading}
                className="mt-5 w-full rounded-xl bg-red-600 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60 sm:mt-6"
              >
                {loading ? "Placing Order..." : "Place Order"}
              </button>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}