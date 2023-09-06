import "./App.css";
import { BsMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "./image/dev-ed-wave.png";

function App() {
  return (
    <main className="bg-white px-10 ">
      <section>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-burtons">`IBTB (Ibadan_TechBro)`</h1>
            <ul className="flex items-center">
              <li>
                <BsMoonStarsFill className="cursor-pointer text-2xl" />
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
            <h2 className="text-5xl py-4 text-teal-600 font-medium">
              IBTB (Ibadan_TechBro)
            </h2>
            <h3 className="text-2xl py-2">Developer and designer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              Freelancer providing services for programming and design content
              needs. Join me down below and lets get cracking!
            </p>
          </div>
          <div
            className="text-5xl flex justify-center gap-16 py-3 text-gray-600
          "
          >
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
            <img src={deved} alt="" />
          </div>
        </section>
      </section>
    </main>
  );
}

export default App;
