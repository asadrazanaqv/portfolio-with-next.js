import React from "react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSanity, SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import {
  FaCss3Alt,
  FaGithub,
  FaPython,
  FaWordpressSimple,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { FiFigma } from "react-icons/fi";

const Expertise = () => {
  return (
    <div id="skills">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
           Expertise
          </h1>
        </div>
        <div className="grid gap-y-8 ">
        <div className="container px-5 py-10">
          <div className="flex flex-wrap  -m-8 -mt-[0rem]">
            {/* html */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                    <TiHtml5 className="flex items-center size-6" />
                  </div>
                  <h2 className="text-gray-900 dark:text-gray-300 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-teal-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-teal-500 text-right">100%</p>
                </div>
              </div>
            </div>
            {/* css */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                    <FaCss3Alt className="flex items-center size-5" />
                  </div>
                  <h2 className="text-gray-900 dark:text-gray-300 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-teal-500 h-1 rounded-xl w-[95%]"></div>
                  </div>
                  <p className="font-bold text-teal-500 text-right">95%</p>
                </div>
              </div>
            </div>
            {/*typescript */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                    <BiLogoTypescript className="flex items-center size-6" />
                  </div>
                  <h2 className="text-gray-900 dark:text-gray-300 text-lg title-font font-medium">
                    Typescript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-teal-500 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-teal-500 text-right">90%</p>
                </div>
              </div>
            </div>
            {/* Python */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                    <FaPython className="flex items-center size-6" />
                  </div>
                  <h2 className="text-gray-900 dark:text-gray-300 text-lg title-font font-medium">
                    Python
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-teal-500 h-1 rounded-xl w-[85%]"></div>
                  </div>
                  <p className="font-bold text-teal-500 text-right">85%</p>
                </div>
              </div>
            </div>
            {/* MongoDB */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                    <SiMongodb className="flex items-center size-6" />
                  </div>
                  <h2 className="text-gray-900 dark:text-gray-300 text-lg title-font font-medium">
                    MongoDB
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-teal-500 h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-teal-500 text-right">80%</p>
                </div>
              </div>
            </div>
            {/* Sanity */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                    <SiSanity className="flex items-center size-5" />
                  </div>
                  <h2 className="text-gray-900 dark:text-gray-300 text-lg title-font font-medium">
                    Sanity
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-teal-500 h-1 rounded-xl w-[85%]"></div>
                  </div>
                  <p className="font-bold text-teal-500 text-right">80%</p>
                </div>
              </div>
            </div>
            {/* Next.js */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                    <TbBrandNextjs className="flex items-center size-10" />
                  </div>
                  <h2 className="text-gray-900 dark:text-gray-300 text-lg title-font font-medium">
                    Next.JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-teal-500 h-1 rounded-xl w-[70%]"></div>
                  </div>
                  <p className="font-bold text-teal-500 text-right">70%</p>
                </div>
              </div>
            </div>
            {/* React */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                    <FaReact className="flex items-center size-7" />
                  </div>
                  <h2 className="text-gray-900 dark:text-gray-300 text-lg title-font font-medium">
                    React
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-teal-500 h-1 rounded-xl w-[60%]"></div>
                  </div>
                  <p className="font-bold text-teal-500 text-right">75%</p>
                </div>
              </div>
            </div>
            {/* Wordpress */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                    <FaWordpressSimple className="flex items-center size-7" />
                  </div>
                  <h2 className="text-gray-900 dark:text-gray-300 text-lg title-font font-medium">
                    Wordpress
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-teal-500 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-teal-500 text-right">90%</p>
                </div>
              </div>
            </div>
            {/* Git & GitHub */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                    <FaGithub className="flex items-center size-7" />
                  </div>
                  <h2 className="text-gray-900 dark:text-gray-300 text-lg title-font font-medium">
                    Git & GitHub
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-teal-500 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-teal-500 text-right">90%</p>
                </div>
              </div>
            </div>
            {/* UI & UX Design */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                    <FiFigma className="flex items-center size-6" />
                  </div>
                  <h2 className="text-gray-900 dark:text-gray-300 text-lg title-font font-medium">
                    UI & UX Design
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-teal-500 h-1 rounded-xl w-[95%]"></div>
                  </div>
                  <p className="font-bold text-teal-500 text-right">95%</p>
                </div>
              </div>
            </div>
            {/* Tailwind CSS */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-teal-500 text-white flex-shrink-0">
                    <SiTailwindcss className="flex items-center size-6" />
                  </div>
                  <h2 className="text-gray-900 dark:text-gray-300 text-lg title-font font-medium">
                    Tailwind CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute bg-teal-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-teal-500 text-right">100%</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
