import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black py-10 px-6 mt-12 border-t">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Branding */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold">Vorix</h2>
          <p className="mt-2 text-gray-600">
            Creative design agency specializes in innovative visual solutions
          </p>
          <div className="flex gap-3 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
              <FaFacebookF className="text-blue-600" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
              <FaTwitter className="text-blue-400" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
              <FaLinkedinIn className="text-blue-700" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition"
            >
              <FaInstagram className="text-pink-500" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Services</h3>
          <ul className="text-gray-600 space-y-1">
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              UI/UX Design
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Mobile Apps Design
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Web Development
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              SaaS Design
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Webflow Design
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Resources</h3>
          <ul className="text-gray-600 space-y-1">
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              About Us
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Portfolio
            </li>
            <li className="text-yellow-500 hover:text-yellow-600 transition-colors cursor-pointer">
              Expert Team
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Pricing Plan
            </li>
            <li className="hover:text-yellow-500 transition-colors cursor-pointer">
              Blog & News
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Email address"
              className="w-full border rounded-full px-4 py-2"
            />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="agree" />
              <label htmlFor="agree" className="text-sm text-gray-600">
                I agree with the terms and conditions.
              </label>
            </div>
            <button className="bg-yellow-400 rounded-full px-4 py-2 hover:bg-yellow-500 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-10 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 Theme Ocean</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-yellow-500 transition">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-yellow-500 transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
