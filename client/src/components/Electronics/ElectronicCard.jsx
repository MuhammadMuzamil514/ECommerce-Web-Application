const ElectronicCard = ({ product }) => {
  return (
    <div className="bg-white border p-4 hover:shadow-md transition">

      <div>
        <h3 className="font-medium text-sm">
          {product.title}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          From {product.price}
        </p>
      </div>

      <div className="flex justify-end mt-5">
        <img
          src={product.image}
          alt={product.title}
          className="w-24 h-24 object-contain"
        />
      </div>

    </div>
  );
};

export default ElectronicCard;