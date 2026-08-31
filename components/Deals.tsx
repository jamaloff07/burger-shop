"use client";

import { Clock3, Percent, Tag, Gift } from "lucide-react";

const deals = [
  {
    icon: Percent,
    title: "20% Off",
    description: "Orders $25+",
    code: "SAVE20",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    icon: Clock3,
    title: "Happy Hour",
    description: "3PM - 6PM",
    code: "HAPPY3",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    icon: Tag,
    title: "Free Delivery",
    description: "First order",
    code: "FREEDEL",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
];

export default function Deals() {
  return (
    <section
      id="deals"
      className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-medium text-red-500 sm:text-sm">
            <span>♨</span>
            HOT DEALS
          </div>

          <p className="mt-2 text-xs text-gray-500 sm:text-sm">
            Today's Special Offers
          </p>
        </div>

        {/* Deal Cards */}
        <div className="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-3">

          {deals.map((deal) => {
            const Icon = deal.icon;

            return (
              <div
                key={deal.code}
                className="rounded-xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${deal.iconBg}`}
                >
                  <Icon
                    size={20}
                    className={deal.iconColor}
                  />
                </div>

                <h3 className="mt-4 text-sm font-medium text-gray-800">
                  {deal.title}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {deal.description}
                </p>

                <div className="mt-3 rounded-lg border border-dashed border-gray-300 bg-gray-50 px-3 py-2.5">
                  <span className="text-xs font-medium text-gray-700">
                    {deal.code}
                  </span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Family Feast */}
        <div className="mt-6 overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-7 text-center text-white shadow-lg sm:mt-8 sm:px-8 sm:py-8">

          <div className="mx-auto flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-medium">
            <Gift size={14} />
            Limited Time
          </div>

          <h3 className="mt-4 text-base font-semibold sm:text-lg">
            Family Feast - $29.99
          </h3>

          <p className="mt-2 text-xs text-white/90 sm:text-sm">
            2 Burgers • Chicken Bucket • Fries • 4 Drinks
          </p>

          <button className="mt-5 rounded-lg bg-white px-6 py-2.5 text-xs font-medium text-red-600 transition hover:bg-gray-100 sm:text-sm">
            Order Now
          </button>

        </div>

      </div>
    </section>
  );
}