import React, { useEffect, useState } from "react";
import Container from "../../../Shared/Container";
import SectionTitle from "../../../Shared/SectionTitle";

const Projects = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("Project.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  return (
    <div className="my-10">
      <Container>
        {/* Section Title */}
        <div className="mb-10">
          <SectionTitle Text={"Some of My Projects"} />
          <p className="text-gray-400 mt-2 text-lg">
            Projects That Define My Skills
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {project.map((item, index) => (
            <div
              key={index}
              className="card bg-base-200 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg"
            >
              {/* Image */}
              <figure className="overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                />
              </figure>

              {/* Card Body */}
              <div className="card-body">
                <h2 className="card-title text-lg font-semibold">
                  {item.title}
                </h2>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="badge badge-neutral">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="card-actions justify-between mt-4">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm border border-[#d031b6]"
                  >
                    GitHub
                  </a>
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm bg-[#d031b6]"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Projects;
