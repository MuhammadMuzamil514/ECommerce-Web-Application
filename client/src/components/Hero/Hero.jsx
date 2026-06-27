import CategorySidebar from "./CategorySidebar";
import HeroBanner from "./HeroBanner";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto mt-6">

      <div className="grid grid-cols-12 gap-5">

        {/* Left */}

        <div className="col-span-2">
          <CategorySidebar />
        </div>

        {/* Center */}

        <div className="col-span-7">
          <HeroBanner />
        </div>

        {/* Right */}

        <div className="col-span-3">
          <HeroRight />
        </div>

      </div>

    </section>
  );
};
<div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

  <div className="hidden lg:block lg:col-span-2">
    <CategorySidebar />
  </div>

  <div className="lg:col-span-7">
    <HeroBanner />
  </div>

  <div className="lg:col-span-3">
    <HeroRight />
  </div>

</div>
export default Hero;