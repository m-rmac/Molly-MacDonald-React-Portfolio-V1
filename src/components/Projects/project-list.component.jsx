import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../../data";

export default function ProjectsList() {
  return (
    <section id="projects" className="text-gray-400 bg-[#1A1A1D] body-font">
      <div className="container px-5 py-20 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Built
          </h1>
          {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p> */}
        </div>
        <div className="flex flex-col w-full sm:m-4">
          {projects.map((project) => (
            <div
              href={project.link}
              key={project.image}
              className="flex sm:flex-row flex-col w-100 p-4 m-h-96">
              <div className="flex sm:w-1/2 h-80">
                <img
                  alt="gallery"
                  className="inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                
{/* Box for the image */}
              </div>
                <div className="flex sm:ml-2 px-4 py-6 sm:w-1/2 h-80 sm:mt-0 mt-2 border-4 border-gray-800 bg-[#1A1A1D]">

                    <div className="flex flex-col justify-between">

                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font w-full text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>


                  <div className="flex flex-row justify-center ">
                  {/* md:mt-12 lg:mt-24 */}
                    <a
                    href={project.siteLink}
                    key={project.image}
                    className="w-1/2 m-1 b-1"
                    >
                      <div className="h-10 w-50 relative z-10 border-b-4 border-[#C3073F] bg-[#1A1A1D] hover:bg-[#C3073F] ">
                        <div className="tracking-widest w-full h-full z-11 content-center text-sm title-font font-medium text-[#C3073F] hover:text-white">
                        <h3 className="pt-2">Live</h3>
                        </div>
                        
                      </div>

                    </a>

                    <a
                    href={project.gitLink}
                    key={project.image}
                    className="w-1/2 m-1"
                    >
                      <div className="h-10 w-50 relative z-10 border-b-4 border-[#4B50BF] bg-[#1A1A1D] hover:bg-[#4B50BF]">
                      <div className="tracking-widest w-full h-full z-11 content-center text-sm title-font font-medium text-[#4B50BF] hover:text-white">
                        <h3 className="flex justify-center  pt-2">Source Code</h3>
                        </div>
                      </div>

                    </a>
                  
                  </div>

                  </div>
            {/* Container end */}
                </div>
              
              
            </div>

            
            
            
          ))}
          
        </div>
      </div>
    </section>
  );
}