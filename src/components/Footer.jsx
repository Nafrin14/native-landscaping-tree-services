import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLeaf,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Tree Removal",
  "Tree Trimming",
  "Stump Grinding",
  "Landscaping",
  "Emergency Tree Service",
  "Yard Cleanup",
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#082f1d] text-white">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-green-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-green-400/5 blur-3xl" />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-6">
            <Link to="/" className="inline-flex items-center gap-4">
              <img
                src={logo}
                alt="Native Landscaping and Tree Services logo"
                width="72"
                height="72"
                className="h-16 w-16 object-contain"
              />

              <div>
                <h2 className="text-2xl font-extrabold leading-tight">
                  Native
                </h2>

                <p className="text-xs font-bold uppercase tracking-[0.18em] text-green-300">
                  Landscaping &amp; Tree Services
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm leading-7 text-green-100/80">
              Professional landscaping and tree care services focused on
              safety, quality workmanship, and customer satisfaction.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex gap-3">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-[#078c45]"
              >
                <FaFacebookF />
              </a>

              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-[#078c45]"
              >
                <FaInstagram />
              </a>

              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-[#078c45]"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-extrabold">Quick Links</h3>

            <div className="mt-4 h-1 w-12 rounded-full bg-[#18a957]" />

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-3 text-green-100/80 transition-colors duration-300 hover:text-white"
                  >
                    <FaLeaf className="text-xs text-[#18a957] transition-transform duration-300 group-hover:rotate-12" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-extrabold">Our Services</h3>

            <div className="mt-4 h-1 w-12 rounded-full bg-[#18a957]" />

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="group inline-flex items-center gap-3 text-green-100/80 transition-colors duration-300 hover:text-white"
                  >
                    <FaLeaf className="text-xs text-[#18a957] transition-transform duration-300 group-hover:rotate-12" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-extrabold">Contact Us</h3>

            <div className="mt-4 h-1 w-12 rounded-full bg-[#18a957]" />

            <div className="mt-6 space-y-5">
              <a
                href="tel: (518) 671-8733"
                className="group flex items-start gap-4 text-green-100/80 transition-colors duration-300 hover:text-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#32c875]">
                  <FaPhoneAlt />
                </span>

                <div>
                  <p className="text-sm text-green-200">Call Us</p>
                  <p className="mt-1 font-bold">(518) 671-8733</p>
                </div>
              </a>

              <a
                href=""
                className="group flex items-start gap-4 text-green-100/80 transition-colors duration-300 hover:text-white"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#32c875]">
                  <FaEnvelope />
                </span>

                <div>
                  <p className="text-sm text-green-200">Email Us</p>
                  <p className="mt-1 break-all font-bold">
                    
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 text-green-100/80">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#32c875]">
                  <FaMapMarkerAlt />
                </span>

                <div>
                  <p className="text-sm text-green-200">Service Area</p>
                  <p className="mt-1 font-bold">
                    NY United states
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-green-100/80">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#32c875]">
                  <FaClock />
                </span>

                <div>
                  
                  <p className="mt-1 text-sm text-green-300">
                    Emergency service available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative border-t border-white/10 bg-black/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center text-sm text-green-100/70 sm:flex-row sm:text-left lg:px-8">
          <p>
            © {currentYear} Native Landscaping &amp; Tree Services. All rights
            reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              to="/privacy"
              className="transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors duration-300 hover:text-white"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;