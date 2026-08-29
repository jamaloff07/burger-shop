import { ArrowRight, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[660px] bg-gradient-to-r from-red-600 via-red-500 to-orange-500 flex items-center justify-center text-center">
      <div>
        <div className="text-6xl mb-10">🍔</div>

        <h2 className="text-white text-6xl font-light leading-tight">
          Craving Something
          <br />
          Delicious?
        </h2>

        <div className="flex justify-center gap-12 mt-8 text-white text-lg">
          <div className="flex items-center gap-2">
            <Clock size={22} />
            <span>15 Min Delivery</span>
          </div>

          <span>🔥 200+ Locations</span>
          <span>⭐ 4.9 Rating</span>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          <button className="flex items-center gap-3 bg-white text-red-600 px-6 py-4 rounded-xl font-medium">
            Order Now <ArrowRight size={20} />
          </button>

          <button className="bg-white/90 px-20 py-4 rounded-xl">
            Menu
          </button>
        </div>
      </div>
    </section>
  );
}