// import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container h-full px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4 h-96">
              <div className="flex relative h-80">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-4 py-6 relative z-9 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>


                  <div className=" flex justify-center md:mt-12 lg:mt-24">
                  
                    <a
                    href={project.siteLink}
                    key={project.image}
                    className="w-1/2 m-1"
                    >
                      <div className="px-1 py-1 relative z-10 border-4 border-gray-800 bg-gray-900 hover:bg-[#4B50BF]">
                        <h3 className="tracking-widest w-full h-full z-11 text-sm title-font font-medium text-[#4B50BF] mb-1 hover:text-white">Live</h3>
                      </div>

                    </a>

                    <a
                    href={project.gitLink}
                    key={project.image}
                    className="w-1/2 m-1"
                    >
                      <div className="px-1 py-1 relative z-10 border-4 border-gray-800 bg-gray-900 hover:bg-[#4B50BF]">
                        <h3 className="tracking-widest w-full h-full z-11 text-sm title-font font-medium text-[#4B50BF] mb-1 hover:text-white">Source Code</h3>
                      </div>

                    </a>
                  

                  </div>

                </div>

              </div>
              
            </div>

            
            
            
          ))}
          
        </div>
      </div>
    </section>
  );
}