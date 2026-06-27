import OutdoorCard from "./OutdoorCard";
import { outdoorProducts } from "./outdoorData";

import banner from "../../assets/hero.png";

const HomeOutdoor = () => {
  return (
    <section className="container section mx-auto mt-8">

      <div className="bg-white rounded-xl overflow-hidden border">

        <div className="grid lg:grid-cols-5">

          {/* Left Banner */}

          <div
            className="relative min-h-[420px] bg-cover bg-center p-8"
            style={{
              backgroundImage: `url(${banner})`,
            }}
          >
            <h2 className="text-3xl font-bold max-w-[180px]">
              Home and Outdoor
            </h2>

            <button className="mt-6 bg-white px-5 py-3 rounded-md shadow">
              Source Now
            </button>
          </div>

          {/* Products */}

          <div className="lg:col-span-4">

            <div className="grid grid-cols-2 lg:grid-cols-4">

              {outdoorProducts.map((item) => (
                <OutdoorCard
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

export default HomeOutdoor;