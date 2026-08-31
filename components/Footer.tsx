import {
    Phone,
    Mail,
    MapPin,
  } from "lucide-react";
  
  export default function Footer() {
    return (
      <footer className="bg-[#111827] px-5 py-10 text-white sm:px-8 lg:px-6">
        <div className="mx-auto max-w-6xl">
  
          {/* Main Footer */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
  
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-sm">
                  🍔
                </div>
  
                <h2 className="font-semibold">
                  Burger House
                </h2>
              </div>
  
              <p className="mt-3 text-sm text-gray-400">
                Serving happiness since 1995
              </p>
  
              {/* Social */}
              <div className="mt-5 flex gap-3">
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-xs font-semibold text-gray-300 transition hover:bg-red-600"
                >
                  f
                </a>
  
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-xs font-semibold text-gray-300 transition hover:bg-red-600"
                >
                  ig
                </a>
  
                <a
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-xs font-semibold text-gray-300 transition hover:bg-red-600"
                >
                  X
                </a>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="font-semibold">
                Quick Links
              </h3>
  
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <a
                  href="/#menu"
                  className="block transition hover:text-white"
                >
                  Menu
                </a>
  
                <a
                  href="/#deals"
                  className="block transition hover:text-white"
                >
                  Deals
                </a>
  
                <a
                  href="/#why-choose-us"
                  className="block transition hover:text-white"
                >
                  About
                </a>
  
                <a
                  href="#"
                  className="block transition hover:text-white"
                >
                  Careers
                </a>
              </div>
            </div>
  
            {/* Support */}
            <div>
              <h3 className="font-semibold">
                Support
              </h3>
  
              <div className="mt-4 space-y-2 text-sm text-gray-400">
                <a
                  href="#"
                  className="block transition hover:text-white"
                >
                  FAQ
                </a>
  
                <a
                  href="#"
                  className="block transition hover:text-white"
                >
                  Privacy
                </a>
  
                <a
                  href="#"
                  className="block transition hover:text-white"
                >
                  Terms
                </a>
  
                <a
                  href="#"
                  className="block transition hover:text-white"
                >
                  Contact
                </a>
              </div>
            </div>
  
            {/* Contact */}
            <div>
              <h3 className="font-semibold">
                Contact
              </h3>
  
              <div className="mt-4 space-y-3 text-sm text-gray-400">
  
                <div className="flex items-center gap-3">
                  <Phone
                    size={16}
                    className="shrink-0 text-red-500"
                  />
                  <span>1-800-BURGER</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <Mail
                    size={16}
                    className="shrink-0 text-red-500"
                  />
                  <span>hello@burger.com</span>
                </div>
  
                <div className="flex items-center gap-3">
                  <MapPin
                    size={16}
                    className="shrink-0 text-red-500"
                  />
                  <span>200+ Locations</span>
                </div>
  
              </div>
            </div>
  
          </div>
  
          {/* Bottom */}
          <div className="mt-8 border-t border-gray-800 pt-6 text-center">
            <p className="text-xs text-gray-400">
              © 2026 Burger House. All rights reserved.
            </p>
          </div>
  
        </div>
      </footer>
    );
  }