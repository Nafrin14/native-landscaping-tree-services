import { Link } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import aboutImage from "../assets/images/about.webp";

const highlights = [
  "Licensed & Insured",
  "Experienced Team",
  "Affordable Pricing",
  "Free Estimates",
];

function AboutPreview() {
  return (
    <section className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
        {/* Image Side */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src={aboutImage}
              alt="Native Landscaping and Tree Services team"
              width="900"
              height="700"
              loading="lazy"
              className="h-[430px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[520px]"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-7 left-5 rounded-2xl border border-white/20 bg-[#056b36] px-7 py-5 text-white shadow-xl sm:left-10">
            <p className="text-4xl font-extrabold">10+</p>

            <p className="mt-1 text-sm font-bold uppercase tracking-wide">
              Years Experience
            </p>
          </div>

          {/* Decorative Shape */}
          <div className="absolute -right-8 -top-8 -z-10 h-40 w-40 rounded-full bg-green-100" />
        </div>

        {/* Content Side */}
        <div className="pt-8 lg:pt-0">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#034f28]">
            About Our Company
          </p>

          <h2 className="max-w-xl text-4xl font-extrabold leading-tight text-[#10351f] sm:text-5xl">
            Trusted Landscaping and Tree Care Professionals
          </h2>

          <div className="mt-5 h-1 w-20 rounded-full bg-[#056b36]" />

          <p className="mt-7 text-lg leading-8 text-gray-700">
            Native Landscaping &amp; Tree Services provides dependable outdoor
            property care for homeowners and businesses throughout Syracuse
            and surrounding communities.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-700">
            From landscaping and routine maintenance to tree trimming, removal,
            and emergency cleanup, our experienced team handles every project
            safely and professionally.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-[#f4f9f5] px-4 py-3"
              >
                <FaCheckCircle
                  aria-hidden="true"
                  className="shrink-0 text-xl text-[#056b36]"
                />

                <span className="font-bold text-gray-800">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            aria-label="Learn more about Native Landscaping and Tree Services"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#056b36] px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#034f28] hover:shadow-xl"
          >
            Learn More About Us

            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;