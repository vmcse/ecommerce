"use client";

import Link from "next/link";

import { useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";
import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import Notification from "@/components/Notification";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, subtotal, discount, total } =
    useCart();

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    document.title = "Your Cart";
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link href="/" passHref>
            <div className="mt-4 text-center text-blue-500 hover:underline cursor-pointer">
              Continue Shopping
            </div>
          </Link>
        </>
      ) : (
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-2/3 p-6 border border-slate-500 rounded-lg shadow-lg">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-700"
              onClick={() => setShowNotification(true)}
            >
              Checkout
            </button>
          </div>
          <CartSummary subtotal={subtotal} discount={discount} total={total} />
        </div>
      )}

      <Notification
        message="Your order is placed successfully"
        show={showNotification}
        onClose={() => setShowNotification(false)}
      />
    </div>
  );
}
