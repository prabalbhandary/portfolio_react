import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description for Project 1.',
      githubLink: 'https://github.com/your-username/project1',
      imageSrc: 'project1.jpg', // Adjust the image source based on your file structure
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2.',
      githubLink: 'https://github.com/your-username/project2',
      imageSrc: 'project2.jpg', // Adjust the image source based on your file structure
    },
    // Add more projects as needed
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                GitHub Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
