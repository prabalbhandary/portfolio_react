import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-800">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Services</h1>

        <div className="mb-4">
          <p className="text-black dark:text-black mb-2">HTML: 55%</p>
          <div className="bg-blue-200 h-4 rounded-full">
            <div className="w-55 bg-blue-500 h-full rounded-full"></div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-black dark:text-black mb-2">CSS: 35%</p>
          <div className="bg-green-200 h-4 rounded-full">
            <div className="w-35 bg-green-500 h-full rounded-full"></div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-black dark:text-black mb-2">Tailwind CSS: 40%</p>
          <div className="bg-indigo-200 h-4 rounded-full">
            <div className="w-40 bg-indigo-500 h-full rounded-full"></div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-black dark:text-black mb-2">Bootstrap: 35%</p>
          <div className="bg-yellow-200 h-4 rounded-full">
            <div className="w-35 bg-yellow-500 h-full rounded-full"></div>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-black dark:text-black mb-2">JavaScript: 25%</p>
          <div className="bg-orange-200 h-4 rounded-full">
            <div className="w-25 bg-orange-500 h-full rounded-full"></div>
          </div>
        </div>

        <div>
          <p className="text-black dark:text-black mb-2">React: 45%</p>
          <div className="bg-purple-200 h-4 rounded-full">
            <div className="w-45 bg-purple-500 h-full rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
