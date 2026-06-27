import banner from "../../assets/hero.png";

import ElectronicCard from "./ElectronicCard";
import { electronics } from "./electronicsData";

const Electronics = () => {
  return (
    <section className="max-w-7xl mx-auto mt-8">

      <div className="bg-white rounded-xl border overflow-hidden">

        <div className="grid lg:grid-cols-5">

          {/* Left Banner */}

          <div
            className="min-h-[420px] bg-cover bg-center p-8"
            style={{
              backgroundImage: `url(${banner})`,
            }}
          >
            <h2 className="text-3xl font-bold max-w-[200px]">
              Consumer Electronics
            </h2>

            <button className="mt-6 bg-white px-5 py-3 rounded shadow">
              Source Now
            </button>

          </div>

          {/* Right Grid */}

          <div className="lg:col-span-4">

            <div className="grid grid-cols-2 lg:grid-cols-4">

              {electronics.map((item) => (
                <ElectronicCard
                  key={item.id}
                  product={item}
                />
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Electronics;