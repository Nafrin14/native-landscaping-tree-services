import { useEffect } from "react";
import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";

import MainLayout from "../layouts/MainLayout";

const contactDetails = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    value: " (518) 671-8733",
    description: "Speak directly with our service team.",
    href: "tel: (518) 671-8733",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    value: "",
    description: "Send us your questions or project details.",
    href: "",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Service Area",
    value: " New York",
    description: "Serving nearby residential and commercial properties.",
  },
  {
    icon: <FaClock />,
    title: "Working Hours",
    value: "Mon – Sat: 7:00 AM – 7:00 PM",
    description: "24/7 emergency tree service available.",
  },
];

function Contact() {
  useEffect(() => {
    const existingScript = document.getElementById("ghl-form-embed-script");

    if (!existingScript) {
      const script = document.createElement("script");

      script.src = "https://link.kdlead.com/js/form_embed.js";
      script.async = true;
      script.id = "ghl-form-embed-script";

      document.body.appendChild(script);
    }
  }, []);

  return (
    <MainLayout>
      {/* Contact Hero */}
      <section className="relative overflow-hidden bg-[#0b3d22] pb-20 pt-32 lg:pb-24 lg:pt-40">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />

        <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-green-300/10 blur-3xl" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:24px_24px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-extrabold uppercase tracking-[0.2em] text-green-200 backdrop-blur">
              <FaLeaf />
              Contact Our Team
            </span>

            <h1 className="mt-7 text-5xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              Let&apos;s Improve Your
              <span className="mt-2 block text-green-300">
                Outdoor Property
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-green-50/80">
              Tell us about your landscaping, tree care, yard cleanup, or
              emergency service needs. Our team will review your request and
              contact you as soon as possible.
            </p>

            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
              <div className="flex items-center gap-3 font-bold text-white">
                <FaShieldAlt className="text-green-300" />
                Licensed &amp; Insured
              </div>

              <div className="flex items-center gap-3 font-bold text-white">
                <FaClock className="text-green-300" />
                Fast Response
              </div>

              <div className="flex items-center gap-3 font-bold text-white">
                <FaLeaf className="text-green-300" />
                Free Estimates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative z-10 -mt-10 pb-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactDetails.map((detail) => {
              const CardContent = (
                <>
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-xl text-[#078c45] transition-all duration-300 group-hover:bg-[#078c45] group-hover:text-white">
                    {detail.icon}
                  </span>

                  <h2 className="mt-5 text-xl font-black text-[#10351f]">
                    {detail.title}
                  </h2>

                  <p className="mt-2 font-extrabold text-[#078c45]">
                    {detail.value}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {detail.description}
                  </p>
                </>
              );

              return detail.href ? (
                <a
                  key={detail.title}
                  href={detail.href}
                  className="group rounded-[1.75rem] border border-green-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {CardContent}
                </a>
              ) : (
                <article
                  key={detail.title}
                  className="group rounded-[1.75rem] border border-green-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {CardContent}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#f4f8f5] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            {/* Left Side Content */}
            <div className="lg:sticky lg:top-28">
              <span className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#078c45]">
                Request a Free Estimate
              </span>

              <h2 className="mt-5 text-4xl font-black leading-tight text-[#10351f] sm:text-5xl">
                Tell Us About Your Project
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Complete the form with your contact information and service
                requirements. Please provide as much detail as possible so our
                team can better understand your project.
              </p>

              <div className="mt-9 space-y-5">
                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#078c45] font-black text-white">
                    1
                  </span>

                  <div>
                    <h3 className="font-extrabold text-[#10351f]">
                      Submit Your Request
                    </h3>

                    <p className="mt-1 leading-7 text-gray-600">
                      Enter your contact details and select the service you
                      require.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#078c45] font-black text-white">
                    2
                  </span>

                  <div>
                    <h3 className="font-extrabold text-[#10351f]">
                      Property Review
                    </h3>

                    <p className="mt-1 leading-7 text-gray-600">
                      Our team will contact you to discuss the project and
                      property details.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#078c45] font-black text-white">
                    3
                  </span>

                  <div>
                    <h3 className="font-extrabold text-[#10351f]">
                      Receive Your Estimate
                    </h3>

                    <p className="mt-1 leading-7 text-gray-600">
                      We&apos;ll provide a clear recommendation and service
                      estimate.
                    </p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-10 rounded-[1.75rem] bg-[#10351f] p-7 text-white shadow-xl">
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-green-300">
                  Emergency Tree Service
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  Need Immediate Assistance?
                </h3>

                <p className="mt-3 leading-7 text-green-50/80">
                  Call our team for fallen trees, storm damage, dangerous
                  branches, or urgent property hazards.
                </p>

                <a
                  href="tel: (518) 671-8733"
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 font-extrabold text-[#10351f] transition-all duration-300 hover:-translate-y-1 hover:bg-green-100"
                >
                  <FaPhoneAlt />
                   (518) 671-8733
                </a>
              </div>
            </div>

            {/* GHL Form */}
            <div className="overflow-hidden rounded-[2rem] border border-green-100 bg-white p-3 shadow-xl sm:p-5">
              <iframe
                src="https://link.kdlead.com/widget/form/zX9UJuJIGsoIMHbybrVj"
                id="inline-zX9UJuJIGsoIMHbybrVj"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="915"
                data-layout-iframe-id="inline-zX9UJuJIGsoIMHbybrVj"
                data-form-id="zX9UJuJIGsoIMHbybrVj"
                title="Native Landscaping Contact Form"
                loading="lazy"
                className="h-[915px] w-full rounded-2xl border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-10 rounded-[2rem] border border-green-100 bg-[#f7faf8] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:p-12">
            <div>
              <span className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#078c45]">
                Local Service Area
              </span>

              <h2 className="mt-4 text-3xl font-black text-[#10351f] sm:text-4xl">
                Serving Syracuse and Nearby Areas
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
                We provide landscaping, tree care, stump grinding, emergency
                tree service, and yard cleanup for residential and commercial
                properties throughout Syracuse and surrounding communities.
              </p>
            </div>

            <a
              href="tel: (518) 671-8733"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#078c45] px-8 py-4 text-lg font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#066f38]"
            >
              <FaPhoneAlt />
              Call Our Team
            </a>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="bg-[#10351f] py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left lg:px-8">
          <div>
            <h2 className="text-2xl font-black text-white">
              Follow Native Landscaping
            </h2>

            <p className="mt-2 text-green-50/70">
              View our latest projects, property tips, and service updates.
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:text-[#10351f]"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-400 hover:text-[#10351f]"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Contact;