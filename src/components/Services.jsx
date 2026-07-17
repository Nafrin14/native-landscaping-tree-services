import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import treeRemoval from "../assets/images/tree-removal.webp";
import treeTrimming from "../assets/images/tree-trimming.webp";
import stumpGrinding from "../assets/images/stump-grinding.webp";
import landscaping from "../assets/images/landscaping.webp";
import emergencyTree from "../assets/images/emergency-tree.webp";
import yardCleanup from "../assets/images/yard-cleanup.webp";

const services = [
  {
    image: treeRemoval,
    title: "Tree Removal",
    description:
      "Safe and professional removal of hazardous, damaged, or unwanted trees from your property.",
  },
  {
    image: treeTrimming,
    title: "Tree Trimming",
    description:
      "Professional pruning and trimming to improve tree health, safety, shape, and appearance.",
  },
  {
    image: stumpGrinding,
    title: "Stump Grinding",
    description:
      "Efficient stump grinding and cleanup to create a clean, safe, and usable outdoor space.",
  },
  {
    image: landscaping,
    title: "Landscaping",
    description:
      "Complete landscaping solutions designed to improve the beauty, health, and value of your property.",
  },
  {
    image: emergencyTree,
    title: "Emergency Tree Service",
    description:
      "Fast response for storm-damaged trees, fallen branches, and hazardous tree emergencies.",
  },
  {
    image: yardCleanup,
    title: "Yard Cleanup",
    description:
      "Reliable seasonal cleanup, debris removal, and outdoor property maintenance services.",
  },
];

function Services() {
  return (
    <section className="bg-[#f4f8f5] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-5xl text-center">

          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#078c45]">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-[#10351f] sm:text-3xl lg:text-4xl xl:text-5xl">
            Complete Landscaping
            <br />
            <span className="text-[#078c45]">
              &amp; Tree Care Services
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-[#08b95f]"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 lg:text-xl">
            From tree removal and trimming to landscaping, stump grinding,
            emergency response, and complete yard cleanup, we provide reliable
            outdoor solutions that keep your property beautiful, safe, and
            well-maintained throughout every season.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-[28px] bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  width="700"
                  height="500"
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <span className="absolute bottom-5 left-5 rounded-full bg-[#078c45] px-5 py-2 text-sm font-semibold text-white shadow-lg">
                  Professional Service
                </span>
              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-[#10351f]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

               <Link
  to="/services"
  aria-label={`Learn more about ${service.title}`}
  title={`Learn more about ${service.title}`}
  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#078c45] transition hover:text-[#055f31]"
>
  Learn More About {service.title}
  <FaArrowRight
    aria-hidden="true"
    className="transition group-hover:translate-x-1"
  />
</Link>

              </div>
            </article>
          ))}
        </div>

        {/* Button */}
        <div className="mt-16 text-center">
         <Link
  to="/services"
  aria-label="View all landscaping and tree care services"
  title="View all landscaping and tree care services"
  className="inline-flex items-center gap-3 rounded-full bg-[#078c45] px-10 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#056b36]"
>
  View All Services
  <FaArrowRight aria-hidden="true" />
</Link>
        </div>

      </div>
    </section>
  );
}

export default Services;