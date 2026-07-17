import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaHome,
  FaUser,
  FaTree,
  FaNewspaper,
  FaEnvelope,
} from "react-icons/fa";

import logo from "../assets/images/logo.webp";

const navLinks = [
  {
    name: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    name: "About",
    path: "/about",
    icon: <FaUser />,
  },
  {
    name: "Services",
    path: "/services",
    icon: <FaTree />,
  },
  {
    name: "Blog",
    path: "/blog",
    icon: <FaNewspaper />,
  },
  {
    name: "Contact",
    path: "/contact",
    icon: <FaEnvelope />,
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={logo}
              alt="Native Landscaping and Tree Services"
              className="h-11 w-11 shrink-0 object-contain sm:h-12 sm:w-12"
            />

            <div className="min-w-0">
              <h1 className="truncate text-[22px] font-black leading-none text-[#0c4a2a] sm:text-2xl">
                Native
              </h1>

             <p className="mt-1 truncate text-[7px] font-extrabold uppercase tracking-[0.25em] text-[#056b36] sm:text-[8px]">
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
               className={({ isActive }) =>
  `relative py-2 text-sm font-bold transition-colors ${
    isActive
      ? "text-[#056b36]"
      : "text-gray-700 hover:text-[#056b36]"
  }`
}
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#056b36] transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Call Button */}
          <a
            href="tel:5186718733"
            className="hidden items-center gap-2 rounded-full bg-[#056b36] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#056f37] lg:flex"
          >
            <FaPhoneAlt />
            (518) 671-8733
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green-100 bg-green-50 text-xl text-[#0c4a2a] transition hover:bg-green-100 lg:hidden"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Dark Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/55 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[86%] max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex min-w-0 items-center gap-3"
          >
            <img
              src={logo}
              alt="Native Landscaping and Tree Services"
              className="h-11 w-11 shrink-0 object-contain"
            />

            <div className="min-w-0">
              <h2 className="truncate text-xl font-black leading-none text-[#0c4a2a]">
                Native
              </h2>

              <p className="mt-1 truncate text-[7px] font-extrabold uppercase tracking-[0.22em] text-[#078c45]">
                Landscaping &amp; Tree Services
              </p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-xl text-gray-700 transition hover:bg-gray-200"
          >
            <FaTimes />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex-1 overflow-y-auto px-5 py-6">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-gray-400">
            Navigation
          </p>

          <div className="space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-2xl px-4 py-4 text-base font-extrabold transition ${
                    isActive
                      ? "bg-[#0c4a2a] text-white shadow-lg"
                      : "text-gray-700 hover:bg-green-50 hover:text-[#078c45]"
                  }`
                }
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-current/10 text-lg">
                  {link.icon}
                </span>

                <span>{link.name}</span>
              </NavLink>
            ))}
          </div>

          {/* Small Information Card */}
          <div className="mt-8 rounded-2xl bg-[#eef7f1] p-5">
            <p className="text-sm font-black text-[#0c4a2a]">
              Need landscaping or tree care?
            </p>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Contact our team for reliable outdoor services and a free
              estimate.
            </p>
          </div>
        </nav>

        {/* Bottom CTA Area */}
        <div className="border-t border-gray-100 bg-white p-5">
         <a
  href="tel:+15186718733"
  className="hidden items-center gap-2 rounded-full bg-[#056b36] px-5 py-3 text-sm font-extrabold text-white transition hover:bg-[#034f28] lg:flex"
>
            <FaPhoneAlt />
            Call (518) 671-8733
          </a>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex w-full items-center justify-center rounded-full border-2 border-[#078c45] px-5 py-3.5 font-extrabold text-[#078c45] transition hover:bg-green-50"
          >
            Get Free Estimate
          </Link>
        </div>
      </aside>
    </>
  );
}

export default Navbar;