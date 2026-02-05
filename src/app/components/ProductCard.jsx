export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="mt-3 font-medium">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>
      <p className="mt-1 text-[#D4AF37] font-semibold">₹{product.price}</p>
    </div>
  );
}
