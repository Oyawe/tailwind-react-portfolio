import "./App.css";
import { BsMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "./image/dev-ed-wave.png";
import design from "./image/design.png";
import code from "./image/code.png";
import consulting from "./image/consulting.png";
import web1 from "./image/web1.png";
import web2 from "./image/web2.png";
import web3 from "./image/web3.png";
import web4 from "./image/web4.png";
import web5 from "./image/web5.png";
import web6 from "./image/web6.png";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark sm:w-fit" : "sm:w-fit"}>
      <main className="bg-white px-10 md:px-20 lg:40 dark:bg-gray-900 sm:w-fit">
        <section>
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="text-2xl font-burtons dark:text-gray-300">
                `IBTB (Ibadan_TechBro)`
              </h1>
              <ul className="flex items-center">
                <li>
                  <BsMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-2xl dark:text-gray-300"
                  />
                </li>
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                    href="#"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            {/* Hero section */}
            <div className="text-center p-10">
              <h2 className="text-5xl py-4 -mt-8 text-teal-600 font-medium md:text-6xl">
                IBTB (Ibadan_TechBro)
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                Developer and designer.
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-400">
                Freelancer providing services for programming and design content
                needs. Join me down below and lets get cracking!
              </p>
            </div>
            <div
              className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400
          "
            >
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-16 mb-20 overflow-hidden md:h-96 md:w-96">
              <img src={deved} alt="" />
            </div>
          </section>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              Since the begining of my journey as a freelance designer and
              developer, Ive done remote work for{" "}
              <span className=" text-teal-500">agencies </span>consulted for
              <span className=" text-teal-500">startups </span> and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              I offer from a wide range of services, including programming and
              teaching.
            </p>
          </div>

          <div className="lg: flex gap-10">
            {/*Card Design*/}
            <div className="text-center shadow-xl p-10 rounded-xl my-10 dark:shadow-2xl">
              <div className="flex justify-center items-center">
                <img src={design} alt="" className="w-20 pt-6" />
              </div>
              <h3 className="text-xl font-md pt-6 pb-2 dark:text-gray-400">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-gray-400">
                Creating elegant designs suiited for your needs following coree
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Illustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10">
              <div className="flex justify-center items-center">
                <img src={code} alt="" className="w-20 pt-6" />
              </div>
              <h3 className="text-xl font-md pt-6 pb-2 dark:text-gray-400">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-gray-400">
                Creating elegant designs suiited for your needs following coree
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Illustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10">
              <div className="flex justify-center items-center">
                <img src={consulting} alt="" className="w-20 pt-6" />
              </div>
              <h3 className="text-xl font-md pt-6 pb-2 dark:text-gray-400">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-gray-400">
                Creating elegant designs suiited for your needs following coree
                design theory
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use</h4>
              <p className="text-gray-800 py-1 dark:text-gray-400">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-gray-400">
                Illustrator
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-400">Figma</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800  dark:text-gray-400">
              Since the begining of my journey as a freelance designer and
              developer, Ive done remote work for{" "}
              <span className=" text-teal-500">agencies </span>consulted for
              <span className=" text-teal-500">startups </span> and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-400">
              I offer from a wide range of services, including programming and
              teaching.
            </p>
          </div>

          <div className=" flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <img
                src={web1}
                alt=""
                className="rounded-large object-cover w-max h-max"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web2}
                alt=""
                className="rounded-large object-cover w-max h-max"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                src={web3}
                alt=""
                className="rounded-large object-cover w-max h-max"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <img
                src={web4}
                alt=""
                className="rounded-large object-cover w-max h-max"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <img
                src={web5}
                alt=""
                className="rounded-large object-cover w-max h-max"
              />
            </div>
            <div className=" basis-1/3 flex-1">
              <img
                src={web6}
                alt=""
                className="rounded-large object-cover w-max h-max"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
