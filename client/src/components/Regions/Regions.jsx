import { countries } from "./regionsData";

const Regions = () => {
  return (
    <section className="max-w-7xl mx-auto mt-10 px-4">

      <h2 className="text-2xl font-bold mb-6">
        Suppliers by Region
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5">

        {countries.map((country, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-4 text-center hover:shadow-md"
          >
            <div className="text-4xl">🌍</div>

            <p className="mt-3 text-sm">
              {country}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Regions;