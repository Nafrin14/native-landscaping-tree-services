import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="bg-[#f8fbf9] py-12 lg:py-16">
      <div className="w-full px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#0b3d22] via-[#0d4a2a] to-[#078c45] px-8 py-10 shadow-2xl lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-14">
          {/* Background Effects */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

          {/* Left Content */}
          <div className="relative z-10 max-w-3xl">
            <span className="inline-block rounded-full bg-white/15 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-green-100 backdrop-blur">
              FREE ESTIMATE
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white lg:text-5xl">
              Ready to Transform
              <span className="block text-green-300">
                Your Outdoor Space?
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-green-100">
              Professional landscaping and tree care services delivered safely,
              reliably, and at an affordable price. Contact our experienced
              team today for your free estimate.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="relative z-10 mt-10 flex flex-col gap-4 lg:mt-0">
            <Link
              to="/contact"
              className="inline-flex min-w-[240px] items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#0b3d22] transition-all duration-300 hover:-translate-y-1 hover:bg-green-100"
            >
              Get Free Estimate
              <FaArrowRight />
            </Link>

            <a
              href="tel:+13155550198"
              className="inline-flex min-w-[240px] items-center justify-center gap-3 rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#0b3d22]"
            >
              <FaPhoneAlt />
               (518) 671-8733
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;