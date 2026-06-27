const OutdoorCard = ({ product }) => {
  return (
    <div className="bg-white border hover:shadow-md transition p-4 flex flex-col justify-between">

      <div>
        <h3 className="font-medium text-sm">
          {product.title}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          From {product.price}
        </p>
      </div>

      <img
        src={product.image}
        alt={product.title}
        className="w-24 h-24 object-contain ml-auto mt-4"
      />

    </div>
  );
};

export default OutdoorCard;