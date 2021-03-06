import React from "react";

import { LocationMarkerIcon } from '@heroicons/react/outline';
// import Profile from '../../assets/profile-image.jpg'

export default function About() {
    return (
      <section id="about">
        <div className="container min-h-[100vh] mx-auto flex  py-10 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-[#000000]">
              Molly MacDonald. <br className="hidden md:inline-block" /> 
              Web Developer
            </h1>
            <h4 className="inline-flex text-gray-600">
            <LocationMarkerIcon className="w-5 h-5 mr-1"/> Berlin, Germany
            </h4>
            <br/>
            {/* <p className="mb-8 leading-relaxed">
              One of many driven by the pandemic to pick up a new skill, I found myself dabbling, then diving into the world of coding 
              and getting hooked. 
            </p> */}
            <div className="flex sm:flex-row justify-center flex-col items-center py-10">
              <a
                href="#contact"
                className="sm:inline-flex inline-block text-white bg-green-400 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg sm:mb-0 mb-3 justify-center">
                Work With Me
              </a>
              <a
                href="#projects"
                className="sm:ml-4 sm:inline-flex inline-block text-white bg-blue-400 border-solid border border-blue-400 py-2 px-6 focus:outline-none hover:bg-blue-500 hover:text-white rounded text-lg justify-center">
                See My Past Projects
              </a>
            </div>
          </div>
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={Profile}
            />
          </div> */}
        </div>
      </section>
    );
  }