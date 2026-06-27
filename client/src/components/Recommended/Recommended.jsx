import ProductCard from "./ProductCard";
import { recommendedProducts } from "./recommendedData";

const Recommended = () => {
  return (
    <section className="max-w-7xl mx-auto mt-10 px-4">

      <h2 className="text-2xl font-bold mb-6">
        Recommended Items
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">

        {recommendedProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}

      </div>

    </section>
  );
};

export default Recommended;