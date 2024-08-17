export default function ProductCard({ product, addToCart }) {
  return (
    <div
      key={product.id}
      className="p-4  transform transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-xl font-semibold mt-2">${product.price.toFixed(2)}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
