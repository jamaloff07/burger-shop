"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Users,
  ShoppingBag,
  Package,
  FolderOpen,
} from "lucide-react";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function checkAdmin() {
      try {
        const response = await fetch("/api/auth/me");

        if (!response.ok) {
          window.location.href = "/signin";
          return;
        }

        const data = await response.json();

        if (data.user.role !== "ADMIN") {
          setError("You do not have permission to access this page.");
          return;
        }

        setUser(data.user);
      } catch (error) {
        console.error(error);
        setError("Something went wrong.");
      } finally {
        setLoading(false);
      }
    }

    checkAdmin();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-sm text-gray-500">
          Loading admin panel...
        </p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Access Denied
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {error}
          </p>

          <Link
            href="/"
            className="mt-6 inline-block rounded-xl bg-red-600 px-7 py-3 text-sm font-medium text-white hover:bg-red-700"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Admin Dashboard
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Welcome, {user?.name}
            </p>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600"
          >
            <ArrowLeft size={18} />
            Back to Website
          </Link>

        </div>
      </header>

      {/* Dashboard */}
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">

        {/* Admin Badge */}
        <div className="mb-8 rounded-2xl bg-red-600 p-6 text-white">
          <p className="text-sm opacity-80">
            Logged in as
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            {user?.name}
          </h2>

          <p className="mt-1 text-sm opacity-80">
            {user?.email}
          </p>

          <span className="mt-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
            ADMIN
          </span>
        </div>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Orders */}
          <Link
            href="/admin/orders"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100">
              <ShoppingBag
                size={24}
                className="text-red-600"
              />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-gray-800">
              Orders
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage customer orders
            </p>
          </Link>

          {/* Products */}
          <Link
            href="/admin/products"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100">
              <Package
                size={24}
                className="text-orange-600"
              />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-gray-800">
              Products
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Add and manage products
            </p>
          </Link>

          {/* Categories */}
          <Link
            href="/admin/categories"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
              <FolderOpen
                size={24}
                className="text-blue-600"
              />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-gray-800">
              Categories
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage product categories
            </p>
          </Link>

          {/* Users */}
          <Link
            href="/admin/users"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
              <Users
                size={24}
                className="text-green-600"
              />
            </div>

            <h2 className="mt-5 text-lg font-semibold text-gray-800">
              Users
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Manage registered users
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}