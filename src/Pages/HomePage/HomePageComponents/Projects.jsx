import React, { useEffect, useState } from "react";
import Container from "../../../Shared/Container";
import SectionTitle from "../../../Shared/SectionTitle";

const Projects = () => {
  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch("/Project.json")
      .then((res) => res.json())
      .then((data) => setProject(data));
  }, []);

  return (
    <div className="my-20" id="projects">
      <Container>
        {/* Section Title */}
        <div className="mb-10">
          <SectionTitle
            text={"Some of My Projects"}
            subTitle={"Projects That Define My Skills"}
          />
        </div>

        {/* Project Grid */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {project.map((item, index) => (
            <div
              key={index}
              className="card bg-zinc-900/80 shadow-md hover:shadow-xl transition-all duration-300 rounded-lg"
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
              <div className="card-body flex flex-col justify-between">
                <h2 className="card-title text-xl text-gray-100 font-semibold">
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
                    href={item.github ? item.github : ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline text-[#d031b6] border border-[#d031b6] shadow-none hover:bg-[#d031b6] hover:text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href={item.live ? item.live : ""}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm bg-[#d031b6] shadow-none border-none text-white"
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
