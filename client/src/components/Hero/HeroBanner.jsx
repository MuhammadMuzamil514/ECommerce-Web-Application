import banner from "../../assets/images/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <div
      className="rounded-lg h-[400px] bg-cover bg-center flex items-center px-10"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div>

        <p className="text-xl">
          Latest Trending
        </p>

        <h1 className="text-4xl font-bold mt-2">
          Electronic Items
        </h1>

        <button className="mt-6 bg-white px-6 py-3 rounded-lg shadow hover:bg-gray-100">
          Learn More
        </button>

      </div>
    </div>
  );
};

export default HeroBanner;