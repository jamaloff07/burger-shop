"use client";

import Link from "next/link";
import { useState } from "react";
import {
  MapPin,
  ShoppingCart,
  LogIn,
  Menu,
  X,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative z-50 bg-white shadow-sm">
      <div className="flex h-[80px] items-center justify-between px-4 sm:px-8 lg:h-[90px] lg:px-16">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2 sm:gap-3"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-600 text-lg shadow-md sm:h-14 sm:w-14 sm:text-2xl">
            🍔
          </div>

          <h1 className="text-base font-bold text-red-700 sm:text-xl">
            Burger House
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-base text-gray-700 md:flex xl:gap-12 xl:text-lg">
          <Link
            href="/"
            className="transition hover:text-red-600"
          >
            Home
          </Link>

          <Link
            href="/#menu"
            className="transition hover:text-red-600"
          >
            Menu
          </Link>

          <Link
            href="/#deals"
            className="transition hover:text-red-600"
          >
            Deals
          </Link>

          <Link
            href="/#why-choose-us"
            className="transition hover:text-red-600"
          >
            About
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">

          <MapPin size={20} />

          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex items-center justify-center"
          >
            <ShoppingCart size={21} />

            {cartCount > 0 && (
              <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Sign In */}
          <Link
            href="/signin"
            className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-red-600 transition hover:bg-red-50 xl:px-5 xl:py-3"
          >
            <LogIn size={18} />
            Sign In
          </Link>

          {/* Order Now */}
          <Link
            href="/#menu"
            className="rounded-xl bg-red-600 px-5 py-2.5 font-semibold text-white transition hover:bg-red-700 xl:px-6 xl:py-3"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-3 md:hidden">

          {/* Cart */}
          <Link
            href="/cart"
            className="relative flex items-center justify-center"
          >
            <ShoppingCart size={21} />

            {cartCount > 0 && (
              <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-md md:hidden">
          <nav className="flex flex-col gap-2">

            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-gray-700 transition hover:bg-red-50 hover:text-red-600"
            >
              Home
            </Link>

            <Link
              href="/#menu"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-gray-700 transition hover:bg-red-50 hover:text-red-600"
            >
              Menu
            </Link>

            <Link
              href="/#deals"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-gray-700 transition hover:bg-red-50 hover:text-red-600"
            >
              Deals
            </Link>

            <Link
              href="/#why-choose-us"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 text-gray-700 transition hover:bg-red-50 hover:text-red-600"
            >
              About
            </Link>

            <Link
              href="/signin"
              onClick={closeMenu}
              className="mt-2 flex items-center gap-2 rounded-xl border border-red-200 px-4 py-3 text-red-600"
            >
              <LogIn size={18} />
              Sign In
            </Link>

            <Link
              href="/#menu"
              onClick={closeMenu}
              className="rounded-xl bg-red-600 px-4 py-3 text-center font-semibold text-white"
            >
              Order Now
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}