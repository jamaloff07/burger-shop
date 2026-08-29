"use client";

import Link from "next/link";
import {
  MapPin,
  ShoppingCart,
  LogIn,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <header className="h-[90px] bg-white flex items-center justify-between px-16">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-2xl shadow-md">
          🍔
        </div>

        <h1 className="text-xl font-bold text-red-700">
          Burger House
        </h1>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-12 text-lg text-gray-700">
        <Link href="/">Home</Link>
        <a href="#menu">Menu</a>
        <a href="#deals">Deals</a>
        <a href="#about">About</a>
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-5">
        <MapPin size={20} />

        {/* Cart */}
        <Link
  href="/cart"
  className="relative flex items-center justify-center cursor-pointer"
>
  <ShoppingCart size={21} />

  {cartCount > 0 && (
    <span className="absolute -right-3 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs text-white">
      {cartCount}
    </span>
  )}
</Link>

        {/* Sign In */}
        <button className="flex items-center gap-2 border border-red-200 px-5 py-3 rounded-xl text-red-600">
          <LogIn size={18} />
          Sign In
        </button>

        {/* Order */}
        <Link
  href="/#menu"
  className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold"
>
  Order Now
</Link>
      </div>
    </header>
  );
}