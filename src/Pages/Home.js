import React from "react";
import { Link } from "react-router-dom";
import myImage from "../assets/me.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <img
          src={myImage}
          alt="Myself"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <h1 className="text-2xl font-semibold mb-4">Welcome to My Portfolio</h1>
        <p className="text-black dark:text-black">
          Thank you for visiting my website. I am excited to share more about
          myself and my work.
        </p>
        <div className="mt-6 space-x-4">
          {/* "About" button */}
          <Link
            to="/about"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            About
          </Link>
          {/* "Contact" button */}
          <Link
            to="/contact"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
