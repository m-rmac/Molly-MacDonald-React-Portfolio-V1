import { ChipIcon } from "@heroicons/react/solid";
import React from "react";

import { ReactComponent as HTMLIcon} from '../../assets/html.svg';
import { ReactComponent as CSSIcon} from '../../assets/css.svg';
import { ReactComponent as JSIcon} from '../../assets/javascript.svg';
import { ReactComponent as NodeIcon} from '../../assets/node.svg';
import { ReactComponent as ReactIcon} from '../../assets/react.svg';
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
          I’m Molly, a junior web developer, born and raised in Auckland, New Zealand. I have been interested in tech and have had persistent desire to learn since I can remember. 
          Recently tipped over the edge by targeted advertising, a pandemic and a desire to change my career trajectory, I decided to investigate coding. <br/><br/>

          Over the past year I have been dedicated to learning how to code and create applications. Starting with a University course with a focus on Java and frontend technologies, 
          I was gripped by frontend. Since, I have become most interested in React, CSS frameworks (tailwind and bootstrap), Javascript, Express and Node.js. <br/><br/>

          My goal is to become a valuable Full-stack developer, able to take great ideas to improve peoples lives and turn them into well executed applications. <br/><br/>

          In my spare time I enjoy getting outside and exploring, playing/watching rollerderby, rock climbing, reading and board games. <br/>

          </p>
        </div>
        
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
          <BSIcon className="h-10 w-10 mx-auto"/>
          <HBIcons className="h-10 w-10 mx-auto"/>
        </div>
          {/* </div> */}



      </div>
    </section>
  );
}