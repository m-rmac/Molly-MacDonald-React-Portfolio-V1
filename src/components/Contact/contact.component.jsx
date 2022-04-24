import React from "react";
import { UserIcon } from '@heroicons/react/outline'

// import { Link } from 'react-router-dom';

import { ReactComponent as GitHubLogo } from '../../assets/github-1.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/linkedin.svg';
import { ReactComponent as EmailImg } from '../../assets/email.svg';

export default function Contact() {

      
    return (
      <section id="contact" className="relative bg-[#1A1A1D]">
        {/* <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
          
        
        </div> */}

       <div className="container px-5 py-20 mx-auto h-[95vh]">
        <div className="text-center mb-20">
          <UserIcon className="mx-auto inline-block w-10 mb-4"/>
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Contact Me
          </h1>
          <p className="text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            If you want to work with me or have any questions, please don't hesitate to get in touch.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <a className="h-20 w-20 mx-auto" href="https://github.com/m-rmac">
            <GitHubLogo className="logo" />
          </a>
          <a className="h-20 w-20 mx-auto" href="https://www.linkedin.com/in/molly-macdonald/">
            <LinkedinLogo className="logo" />
          </a>
          
          <EmailImg className="h-20 w-20 mx-auto cursor-pointer" onClick={() => window.location = 'mailto:mollyrose.macdonald@gmail.com'}/>
          
        </div>

      </div>
    

      </section>
    );
  }