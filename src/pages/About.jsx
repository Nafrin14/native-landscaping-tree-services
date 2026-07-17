import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaAward,
  FaCheckCircle,
  FaClock,
  FaHandshake,
  FaLeaf,
  FaPhoneAlt,
  FaSeedling,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

import MainLayout from "../layouts/MainLayout";
import CTASection from "../components/CTASection";

import aboutHeroImg from "../assets/images/about.webp";
import teamImage from "../assets/images/why-choose-us.webp";

const statistics = [
  {
    value: "15+",
    label: "Years Experience",
  },
  {
    value: "500+",
    label: "Projects Completed",
  },
  {
    value: "350+",
    label: "Happy Customers",
  },
  {
    value: "24/7",
    label: "Emergency Support",
  },
];

const values = [
  {
    icon: <FaShieldAlt />,
    title: "Safety First",
    description:
      "We follow safe working practices and use professional equipment on every project.",
  },
  {
    icon: <FaAward />,
    title: "Quality Work",
    description:
      "We focus on dependable workmanship and long-lasting outdoor improvements.",
  },
  {
    icon: <FaHandshake />,
    title: "Honest Service",
    description:
      "Our customers receive clear communication, transparent pricing, and reliable support.",
  },
  {
    icon: <FaLeaf />,
    title: "Property Care",
    description:
      "We treat every lawn, landscape, and tree with attention, respect, and professional care.",
  },
];

const commitments = [
  "Licensed and insured outdoor service team",
  "Experienced landscaping and tree care professionals",
  "Clear estimates with honest recommendations",
  "Clean and organized project completion",
  "Residential and commercial property services",
  "Fast emergency tree service response",
];

function About() {
  return (
    <MainLayout>
      {/* About Hero */}
      <section className="relative overflow-hidden bg-[#f3f8f4] pb-20 pt-32 lg:pb-24 lg:pt-40">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-green-200/50 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#078c45]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-8">
          {/* Hero Content */}
          <div>
            <span className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-white px-5 py-2.5 text-sm font-extrabold uppercase tracking-[0.2em] text-[#078c45] shadow-sm">
              <FaLeaf />
              About Our Company
            </span>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] text-[#10351f] sm:text-6xl lg:text-7xl">
              Local Experts Who Care About
              <span className="mt-2 block text-[#078c45]">
                Your Outdoor Space
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Native Landscaping &amp; Tree Services provides dependable
              landscaping, tree care, property cleanup, and emergency services
              with safety, professionalism, and customer satisfaction at the
              center of every project.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#our-story"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#078c45] px-8 py-4 text-lg font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#066f38] hover:shadow-xl"
              >
                Discover Our Story
                <FaArrowRight />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#10351f] px-8 py-4 text-lg font-extrabold text-[#10351f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#10351f] hover:text-white"
              >
                Get Free Estimate
              </Link>
            </div>

            {/* Small trust information */}
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4">
              <div className="flex items-center gap-3 font-bold text-[#31513d]">
                <FaCheckCircle className="text-[#078c45]" />
                Licensed &amp; Insured
              </div>

              <div className="flex items-center gap-3 font-bold text-[#31513d]">
                <FaClock className="text-[#078c45]" />
                24/7 Emergency Service
              </div>

              <div className="flex items-center gap-3 font-bold text-[#31513d]">
                <FaUsers className="text-[#078c45]" />
                Experienced Team
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img
                src={aboutHeroImg}
                alt="Native Landscaping and Tree Services team"
                width="1100"
                height="900"
                loading="eager"
                fetchPriority="high"
                className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[600px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/55 via-transparent to-transparent" />
            </div>

            {/* Experience card */}
            <div className="absolute -bottom-7 left-5 right-5 rounded-3xl border border-white/70 bg-white/95 p-5 shadow-xl backdrop-blur-md sm:left-8 sm:right-auto sm:w-[315px]">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#078c45] text-2xl text-white">
                  <FaAward />
                </span>

                <div>
                  <p className="text-3xl font-black text-[#10351f]">15+</p>

                  <p className="font-bold text-gray-600">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-5 -top-5 -z-10 h-full w-full rounded-[2.5rem] border-2 border-green-200" />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        id="our-story"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          {/* Story Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2.25rem] shadow-xl">
              <img
                src={teamImage}
                alt="Professional landscaping and tree service team"
                width="1000"
                height="1100"
                loading="lazy"
                className="h-[480px] w-full object-cover sm:h-[580px] lg:h-[680px]"
              />
            </div>

            <div className="absolute -bottom-7 -right-4 rounded-3xl bg-[#10351f] px-7 py-6 text-white shadow-xl sm:right-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-green-300">
                Our Promise
              </p>

              <p className="mt-2 max-w-[240px] text-xl font-extrabold leading-7">
                Reliable outdoor care with results you can trust.
              </p>
            </div>
          </div>

          {/* Story Content */}
          <div>
            <span className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#078c45]">
              Our Story
            </span>

            <h2 className="mt-5 text-4xl font-black leading-tight text-[#10351f] sm:text-5xl">
              Built on Hard Work, Experience and Local Trust
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Native Landscaping &amp; Tree Services was built with one clear
              goal: to provide property owners with safe, dependable, and
              professional outdoor services they can trust.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              What began as a commitment to helping local homeowners maintain
              beautiful and safe outdoor spaces has grown into a complete
              landscaping and tree care service. Today, we assist residential
              and commercial customers with projects of every size.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our team approaches every property with attention and respect.
              From the first inspection to the final cleanup, we communicate
              clearly, work carefully, and focus on delivering dependable
              results.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {commitments.map((commitment) => (
                <div
                  key={commitment}
                  className="flex items-start gap-3 rounded-2xl bg-[#f5faf6] p-4"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-[#078c45]" />

                  <span className="font-semibold leading-6 text-gray-700">
                    {commitment}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-[#10351f] py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((statistic) => (
              <div
                key={statistic.label}
                className="border-white/10 px-4 lg:border-r lg:last:border-r-0"
              >
                <p className="text-4xl font-black text-green-300 sm:text-5xl">
                  {statistic.value}
                </p>

                <p className="mt-3 font-bold text-white">
                  {statistic.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-[#f4f8f5] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#078c45]">
              Our Direction
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#10351f] sm:text-5xl">
              Our Mission and Vision
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our work is guided by a commitment to safe service, healthy
              outdoor spaces, and strong customer relationships.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {/* Mission */}
            <article className="group relative overflow-hidden rounded-[2rem] border border-green-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-10">
              <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-green-100" />

              <div className="relative z-10">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#078c45] text-2xl text-white shadow-lg">
                  <FaSeedling />
                </span>

                <h3 className="mt-7 text-3xl font-black text-[#10351f]">
                  Our Mission
                </h3>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  To provide dependable landscaping and tree care services that
                  protect properties, improve outdoor spaces, and deliver
                  lasting value through safe practices and quality
                  workmanship.
                </p>
              </div>
            </article>

            {/* Vision */}
            <article className="group relative overflow-hidden rounded-[2rem] bg-[#0b3d22] p-8 text-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-10">
              <div className="absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-green-400/10" />

              <div className="relative z-10">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-300 text-2xl text-[#0b3d22] shadow-lg">
                  <FaLeaf />
                </span>

                <h3 className="mt-7 text-3xl font-black">Our Vision</h3>

                <p className="mt-5 text-lg leading-8 text-green-50/80">
                  To become a trusted local name for professional outdoor care
                  by building long-term relationships and consistently
                  delivering safe, honest, and high-quality service.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#078c45]">
              What Guides Us
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#10351f] sm:text-5xl">
              The Values Behind Our Work
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              These values guide the way we communicate, plan, work, and care
              for every customer&apos;s property.
            </p>
          </div>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="group rounded-[2rem] border border-green-100 bg-[#f8fbf9] p-7 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#078c45] text-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#10351f]">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team Message */}
      <section className="bg-[#f4f8f5] py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl text-[#078c45]">
            <FaUsers />
          </span>

          <h2 className="mt-7 text-4xl font-black text-[#10351f] sm:text-5xl">
            A Team You Can Depend On
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Our experienced team is committed to listening carefully,
            explaining every recommendation, and completing each project with
            professionalism. Your property&apos;s safety, appearance, and
            long-term health are always important to us.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#078c45] px-8 py-4 text-lg font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#066f38]"
            >
              Explore Our Services
              <FaArrowRight />
            </Link>

            <a
              href="tel:+13155550198"
              className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#10351f] px-8 py-4 text-lg font-extrabold text-[#10351f] transition-all duration-300 hover:bg-[#10351f] hover:text-white"
            >
              <FaPhoneAlt />
               (518) 671-8733
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </MainLayout>
  );
}

export default About;