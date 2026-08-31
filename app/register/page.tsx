"use client";

import Link from "next/link";
import {
  ArrowLeft,
  User,
  Mail,
  Lock,
} from "lucide-react";

export default function RegisterPage() {
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

      {/* Register */}
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
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
              Create Account
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Join Burger House today
            </p>
          </div>

          {/* Form */}
          <form className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500"
                />
              </div>
            </div>

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
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Confirm Password
              </label>

              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-red-500"
                />
              </div>
            </div>

            {/* Register */}
            <button
              type="submit"
              className="w-full rounded-xl bg-red-600 py-3.5 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Create Account
            </button>

          </form>

          {/* Sign In */}
          <div className="mt-5 text-center text-sm text-gray-500 sm:mt-6">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="font-medium text-red-600 hover:underline"
            >
              Sign In
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}