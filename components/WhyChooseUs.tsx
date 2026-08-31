import {
    Award,
    Clock3,
    Heart,
    Users,
    TrendingUp,
    ShieldCheck,
  } from "lucide-react";
  
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      bg: "bg-red-100",
      color: "text-red-500",
    },
    {
      icon: Clock3,
      title: "15 Min Delivery",
      bg: "bg-orange-100",
      color: "text-orange-500",
    },
    {
      icon: Heart,
      title: "Made with Love",
      bg: "bg-pink-100",
      color: "text-pink-500",
    },
    {
      icon: Users,
      title: "50K+ Customers",
      bg: "bg-blue-100",
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Best Value",
      bg: "bg-green-100",
      color: "text-green-500",
    },
    {
      icon: ShieldCheck,
      title: "Safe & Hygienic",
      bg: "bg-purple-100",
      color: "text-purple-500",
    },
  ];
  
  const stats = [
    {
      number: "200+",
      text: "Locations",
      bg: "bg-red-50",
      color: "text-red-500",
    },
    {
      number: "50K+",
      text: "Customers",
      bg: "bg-yellow-50",
      color: "text-yellow-500",
    },
    {
      number: "4.9",
      text: "Rating",
      bg: "bg-green-50",
      color: "text-green-500",
      star: true,
    },
    {
      number: "28",
      text: "Years Experience",
      bg: "bg-blue-50",
      color: "text-blue-500",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section
        id="why-choose-us"
        className="bg-white px-4 py-14 sm:px-6 sm:py-20"
      >
        <div className="mx-auto max-w-6xl">
  
          {/* Header */}
          <div className="text-center">
            <p className="text-xs font-medium tracking-wide text-red-500 sm:text-sm">
              WHY CHOOSE US
            </p>
  
            <h2 className="mt-2 text-lg font-semibold text-gray-800 sm:text-xl">
              We're More Than Just Food
            </h2>
          </div>
  
          {/* Features */}
          <div className="mt-8 grid grid-cols-2 gap-6 sm:mt-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
  
            {features.map((feature) => {
              const Icon = feature.icon;
  
              return (
                <div
                  key={feature.title}
                  className="flex flex-col items-center text-center"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl sm:h-14 sm:w-14 ${feature.bg}`}
                  >
                    <Icon
                      size={24}
                      className={feature.color}
                    />
                  </div>
  
                  <p className="mt-3 text-[11px] text-gray-700 sm:text-xs">
                    {feature.title}
                  </p>
                </div>
              );
            })}
  
          </div>
  
          {/* Statistics */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-5">
  
            {stats.map((stat) => (
              <div
                key={stat.text}
                className={`rounded-xl px-4 py-4 text-center sm:px-6 sm:py-5 ${stat.bg}`}
              >
                <p
                  className={`text-sm font-medium sm:text-base ${stat.color}`}
                >
                  {stat.number}
  
                  {stat.star && (
                    <span className="ml-1">
                      ⭐
                    </span>
                  )}
                </p>
  
                <p className="mt-1 text-[10px] text-gray-600 sm:mt-2 sm:text-xs">
                  {stat.text}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }