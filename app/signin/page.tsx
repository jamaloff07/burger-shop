"use client";

import Link from "next/link";
import { useState } from "react";
import { LogIn } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("Login:", email, password);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-sm sm:p-8">

        {/* Logo */}
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-3xl shadow-sm">
            🍔
          </div>

          <h1 className="mt-5 text-2xl font-bold text-gray-800">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to your Burger House account
          </p>
        </div>

        {/* Form */}
        <div className="mt-8 space-y-4">

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-red-500"
            />
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            <LogIn size={18} />
            Sign In
          </button>

        </div>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-red-600 hover:text-red-700"
          >
            Register
          </Link>
        </p>

        {/* Back */}
        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-red-600"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}