import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex min-h-[520px] items-center justify-center bg-gradient-to-r from-red-600 via-red-500 to-orange-500 px-5 py-16 text-center sm:min-h-[580px] sm:px-8 lg:min-h-[660px]">

      <div className="w-full max-w-4xl">

        {/* Burger */}
        <div className="mb-6 text-5xl sm:mb-8 sm:text-6xl lg:mb-10">
          🍔
        </div>

        {/* Title */}
        <h2 className="text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
          Craving Something
          <br />
          Delicious?
        </h2>

        {/* Information */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white sm:mt-8 sm:gap-x-10 sm:text-base lg:gap-12 lg:text-lg">

          <div className="flex items-center gap-2">
            <Clock size={20} />

            <span>15 Min Delivery</span>
          </div>

          <div className="flex items-center gap-2">
            <span>🔥</span>
            <span>200+ Locations</span>
          </div>

          <div className="flex items-center gap-2">
            <span>⭐</span>
            <span>4.9 Rating</span>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4 lg:mt-12">

          <Link
            href="/#menu"
            className="flex w-full max-w-[220px] items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 font-medium text-red-600 transition hover:bg-gray-100 sm:w-auto"
          >
            Order Now
            <ArrowRight size={20} />
          </Link>

          <Link
            href="/#menu"
            className="w-full max-w-[220px] rounded-xl bg-white/90 px-10 py-3.5 font-medium text-gray-800 transition hover:bg-white sm:w-auto"
          >
            Menu
          </Link>

        </div>

      </div>
    </section>
  );
}