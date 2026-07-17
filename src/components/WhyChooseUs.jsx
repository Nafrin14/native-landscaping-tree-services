import {
  FaShieldAlt,
  FaUsers,
  FaClock,
  FaDollarSign,
  FaClipboardCheck,
  FaThumbsUp,
  FaPhoneAlt,
} from "react-icons/fa";

import whyChooseImage from "../assets/images/why-choose-us.webp";

const features = [
  {
    icon: <FaShieldAlt size={28} />,
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for your safety, protection, and complete peace of mind.",
  },
  {
    icon: <FaUsers size={28} />,
    title: "Experienced Team",
    description:
      "Our skilled professionals bring years of experience in premium landscaping and tree care.",
  },
  {
    icon: <FaClock size={28} />,
    title: "24/7 Emergency",
    description:
      "Available day and night for storm damage and urgent, hazardous tree emergencies.",
  },
  {
    icon: <FaDollarSign size={28} />,
    title: "Transparent Pricing",
    description:
      "Competitive, honest pricing without ever compromising our high-end service quality.",
  },
  {
    icon: <FaClipboardCheck size={28} />,
    title: "Free Estimates",
    description:
      "Receive a detailed, no-obligation estimate before your landscaping or tree work begins.",
  },
  {
    icon: <FaThumbsUp size={28} />,
    title: "Guaranteed Satisfaction",
    description:
      "We are deeply committed to delivering dependable service and breathtaking results.",
  },
];

function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-green-100 opacity-60 blur-[100px]" />
      <div className="absolute bottom-0 right-0 translate-y-1/3 h-[600px] w-[600px] rounded-full bg-emerald-50 opacity-80 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-green-700">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            Why Choose Us
          </span>

          <h2 className="mt-8 text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-[3.5rem]">
            Excellence in Every
            <span className="block mt-2 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Branch & Blade
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            At Native Landscaping & Tree Services, we blend artistry with safety.
            Our commitment to premium quality ensures your outdoor spaces are not just maintained, but masterfully transformed.
          </p>
        </div>

        {/* Dynamic Image & Stats Layout */}
        <div className="relative mb-24 lg:mx-auto lg:max-w-4xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-2 shadow-2xl mx-auto">
            <img
              src={whyChooseImage}
              alt="Native Landscaping Team at Work"
              loading="lazy"
              className="h-[250px] w-full rounded-[2rem] object-cover sm:h-[350px] lg:h-[400px] transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Floating Stats Card */}
          <div className="absolute -bottom-10 right-8 sm:right-16 md:-right-10 lg:-right-16 flex items-center gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-2xl transition-transform hover:-translate-y-2">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg text-white">
              <span className="text-3xl font-black">15+</span>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">Years of</p>
              <p className="text-green-600 font-bold tracking-wide">Premium Experience</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-50 blur-2xl transition-all group-hover:bg-green-100/50" />
              
              <div className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-green-50 to-green-100 p-4 text-green-600 ring-1 ring-green-100 transition-transform duration-500 group-hover:scale-110 group-hover:text-green-700">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="leading-relaxed text-gray-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>

        {/* Premium CTA */}
        <div className="mt-20 flex justify-center">
          <div className="group relative rounded-full p-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 bg-[length:200%_auto] hover:animate-pulse">
            <a
              href="tel:+13155550198"
              className="relative flex items-center gap-4 rounded-full bg-white px-10 py-5 transition-all group-hover:bg-green-50"
            >
              <div className="flex items-center justify-center rounded-full bg-green-600 p-3 text-white">
                <FaPhoneAlt size={20} />
              </div>
              <div className="text-left">
                <span className="block text-xs font-bold uppercase tracking-wider text-green-700">
                  Ready to transform your space?
                </span>
                <span className="block text-2xl font-black text-gray-900">
                  Call  (518) 671-8733
                </span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;