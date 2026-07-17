import {
  FaStar,
  FaQuoteLeft,
  FaUser,
  FaMapMarkerAlt,
  FaLeaf,
} from "react-icons/fa";

const testimonials = [
  {
    name: "John Miller",
    location: "Syracuse, NY",
    review:
      "Native Landscaping transformed our yard beyond our expectations. Their team was professional, friendly, and completed the work on time. Highly recommended!",
  },
  {
    name: "Sarah Wilson",
    location: "Liverpool, NY",
    review:
      "We had a large tree fall during the storm and they responded quickly. The team removed it safely and cleaned everything up. Excellent service!",
  },
  {
    name: "Michael Brown",
    location: "Fayetteville, NY",
    review:
      "Affordable pricing, great communication, and exceptional landscaping work. Our property looks beautiful, and we continue to use their services for maintenance.",
  },
];

function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-green-50 py-20 lg:py-28">
      {/* Decorative Leaves */}
      <div className="pointer-events-none absolute -left-10 top-24 hidden text-green-100 lg:block">
        <FaLeaf
          aria-hidden="true"
          size={150}
          className="-rotate-45"
        />
      </div>

      <div className="pointer-events-none absolute -right-10 top-40 hidden text-green-100 lg:block">
        <FaLeaf
          aria-hidden="true"
          size={150}
          className="rotate-45"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3 rounded-full bg-green-200 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.24em] text-[#034f28]">
            <FaLeaf aria-hidden="true" />
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-[#10351f] sm:text-5xl lg:text-5xl">
            What Our{" "}
            <span className="text-[#034f28]">
              Customers
            </span>{" "}
            Say
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-4">
            <span className="h-px w-20 bg-green-300" />

            <FaLeaf
              aria-hidden="true"
              className="text-[#056b36]"
            />

            <span className="h-px w-20 bg-green-300" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-700">
            We are proud to deliver exceptional landscaping and tree care
            services that exceed customer expectations.
          </p>

          {/* Average Rating */}
          <div className="mt-7">
            <div
              aria-label="5 out of 5 stars"
              className="flex justify-center gap-2 text-yellow-500"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar
                  key={index}
                  aria-hidden="true"
                  size={26}
                />
              ))}
            </div>

            <p className="mt-3 font-bold text-gray-800">
              5.0 Average Rating
            </p>
          </div>
        </div>

        {/* Review Cards */}
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="group flex h-full flex-col rounded-[2rem] border border-gray-200 bg-white p-7 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:border-green-300 hover:shadow-2xl sm:p-8"
            >
              <FaQuoteLeft
                aria-hidden="true"
                size={38}
                className="text-[#056b36] transition-transform duration-300 group-hover:scale-110"
              />

              <div
                aria-label="5 out of 5 stars"
                className="mt-6 flex gap-1 text-yellow-500"
              >
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar
                    key={index}
                    aria-hidden="true"
                    size={21}
                  />
                ))}
              </div>

              <p className="mt-7 flex-1 text-[17px] leading-8 text-gray-700">
                “{testimonial.review}”
              </p>

              <div className="mt-8 border-t border-gray-200 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#056b36] to-[#034f28] text-white shadow-lg">
                    <FaUser
                      aria-hidden="true"
                      size={23}
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-[#10351f]">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 flex items-center gap-2 text-sm font-medium text-gray-600">
                      <FaMapMarkerAlt
                        aria-hidden="true"
                        className="text-[#056b36]"
                      />

                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;