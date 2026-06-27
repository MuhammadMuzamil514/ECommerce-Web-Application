import { services } from "./servicesData";

const Services = () => {
  return (
    <section className="container section mx-auto mt-10 px-4">

      <h2 className="text-2xl font-bold mb-6">
        Our Extra Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg border overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="font-medium">
                {service.title}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Services;