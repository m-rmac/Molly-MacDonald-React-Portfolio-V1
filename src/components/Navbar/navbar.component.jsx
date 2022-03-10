import { DownloadIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-[#FFFFFF] border-solid border-b border-[#000000] md:sticky top-0 z-20">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/" className="title-font font-medium text-[#000000] mb-4 md:mb-0">
          <a href="/" className="ml-3 text-xl">
            Molly MacDonald
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-[#000000]">
            Projects
          </a>
          <a href="#skills" className="mr-5 hover:text-[#000000]">
            About
          </a>
          <a href="#contact" className="mr-5 hover:text-[#000000]">
            Contact
          </a>

        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-[#5C64ED] border-0 py-1 px-3 focus:outline-none hover:bg-[#4B50BF] rounded text-[#FFFFFF] mt-4 md:mt-0">
         <DownloadIcon className="w-4 h-4 mr-1" />
            CV
        </a>
      </div>
    </header>
  );
}