import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaClipboardCheck,
  FaLeaf,
  FaPhoneAlt,
  FaTools,
  FaUserCheck,
} from "react-icons/fa";

import MainLayout from "../layouts/MainLayout";
import CTASection from "../components/CTASection";

import landscaping from "../assets/images/landscaping.webp";
import treeRemoval from "../assets/images/tree-removal.webp";
import treeTrimming from "../assets/images/tree-trimming.webp";
import stumpGrinding from "../assets/images/stump-grinding.webp";
import emergencyTree from "../assets/images/emergency-tree.webp";
import yardCleanup from "../assets/images/yard-cleanup.webp";

const services = [
  {
    number: "01",
    title: "Tree Removal",
    image: treeRemoval,
    description:
      "Safe and professional tree removal for hazardous, damaged, diseased, or unwanted trees.",
    details:
      "Our experienced team carefully inspects the tree and surrounding property before selecting the safest removal method. We use professional equipment to protect nearby buildings, landscaping, utility lines, and outdoor areas.",
    benefits: [
      "Hazardous and damaged tree removal",
      "Residential and commercial service",
      "Professional equipment and trained crew",
      "Complete debris removal and cleanup",
    ],
  },
  {
    number: "02",
    title: "Tree Trimming",
    image: treeTrimming,
    description:
      "Professional trimming and pruning designed to improve tree health, safety, and appearance.",
    details:
      "Regular pruning removes weak, dead, damaged, and overgrown branches. It also helps trees grow properly, improves sunlight exposure, and reduces the possibility of falling branches during strong winds and storms.",
    benefits: [
      "Dead and dangerous branch removal",
      "Improved tree health and structure",
      "Better property appearance",
      "Reduced risk of storm damage",
    ],
  },
  {
    number: "03",
    title: "Stump Grinding",
    image: stumpGrinding,
    description:
      "Efficient stump grinding that restores a safer, cleaner, and more usable outdoor area.",
    details:
      "Old tree stumps can attract insects, create trip hazards, and make lawn maintenance difficult. Our stump grinding equipment removes stumps below ground level so the area can be covered, replanted, or landscaped.",
    benefits: [
      "Removes unwanted tree stumps",
      "Reduces pest and insect problems",
      "Eliminates dangerous trip hazards",
      "Creates space for grass or planting",
    ],
  },
  {
    number: "04",
    title: "Landscaping",
    image: landscaping,
    description:
      "Complete landscaping solutions created to improve the beauty and function of your property.",
    details:
      "We provide customized landscaping services for residential and commercial outdoor spaces. Our team can help with planting, lawn maintenance, garden care, property improvements, and seasonal landscape cleanup.",
    benefits: [
      "Customized landscape solutions",
      "Lawn and garden maintenance",
      "Planting and outdoor improvements",
      "Residential and commercial service",
    ],
  },
  {
    number: "05",
    title: "Emergency Tree Service",
    image: emergencyTree,
    description:
      "Fast emergency response for storm-damaged, fallen, broken, and hazardous trees.",
    details:
      "Unexpected tree damage can create serious risks for your family, home, vehicles, and nearby structures. Our emergency team responds quickly to secure the area, remove dangerous trees or branches, and complete the necessary cleanup.",
    benefits: [
      "24/7 emergency response",
      "Storm-damaged tree removal",
      "Fallen branch and debris removal",
      "Fast and safe property cleanup",
    ],
  },
  {
    number: "06",
    title: "Yard Cleanup",
    image: yardCleanup,
    description:
      "Complete outdoor cleanup for leaves, branches, debris, overgrowth, and storm damage.",
    details:
      "Our yard cleanup service helps restore a clean and organized outdoor space. We remove leaves, fallen branches, unwanted vegetation, storm debris, and other materials from residential and commercial properties.",
    benefits: [
      "Leaf and branch removal",
      "Storm debris cleanup",
      "Overgrown vegetation clearing",
      "Clean and attractive outdoor spaces",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    icon: <FaClipboardCheck />,
    title: "Free Consultation",
    description:
      "Tell us about your landscaping or tree care needs and schedule a property assessment.",
  },
  {
    number: "02",
    icon: <FaUserCheck />,
    title: "Property Inspection",
    description:
      "Our team inspects the property and recommends the safest and most effective solution.",
  },
  {
    number: "03",
    icon: <FaTools />,
    title: "Professional Service",
    description:
      "Our experienced crew completes the work using professional tools and safe working methods.",
  },
  {
    number: "04",
    icon: <FaCheckCircle />,
    title: "Final Cleanup",
    description:
      "We remove branches, leaves, and debris before completing a final property inspection.",
  },
];

const faqs = [
  {
    question: "Do you provide free estimates?",
    answer:
      "Yes. We provide free, no-obligation estimates for landscaping, tree removal, trimming, stump grinding, yard cleanup, and other outdoor services.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Our team is licensed and insured to provide professional landscaping and tree care services safely and responsibly.",
  },
  {
    question: "Do you offer emergency tree service?",
    answer:
      "Yes. We provide emergency assistance for fallen trees, broken branches, storm damage, and other hazardous tree situations.",
  },
  {
    question: "Do you clean the property after the work?",
    answer:
      "Yes. Cleanup is part of our service. We remove branches, leaves, wood, and other service-related debris from the work area.",
  },
  {
    question: "How long does a tree service project take?",
    answer:
      "The project duration depends on the tree size, condition, location, accessibility, and service required. We explain the estimated timeframe during the inspection.",
  },
];

function Services() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <MainLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f3f8f4] pb-20 pt-32 lg:pb-24 lg:pt-40">
        <div className="pointer-events-none absolute -left-28 top-16 h-80 w-80 rounded-full bg-green-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#078c45]/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <span className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-white px-5 py-2.5 text-sm font-extrabold uppercase tracking-[0.2em] text-[#078c45] shadow-sm">
              <FaLeaf />
              Our Services
            </span>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] text-[#10351f] sm:text-6xl lg:text-7xl">
              Professional Care for
              <span className="mt-2 block text-[#078c45]">
                Your Outdoor Property
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
              Explore our complete landscaping and tree care solutions. Every
              service is completed with safety, quality workmanship, and
              customer satisfaction as our priorities.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#detailed-services"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#078c45] px-8 py-4 text-lg font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#066f38]"
              >
                View All Services
                <FaArrowRight />
              </a>

              <a
                href="tel: (518) 671-8733"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#10351f] px-8 py-4 text-lg font-extrabold text-[#10351f] transition-all duration-300 hover:bg-[#10351f] hover:text-white"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
              <img
                src={landscaping}
                alt="Professional landscaping and tree care"
                width="1100"
                height="900"
                loading="eager"
                fetchPriority="high"
                className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[590px]"
              />
            </div>

            <div className="absolute -bottom-6 left-5 right-5 rounded-3xl border border-white/70 bg-white/95 p-5 shadow-xl backdrop-blur sm:left-8 sm:right-auto sm:w-[315px]">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#078c45]">
                Complete Outdoor Care
              </p>

              <p className="mt-2 text-xl font-extrabold text-[#10351f]">
                Landscaping and tree services you can depend on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section
        id="detailed-services"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#078c45]">
              Complete Service Details
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#10351f] sm:text-5xl">
              Everything Your Outdoor Space Needs
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Each service is tailored to your property, safety requirements,
              and outdoor improvement goals.
            </p>
          </div>

          <div className="mt-16 space-y-16 lg:space-y-24">
            {services.map((service, index) => {
              const reverse = index % 2 !== 0;

              return (
                <article
                  key={service.title}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="group relative overflow-hidden rounded-[2rem] shadow-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        width="1000"
                        height="750"
                        loading="lazy"
                        className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[440px] lg:h-[500px]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/55 via-transparent to-transparent" />

                      <span className="absolute bottom-6 left-6 text-5xl font-black text-white/90">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  <div className={reverse ? "lg:order-1" : ""}>
                    <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-extrabold text-[#078c45]">
                      Service {service.number}
                    </span>

                    <h3 className="mt-5 text-4xl font-black text-[#10351f]">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-xl font-semibold leading-8 text-[#31513d]">
                      {service.description}
                    </p>

                    <p className="mt-5 leading-8 text-gray-600">
                      {service.details}
                    </p>

                    <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <FaCheckCircle className="mt-1 shrink-0 text-[#078c45]" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#10351f] px-7 py-3.5 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#078c45]"
                    >
                      Request This Service
                      <FaArrowRight />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f4f8f5] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#078c45]">
              How We Work
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#10351f] sm:text-5xl">
              Simple, Safe and Professional
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our clear four-step process keeps every project organized from
              the first consultation to the final cleanup.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="relative rounded-[2rem] border border-green-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="absolute right-6 top-5 text-5xl font-black text-green-100">
                  {step.number}
                </span>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#078c45] text-xl text-white">
                  {step.icon}
                </div>

                <h3 className="mt-6 text-xl font-extrabold text-[#10351f]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#078c45]">
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#10351f] sm:text-5xl">
              Questions About Our Services
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Find answers to common questions about our landscaping and tree
              care services.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <article
                  key={faq.question}
                  className="overflow-hidden rounded-2xl border border-green-100 bg-[#f8fbf9]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-extrabold text-[#10351f]">
                      {faq.question}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#078c45] shadow-sm">
                      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-green-100 px-6 py-5 leading-8 text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </MainLayout>
  );
}

export default Services;