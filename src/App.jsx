import "./App.css";
import { BsMoonStarsFill } from "react-icons/bs";

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
        </section>
      </section>
    </main>
  );
}

export default App;
