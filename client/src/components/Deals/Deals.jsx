import { deals } from "./dealsData";
import DealCard from "./DealCard";

const Deals = () => {
  return (
    <section className="max-w-7xl mx-auto mt-8">

      <div className="bg-white rounded-xl border">

        <div className="grid lg:grid-cols-6">

          {/* Left */}

          <div className="p-6 border-r">

            <h2 className="text-2xl font-bold">
              Deals & Offers
            </h2>

            <p className="text-gray-500 mt-2">
              Hygiene equipments
            </p>

            <div className="flex gap-2 mt-6">

              <div className="bg-gray-800 text-white rounded p-2 text-center w-14">
                <p className="font-bold">04</p>
                <small>Days</small>
              </div>

              <div className="bg-gray-800 text-white rounded p-2 text-center w-14">
                <p className="font-bold">13</p>
                <small>Hour</small>
              </div>

              <div className="bg-gray-800 text-white rounded p-2 text-center w-14">
                <p className="font-bold">34</p>
                <small>Min</small>
              </div>

              <div className="bg-gray-800 text-white rounded p-2 text-center w-14">
                <p className="font-bold">56</p>
                <small>Sec</small>
              </div>

            </div>

          </div>

          {/* Products */}

          <div className="lg:col-span-5 overflow-x-auto">

            <div className="flex lg:grid lg:grid-cols-5">

              {deals.map((item) => (
                <DealCard
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

export default Deals;