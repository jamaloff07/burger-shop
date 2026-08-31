"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Lock } from "lucide-react";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Back */}
      <div className="px-4 pt-6 sm:px-6 sm:pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-red-600"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>

      {/* Login */}
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-10 sm:px-6 sm:py-12">
        <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-sm sm:p-8">

          {/* Logo */}
          <div className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-2xl shadow-md sm:h-16 sm:w-16 sm:text-3xl">
              🍔
            </div>
          </div>

          {/* Title */}
          <div className="mt-5 text-center sm:mt-6">
            <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Sign in to your Burger House account
            </p>
          </div>

          {/* Form */}
          <form className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <a
                  href="#"
                  className="text-xs text-red-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500"
                />
              </div>
            </div>

            {/* Sign In */}
            <button
              type="submit"
              className="w-full rounded-xl bg-red-600 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Sign In
            </button>

          </form>

          {/* Register */}
          <div className="mt-5 text-center text-sm text-gray-500 sm:mt-6">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-red-600 hover:underline"
            >
              Create account
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}