import React from "react";
import myImage from "../assets/me.jpg"; // Adjust the path based on your file structure

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <img
          src={myImage}
          alt="Myself"
          className="w-full h-auto mb-6 rounded-lg"
        />
        <h1 className="text-2xl font-semibold text-black dark:text-black mb-4">
          About Me
        </h1>
        <p className="text-black dark:text-black">
          Welcome to my About page! Here, you can learn more about me and my
          journey. Feel free to explore the content and get in touch if you have
          any questions.
        </p>
      </div>
    </div>
  );
};

export default About;
