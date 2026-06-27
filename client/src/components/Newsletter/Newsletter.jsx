const Newsletter = () => {
  return (
    <section className="bg-gray-100 mt-12 py-12">

      <div className="max-w-xl mx-auto text-center px-4">

        <h2 className="text-3xl font-bold">
          Subscribe on our newsletter
        </h2>

        <p className="text-gray-500 mt-3">
          Get daily news about upcoming offers.
        </p>

        <div className="flex mt-6">

          <input
            type="email"
            placeholder="Email"
            className="flex-1 border px-4 py-3 rounded-l-md"
          />

          <button className="bg-blue-600 text-white px-6 rounded-r-md">
            Subscribe
          </button>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;