function ProductCard({ title, price, image, discount }) {
  return (
    <div className="bg-white border rounded hover:shadow-lg duration-300 flex flex-col items-center justify-center p-4">

      <img
        src={image}
        alt={title}
        className="w-28 h-28 object-contain"
      />

      <h3 className="mt-4 font-medium text-center">
        {title}
      </h3>

      {price && (
        <p className="text-gray-500 mt-1">
          From ${price}
        </p>
      )}

      {discount && (
        <span className="mt-3 bg-red-100 text-red-500 px-3 py-1 rounded-full text-sm">
          {discount}
        </span>
      )}

    </div>
  );
}

export default ProductCard;