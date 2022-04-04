import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../../data";

import { ReactComponent as HTMLIcon} from '../../assets/html.svg';
import { ReactComponent as CSSIcon} from '../../assets/css.svg';
import { ReactComponent as JSIcon} from '../../assets/javascript.svg';
import { ReactComponent as NodeIcon} from '../../assets/node.svg';
import { ReactComponent as ReactIcon} from '../../assets/react.svg';
import { ReactComponent as NpmIcon } from '../../assets/npm.svg';
import { ReactComponent as BSIcon} from '../../assets/bootstrap.svg';
import { ReactComponent as HBIcons } from '../../assets/handlebars.svg';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-20 mx-auto h-[100vh]">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-[#000000] mb-4">
            About Me
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          One of many driven by the pandemic to pick up a new skill, I found myself driving into the world of coding 
              and getting hooked. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
              Laborum, voluptas natus?
          </p>
        </div>
        
        {/* <div className="container px-5 py-10 mx-auto flex justify-center sm:flex-nowrap flex-wrap"> */}
          <div className="text-center mb-5">
              <h3 className="sm:text-2xl text-xl font-medium title-font text-[#000000] mb-4">
                Skills &amp; Technologies
              </h3>
        </div>
        <div className="container px-5 py-10 pt-2 mx-auto flex justify-center sm:flex-nowrap flex-wrap">
          <HTMLIcon className="h-10 w-10 mx-auto"/>
          <CSSIcon className="h-10 w-10 mx-auto"/>
          <JSIcon className="h-10 w-10 mx-auto"/>
          <NodeIcon className="h-10 w-10 mx-auto"/>
          <ReactIcon className="h-10 w-10 mx-auto"/>
          <NpmIcon className="h-10 w-10 mx-auto"/>
          <BSIcon className="h-10 w-10 mx-auto"/>
          <HBIcons className="h-10 w-10 mx-auto"/>
        </div>
          {/* </div> */}



      </div>
    </section>
  );
}