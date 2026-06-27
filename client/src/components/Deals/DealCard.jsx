const DealCard = ({ product }) => {
  return (
    <div className="min-w-[180px] bg-white border rounded-lg p-4 text-center hover:shadow-lg transition">

      <img
        src={product.image}
        alt={product.title}
        className="w-28 h-28 object-contain mx-auto"
      />

      <h3 className="mt-4 text-sm font-medium">
        {product.title}
      </h3>

      <span className="inline-block mt-3 bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
        {product.discount}
      </span>

    </div>
  );
};

export default DealCard;