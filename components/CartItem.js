export default function CartItem({ item, updateQuantity, removeFromCart }) {
  return (
    <div
      key={item.id}
      className="flex items-center justify-between border-b border-slate-500 py-4"
    >
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-cover rounded-md"
        />
        <div className="ml-4">
          <h2 className="text-lg font-bold">{item.name}</h2>
          <p className="text-gray-700">${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="px-2 py-1 text-white bg-blue-600 rounded"
        >
          -
        </button>
        <input
          type="text"
          value={item.quantity}
          readOnly
          className="w-12 text-center mx-2 border rounded"
        />
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="px-2 py-1 text-white bg-blue-600 rounded"
        >
          +
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-4 text-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
