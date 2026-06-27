const SupplierBanner = () => {
  return (
    <section className="container section mx-auto mt-8 px-4">

      <div
        className="rounded-xl overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(13,110,253,.85), rgba(13,110,253,.75)), url('/src/assets/images/supplier-bg.jpg')",
        }}
      >
        <div className="grid lg:grid-cols-2 gap-10 p-10">

          {/* Left */}

          <div className="text-white">

            <h2 className="text-4xl font-bold leading-tight">
              An easy way to send requests to all suppliers
            </h2>

            <p className="mt-5 text-blue-100 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quisquam, voluptate. Receive multiple quotations from
              suppliers quickly.
            </p>

          </div>

          {/* Right */}

          <div className="bg-white rounded-lg shadow-xl p-6">

            <h3 className="text-xl font-semibold mb-5">
              Send quote to suppliers
            </h3>

            <input
              type="text"
              placeholder="What item do you need?"
              className="w-full border rounded-md px-4 py-3 mb-4 outline-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Type more details"
              className="w-full border rounded-md px-4 py-3 mb-4 resize-none outline-blue-500"
            ></textarea>

            <div className="flex gap-3">

              <input
                type="number"
                placeholder="Quantity"
                className="flex-1 border rounded-md px-4 py-3 outline-blue-500"
              />

              <select className="border rounded-md px-4">
                <option>Pcs</option>
                <option>Kg</option>
                <option>Boxes</option>
              </select>

            </div>

            <button className="mt-5 bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-md">
              Send Inquiry
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default SupplierBanner;