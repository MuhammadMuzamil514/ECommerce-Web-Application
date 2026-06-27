const HeroRight = () => {
  return (
    <div className="space-y-4">

      {/* Login Card */}

      <div className="bg-blue-100 rounded-lg p-5">

        <div className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full bg-white"></div>

          <div>

            <p className="font-medium">
              Hi, user
            </p>

            <p className="text-sm">
              let's get started
            </p>

          </div>

        </div>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md">
          Join now
        </button>

        <button className="mt-2 w-full bg-white border py-2 rounded-md">
          Log in
        </button>

      </div>

      {/* Quote Card */}

      <div className="bg-orange-400 rounded-lg text-white p-5">

        <h3 className="font-semibold">
          Get US $10 off with a new supplier
        </h3>

      </div>

      {/* Promo Card */}

      <div className="bg-teal-500 rounded-lg text-white p-5">

        <h3 className="font-semibold">
          Send quotes with supplier preferences
        </h3>

      </div>

    </div>
  );
};

export default HeroRight;