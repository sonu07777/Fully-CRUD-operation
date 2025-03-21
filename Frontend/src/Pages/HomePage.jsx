import React from "react";
import LandingPage from "../../Layout/HomeLayout";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <LandingPage>
      {/* Hero Section */}
      <section className="text-center flex flex-col items-center px-4 py-12 md:py-20">
      <a
            href="https://www.capsitech.com/services/"
            target="_blank"
            rel="noopener noreferrer">
        <span className="bg-gray-100 px-3 py-1 text-sm rounded-full">
          We're providing services like... <b>Click Me</b> &rarr;
        </span>
        </a>
        <h1 className="text-4xl md:text-6xl font-bold mt-4">
          Customer <br className="hidden md:block" /> relationship magic.
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-xl">
          Attio is the AI-native CRM that builds, scales, and grows your company
          to the next level.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <a
            href="https://www.capsitech.com/"
            target="_blank"
            rel="noopener noreferrer">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800">
              Start for free
            </button>
          </a>
          <Link
            to="/contactUs"
            className="border border-gray-500 px-6 py-3 rounded-md text-gray-700 hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </LandingPage>
  );
}

export default HomePage;
