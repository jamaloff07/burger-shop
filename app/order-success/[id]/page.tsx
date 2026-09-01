import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OrderSuccessPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-sm sm:p-10">

        {/* Success Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle
            size={48}
            className="text-green-500"
          />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-2xl font-bold text-gray-800 sm:text-3xl">
          Order Confirmed!
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
          Thank you for your order. Your delicious food
          is being prepared.
        </p>

        {/* Order ID */}
        <div className="mt-7 rounded-xl bg-gray-50 p-4">
          <p className="text-xs text-gray-400">
            Order ID
          </p>

          <p className="mt-1 break-all text-sm font-semibold text-gray-800">
            {id}
          </p>
        </div>

        {/* Status */}
        <div className="mt-4 flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3">
          <span className="text-sm text-gray-500">
            Status
          </span>

          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
            PENDING
          </span>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">

          <Link
            href="/"
            className="flex flex-1 items-center justify-center rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Back to Home
          </Link>

          <Link
            href="/#menu"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-red-500 hover:text-red-600"
          >
            Order More
            <ArrowRight size={17} />
          </Link>

        </div>

      </div>
    </main>
  );
}