import Link from "next/link";

export default function CartSummary({ subtotal, discount, total }) {
  return (
    <div className="md:w-1/3 mt-6 md:mt-0 md:ml-6">
      <div className="p-4 border border-slate-500 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Order Summary</h2>
        <div className="mt-4">
          <div className="flex justify-between">
            <span className="text-gray-700">Subtotal:</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-gray-700">Discount ({discount * 100})%:</span>
            <span className="font-semibold">
              -${(subtotal - total).toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between mt-2 border-t-2 border-dotted border-slate-200 pt-3">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-lg font-bold">${total.toFixed(2)}</span>
          </div>

          <p className="mt-2 text-center border-t-2 border-dotted border-slate-200 pt-3">
            You will save ${(subtotal - total).toFixed(2)}
          </p>
        </div>
      </div>
      <Link href="/" passHref>
        <div className="mt-4 text-center text-blue-500 hover:underline cursor-pointer">
          Continue Shopping
        </div>
      </Link>
    </div>
  );
}
