import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.webp";
import {
  FaLeaf,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Native Landscaping and Tree Services"
        width="1600"
        height="900"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-44 pb-20 lg:pt-48">
        <div className="max-w-3xl">
          
          {/* Heading */}
          <h1 className="mt-7 text-5xl font-extrabold leading-[1.08] text-white md:text-7xl">
            Professional Landscaping
            <span className="block">&amp; Tree Services</span>
          </h1>

          {/* Green Line */}
          <div className="mt-5 h-1 w-36 rounded-full bg-green-500" />

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-100 md:text-xl">
            From tree removal to landscape design, we provide reliable,
            high-quality outdoor services with affordable pricing.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-green-700 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-xl"
            >
              <FaLeaf aria-hidden="true" />
              Get Free Estimate
            </Link>

            <a
              href="tel:5186718733"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/90 bg-black/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-green-900"
            >
              <FaPhoneAlt aria-hidden="true" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;