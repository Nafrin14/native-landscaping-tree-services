import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaClock,
  FaLeaf,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";

import MainLayout from "../layouts/MainLayout";
import CTASection from "../components/CTASection";

import blogHeroImg from "../assets/images/yard-cleanup.webp";
import post1Img from "../assets/images/tree-trimming.webp";
import post2Img from "../assets/images/tree-removal.webp";
import post3Img from "../assets/images/landscaping.webp";

const blogPosts = [
  {
    id: 1,
    title: "5 Signs It’s Time to Remove a Tree from Your Property",
    excerpt:
      "Learn how to identify dangerous trees before they cause damage. Look out for leaning trunks, dead branches, and root problems.",
    date: "August 12, 2024",
    author: "Native Landscaping",
    readingTime: "5 min read",
    image: post2Img,
    category: "Tree Care",
    content: [
      "Trees add beauty, shade, and value to a property, but damaged or unhealthy trees can become a serious safety risk. Recognizing the warning signs early can help prevent property damage and personal injury.",
      "A tree that begins leaning suddenly may have damaged roots or an unstable trunk. Large dead branches, visible cracks, cavities, fungal growth, and peeling bark can also indicate that the tree is weakening.",
      "Root damage is another important warning sign. Construction work, soil erosion, disease, and water problems can affect the stability of the tree even when the upper portion still appears healthy.",
      "A professional inspection can determine whether pruning, treatment, or complete tree removal is the safest solution for your property.",
    ],
    tips: [
      "The tree is leaning more than usual",
      "Large branches are dead or broken",
      "The trunk has deep cracks or cavities",
      "Roots are damaged or exposed",
      "The tree is too close to a building or utility line",
    ],
  },
  {
    id: 2,
    title: "The Ultimate Guide to Seasonal Yard Cleanup",
    excerpt:
      "Prepare your lawn for changing seasons with practical tips covering leaf removal, trimming, debris cleanup, and soil care.",
    date: "September 05, 2024",
    author: "Native Landscaping",
    readingTime: "6 min read",
    image: post1Img,
    category: "Landscaping",
    content: [
      "Seasonal yard cleanup helps keep your outdoor space healthy, safe, and attractive throughout the year. Each season creates different maintenance requirements for lawns, gardens, trees, and planted areas.",
      "Removing fallen leaves and branches prevents moisture buildup and reduces the possibility of pests, mold, and lawn damage. Overgrown plants should also be trimmed to improve airflow and support healthy growth.",
      "Spring is an ideal time to remove winter debris and prepare planting areas. During autumn, leaf removal, branch trimming, and final lawn maintenance can help protect the property before colder conditions arrive.",
      "A complete cleanup also provides an opportunity to inspect trees, fences, drainage areas, and outdoor structures for damage.",
    ],
    tips: [
      "Remove fallen leaves and branches",
      "Trim overgrown plants and shrubs",
      "Clear garden beds and walkways",
      "Inspect trees for damaged branches",
      "Prepare the lawn for the next season",
    ],
  },
  {
    id: 3,
    title: "How Professional Landscaping Boosts Property Value",
    excerpt:
      "Discover how attractive landscaping, healthy lawns, and well-maintained outdoor areas can improve the value and appearance of a property.",
    date: "September 28, 2024",
    author: "Native Landscaping",
    readingTime: "7 min read",
    image: post3Img,
    category: "Home Improvement",
    content: [
      "Professional landscaping creates a strong first impression and can significantly improve the appearance of residential and commercial properties.",
      "A healthy lawn, properly maintained trees, attractive planting areas, and clean walkways make a property feel more organized and welcoming. These improvements can also make outdoor areas more functional.",
      "Regular maintenance protects the investment by preventing overgrowth, tree damage, drainage problems, and unhealthy plants. Simple improvements can often produce noticeable results without requiring a complete landscape renovation.",
      "A professional landscaping plan considers the property size, sunlight, soil conditions, maintenance requirements, and the long-term goals of the owner.",
    ],
    tips: [
      "Maintain a clean and healthy lawn",
      "Trim trees and shrubs regularly",
      "Add attractive planting areas",
      "Keep pathways and borders organized",
      "Remove damaged or overgrown vegetation",
    ],
  },
];

function Blog() {
  const [expandedPost, setExpandedPost] = useState(null);

  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  const togglePost = (postId) => {
    setExpandedPost((currentPost) =>
      currentPost === postId ? null : postId
    );
  };

  return (
    <MainLayout>
      {/* Blog Introduction */}
      <section className="relative overflow-hidden bg-[#f3f8f4] pb-20 pt-32 lg:pb-24 lg:pt-40">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-28 top-10 h-80 w-80 rounded-full bg-green-200/50 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#078c45]/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* Hero Content */}
            <div>
              <span className="inline-flex items-center gap-3 rounded-full border border-green-200 bg-white px-5 py-2.5 text-sm font-extrabold uppercase tracking-[0.2em] text-[#078c45] shadow-sm">
                <FaLeaf />
                Insights &amp; Advice
              </span>

              <h1 className="mt-7 text-5xl font-black leading-[1.05] text-[#10351f] sm:text-6xl lg:text-7xl">
                Helpful Ideas for a
                <span className="mt-2 block text-[#078c45]">
                  Better Outdoor Space
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-8 text-gray-600">
                Explore professional tree care advice, landscaping ideas,
                seasonal maintenance guides, and practical tips to keep your
                property safe, healthy, and attractive.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#latest-articles"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#078c45] px-8 py-4 text-lg font-extrabold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#066f38]"
                >
                  Browse Articles
                  <FaArrowRight />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#10351f] px-8 py-4 text-lg font-extrabold text-[#10351f] transition-all duration-300 hover:-translate-y-1 hover:bg-[#10351f] hover:text-white"
                >
                  Ask Our Experts
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] shadow-2xl">
                <img
                  src={blogHeroImg}
                  alt="Landscaping and yard care advice"
                  width="1200"
                  height="900"
                  loading="eager"
                  fetchPriority="high"
                  className="h-[430px] w-full object-cover sm:h-[520px] lg:h-[590px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/65 via-transparent to-transparent" />

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-300">
                    Native Landscaping Blog
                  </p>

                  <p className="mt-3 max-w-lg text-2xl font-black leading-tight sm:text-3xl">
                    Expert guidance for healthier trees and beautiful
                    landscapes.
                  </p>
                </div>
              </div>

              <div className="absolute -right-5 -top-5 -z-10 h-full w-full rounded-[2.5rem] border-2 border-green-200" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section
        id="latest-articles"
        className="scroll-mt-24 bg-white py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Heading */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#078c45]">
                Featured Article
              </span>

              <h2 className="mt-4 text-4xl font-black text-[#10351f] sm:text-5xl">
                Latest Landscaping Insights
              </h2>
            </div>

            <p className="max-w-lg leading-7 text-gray-600">
              Practical information written to help homeowners make informed
              decisions about landscaping, tree care, and outdoor maintenance.
            </p>
          </div>

          {/* Featured Article Card */}
          <article className="mt-14 overflow-hidden rounded-[2.5rem] border border-green-100 bg-[#f7faf8] shadow-sm">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Image */}
              <div className="relative min-h-[380px] overflow-hidden lg:min-h-[570px]">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width="1200"
                  height="900"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/55 via-transparent to-transparent" />

                <span className="absolute left-6 top-6 rounded-full bg-[#078c45] px-5 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-white shadow-lg">
                  {featuredPost.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold text-gray-500">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-[#078c45]" />
                    {featuredPost.date}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaClock className="text-[#078c45]" />
                    {featuredPost.readingTime}
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-black leading-tight text-[#10351f] sm:text-4xl">
                  {featuredPost.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-gray-600">
                  {featuredPost.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-100 text-[#078c45]">
                    <FaUser />
                  </span>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                      Written by
                    </p>

                    <p className="font-extrabold text-[#10351f]">
                      {featuredPost.author}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => togglePost(featuredPost.id)}
                  aria-expanded={expandedPost === featuredPost.id}
                  className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-[#10351f] px-7 py-3.5 font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#078c45]"
                >
                  {expandedPost === featuredPost.id
                    ? "Close Article"
                    : "Read Full Article"}

                  {expandedPost === featuredPost.id ? (
                    <FaChevronUp />
                  ) : (
                    <FaArrowRight />
                  )}
                </button>
              </div>
            </div>

            {/* Expanded Featured Content */}
            <div
              className={`grid transition-all duration-500 ${
                expandedPost === featuredPost.id
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-green-100 bg-white px-8 py-10 sm:px-12 lg:px-16">
                  <div className="grid gap-10 lg:grid-cols-[1fr_0.45fr]">
                    <div className="space-y-5">
                      {featuredPost.content.map((paragraph, index) => (
                        <p
                          key={index}
                          className="text-lg leading-8 text-gray-600"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <aside className="rounded-3xl bg-[#f1f7f3] p-7">
                      <p className="text-lg font-black text-[#10351f]">
                        Important Warning Signs
                      </p>

                      <ul className="mt-5 space-y-4">
                        {featuredPost.tips.map((tip) => (
                          <li
                            key={tip}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#078c45]" />
                            <span className="leading-7">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </aside>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* More Articles */}
      <section className="bg-[#f3f8f4] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#078c45]">
              More Helpful Guides
            </span>

            <h2 className="mt-5 text-4xl font-black text-[#10351f] sm:text-5xl">
              Explore Our Recent Articles
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Read useful advice about seasonal cleanup, landscape
              improvements, property safety, and professional tree care.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {remainingPosts.map((post) => {
              const isExpanded = expandedPost === post.id;

              return (
                <article
                  key={post.id}
                  className="overflow-hidden rounded-[2rem] border border-green-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  {/* Article Image */}
                  <div className="group relative h-72 overflow-hidden sm:h-80">
                    <img
                      src={post.image}
                      alt={post.title}
                      width="900"
                      height="650"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#052e16]/50 via-transparent to-transparent" />

                    <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#078c45] shadow-md">
                      {post.category}
                    </span>
                  </div>

                  {/* Article Summary */}
                  <div className="p-7 sm:p-8">
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-gray-500">
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-[#078c45]" />
                        {post.date}
                      </span>

                      <span className="flex items-center gap-2">
                        <FaClock className="text-[#078c45]" />
                        {post.readingTime}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-black leading-tight text-[#10351f]">
                      {post.title}
                    </h3>

                    <p className="mt-4 leading-7 text-gray-600">
                      {post.excerpt}
                    </p>

                    <button
                      type="button"
                      onClick={() => togglePost(post.id)}
                      aria-expanded={isExpanded}
                      className="mt-7 inline-flex items-center gap-3 font-extrabold text-[#078c45] transition-colors hover:text-[#10351f]"
                    >
                      {isExpanded ? "Close Article" : "Read Full Article"}

                      {isExpanded ? (
                        <FaChevronUp />
                      ) : (
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Content */}
                  <div
                    className={`grid transition-all duration-500 ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-green-100 px-7 py-8 sm:px-8">
                        <div className="space-y-5">
                          {post.content.map((paragraph, index) => (
                            <p
                              key={index}
                              className="leading-8 text-gray-600"
                            >
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        <div className="mt-7 rounded-2xl bg-[#f3f8f4] p-6">
                          <p className="font-black text-[#10351f]">
                            Helpful Checklist
                          </p>

                          <ul className="mt-4 space-y-3">
                            {post.tips.map((tip) => (
                              <li
                                key={tip}
                                className="flex items-start gap-3 text-gray-700"
                              >
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#078c45]" />
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Contact Strip */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 rounded-[2rem] border border-green-100 bg-[#f7faf8] px-8 py-10 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#078c45]">
                Need Professional Advice?
              </p>

              <h2 className="mt-3 text-3xl font-black text-[#10351f]">
                Let Our Team Inspect Your Outdoor Space
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-gray-600">
                Contact us for professional recommendations, a property
                inspection, or a free landscaping and tree service estimate.
              </p>
            </div>

            <a
              href="tel: (518) 671-8733"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#10351f] px-8 py-4 text-lg font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#078c45]"
            >
              <FaPhoneAlt />
              (518) 671-8733
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </MainLayout>
  );
}

export default Blog;