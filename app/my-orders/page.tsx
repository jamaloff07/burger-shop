"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Package,
  Clock,
} from "lucide-react";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
};

type OrderItem = {
  id: string;
  quantity: number;
  price: number;
  product: Product;
};

type Order = {
  id: string;
  total: number;
  status: string;
  createdAt: string;
  items: OrderItem[];
};

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getOrders() {
      try {
        const response = await fetch("/api/orders");

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Failed to get orders"
          );
        }

        setOrders(data.orders);
      } catch (error) {
        console.error(error);

        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong"
        );
      } finally {
        setLoading(false);
      }
    }

    getOrders();
  }, []);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-5xl">

        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-red-600"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mt-6">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            My Orders
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            View your order history
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="mt-10 rounded-2xl bg-white p-10 text-center shadow-sm">
            <p className="text-sm text-gray-500">
              Loading your orders...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Empty */}
        {!loading &&
          !error &&
          orders.length === 0 && (
            <div className="mt-10 rounded-2xl bg-white p-10 text-center shadow-sm sm:p-16">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <Package
                  size={30}
                  className="text-gray-400"
                />
              </div>

              <h2 className="mt-5 text-xl font-semibold text-gray-800">
                No Orders Yet
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                You haven't placed any orders yet.
              </p>

              <Link
                href="/#menu"
                className="mt-6 inline-block rounded-xl bg-red-600 px-7 py-3 text-sm font-medium text-white transition hover:bg-red-700"
              >
                Browse Menu
              </Link>
            </div>
          )}

        {/* Orders */}
        {!loading &&
          !error &&
          orders.length > 0 && (
            <div className="mt-8 space-y-5">

              {orders.map((order) => (
                <div
                  key={order.id}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm"
                >

                  {/* Order Header */}
                  <div className="flex flex-col gap-3 border-b border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">

                    <div>
                      <p className="text-xs text-gray-400">
                        Order ID
                      </p>

                      <p className="mt-1 break-all text-sm font-semibold text-gray-800">
                        #{order.id}
                      </p>

                      <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                        <Clock size={14} />
                        {formatDate(order.createdAt)}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          order.status === "DELIVERED"
                            ? "bg-green-100 text-green-700"
                            : order.status === "CANCELLED"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>

                      <p className="text-lg font-bold text-red-600">
                        ${order.total.toFixed(2)}
                      </p>

                    </div>
                  </div>

                  {/* Items */}
                  <div className="divide-y divide-gray-100">

                    {order.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 sm:p-5"
                      >

                        {/* Product Image */}
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-16 w-16 shrink-0 rounded-xl object-cover"
                        />

                        {/* Product Info */}
                        <div className="min-w-0 flex-1">
                          <h3 className="truncate text-sm font-medium text-gray-800">
                            {item.product.name}
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            Qty: {item.quantity}
                          </p>
                        </div>

                        {/* Item Price */}
                        <p className="shrink-0 text-sm font-semibold text-gray-800">
                          $
                          {(
                            item.price *
                            item.quantity
                          ).toFixed(2)}
                        </p>

                      </div>
                    ))}

                  </div>

                </div>
              ))}

            </div>
          )}

      </div>
    </main>
  );
}