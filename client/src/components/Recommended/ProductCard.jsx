import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg border hover:shadow-lg transition-all duration-300 p-4 group">

      <div className="relative">

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-44 object-contain"
        />

        <button className="absolute top-2 right-2 bg-white shadow rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
          <FaRegHeart className="text-gray-500" />
        </button>

      </div>

      <h3 className="font-semibold text-lg mt-4">
        {product.price}
      </h3>

      <p className="text-gray-500 mt-2 text-sm leading-6">
        {product.title}
      </p>

    </div>
  );
};

export default ProductCard;