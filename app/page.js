"use client";

import { useCart } from "@/context/CartContext";
import products from "@/data/products.json";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { useEffect } from "react";

export default function Home() {
  const { cart, addToCart } = useCart();

  useEffect(() => {
    document.title = "Product Listings";
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product Listings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
      <div className="mt-8">
        <Link href="/cart">
          <div className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 text-center cursor-pointer">
            Go to Cart ({cart.length})
          </div>
        </Link>
      </div>
    </div>
  );
}
